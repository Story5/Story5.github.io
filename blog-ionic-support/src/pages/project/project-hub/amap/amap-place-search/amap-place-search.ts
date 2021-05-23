import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AMapProvider } from '../../../../../providers/AMap/AMap';
import { TipProvider } from '../../../../../providers/sx-tip';
import { AMapPlaceSearchSettingPage } from '../amap-place-search-setting/amap-place-search-setting';
import { AMapPoiList_Interface, AMapPoi_Interface, AMapSearchResult_Interface } from '../amap.interface';
declare var AMap;
declare var XLSX;
type AOA = any[][];

@Component({
  selector: 'page-amap-place-search',
  templateUrl: 'amap-place-search.html',
})
export class AMapPlaceSearchPage {
  title: string = "关键字搜索";

  city: any = "全国";
  pageSize: number = 50;
  placeSearch: any;//构造地点查询类

  searchText: string = "";
  searchResult: AMapSearchResult_Interface;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private amap: AMapProvider,
    private tip: TipProvider
  ) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get("name");
    this.city = this.navParams.get("adcode");

    this.placeSearch = this.createPlaceSearchInstance(this.pageSize);
  }

  clickSettings() {
    this.navCtrl.push(AMapPlaceSearchSettingPage, {
      pageSize: this.pageSize,
      callback: (pageSize) => {
        this.pageSize = pageSize;
        this.placeSearch = this.createPlaceSearchInstance(this.pageSize);
      }
    });
  }

  onClear(e) {
    this.onCancel(e);
  }

  onCancel(e) {
    this.searchText = "";

    if (this.placeSearch) {
      this.placeSearch.clear();
    }
  }

  onInput(e) {
    this.search(this.searchText);
  }

  search(searchText: string) {
    if (this.searchText.length == 0) {
      return;
    }

    if (!this.placeSearch) {
      this.tip.alert("高德PlaceSearch组件生成失败");
      return;
    }

    //关键字查询
    this.placeSearch.search(searchText, (status: string, result: any) => {
      if (status == "complete") {
        // 当status为complete时，result为SearchResult；
        this.searchResult = result;
      } else if (status == "error") {
        // 当status为error时，result为错误信息info；
        this.tip.alert("error:", JSON.stringify(result));
      } else if (status == "no_data") {
        // 当status为no_data时，代表检索返回0结果 相关示例
        console.error("no_data:", JSON.stringify(result));
      } else {
        this.tip.alert("出错");
      }
    });
  }

  clickDownload() {
    if (!this.searchResult) {
      this.tip.alert("搜索数据错误");
      return;
    }
    console.log(this.searchResult);
    if (this.searchResult.info != "OK") {
      this.tip.alert("info数据错误");
      return;
    }
    let poiList: AMapPoiList_Interface = this.searchResult.poiList;
    console.log("count:", poiList.count);
    console.log("pageSize:", poiList.pageSize);
    console.log("pageIndex:", poiList.pageIndex);

    let first = (poiList.pageIndex - 1) * poiList.pageSize + 1;
    let end = poiList.pageIndex * poiList.pageSize;
    let fileName: string = this.searchText + first + "-" + end;

    this.tip.alertTemplate("请选择输出excel格式", undefined, "xls", () => {
      this.exportToXLS(poiList.pois, fileName, "xls");
    }, "xlsx", () => {
      this.exportToXLS(poiList.pois, fileName, "xlsx");
    })
  }

  exportToXLS(poiList: Array<AMapPoi_Interface>, fileName: string = "SheetJS", type: string = "xlsx") {
    let data: AOA = [
      ["序号", "名称", "省市区", "地级市", "区县", "地址", "电话", "类别"]
    ];
    poiList.forEach((element: AMapPoi_Interface, index: number) => {
      data.push([
        index + 1, element.name, element.pname, element.cityname, element.adname, element.pname + element.cityname + element.adname + element.address, element.tel, element.type
      ])
    });
    console.log(data);

    /* generate worksheet */
    const ws = XLSX.utils.aoa_to_sheet(data);

    /* generate workbook and add the worksheet */
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName + "." + type);
  }


  /** 构造地点查询类
   * @param pageSize : 10, // 单页显示结果条数,默认值：10,取值范围：1-50,超出取值范围按最大值返回
   */
  createPlaceSearchInstance(pageSize: number = 10) {
    let placeSearch = new AMap.PlaceSearch({
      pageSize: pageSize,
      pageIndex: 1,// 页码,默认值：1,取值范围：1-100，超过实际页数不返回poi
      city: this.city,// 兴趣点城市,默认值：“全国”
      citylimit: true,// 是否强制限制在设置的城市内搜索，默认值为：false
      map: this.amap.map,// 展现结果的地图实例
      panel: "panel",// 结果列表将在此容器中进行展示。
      autoFitView: true// 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    return placeSearch;
  }
}
