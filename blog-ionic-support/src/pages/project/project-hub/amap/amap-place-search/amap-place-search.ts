import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AMapProvider } from '../../../../../providers/AMap/AMap';
import { AMapPlaceSearchSettingPage } from '../amap-place-search-setting/amap-place-search-setting';
declare var AMap;
@Component({
  selector: 'page-amap-place-search',
  templateUrl: 'amap-place-search.html',
})
export class AMapPlaceSearchPage {
  title: string = "关键字搜索";
  searchOptions = {
    city: "全国",// 兴趣点城市,默认值：“全国”
    citylimit: true,// 是否强制限制在设置的城市内搜索，默认值为：false
    pageSize: 10,// 单页显示结果条数,默认值：10,取值范围：1-50,超出取值范围按最大值返回
    pageIndex: 1,// 页码,默认值：1,取值范围：1-100，超过实际页数不返回poi
    map: this.amap.map,// 展现结果的地图实例
    panel: "panel",// 结果列表将在此容器中进行展示。
    autoFitView: true// 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
  }
  searchText: string = "";

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private amap: AMapProvider
  ) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get("name");
    this.searchOptions.city = this.navParams.get("adcode");
  }

  clickSettings() {
    this.navCtrl.push(AMapPlaceSearchSettingPage, {

    });
  }

  onCancel(e) {
    this.searchText = "";
  }

  onInput(e) {
    console.log(e);
    this.placeSearch(this.searchText);
  }

  placeSearch(searchText: string) {
    if (this.searchText.length == 0) {
      return;
    }

    //构造地点查询类
    var placeSearch = new AMap.PlaceSearch(this.searchOptions);
    //关键字查询
    placeSearch.search(searchText, (status, result) => {
      // 搜索成功时，result即是对应的匹配数据
      console.log(result);
    });
  }

}
