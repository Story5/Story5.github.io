import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AMapProvider, AMap_district_interface } from '../../../../providers/AMap/AMap';
import { AmapChooseCityPage } from './amap-choose-city/amap-choose-city';

declare var AMap;

@Component({
  selector: 'page-amap',
  templateUrl: 'amap.html',
})
export class AMapPage {

  city = {
    adcode: '100000',
    name: '中国',
  }

  constructor(
    private navCtrl: NavController,
    private amap: AMapProvider) {
  }

  ionViewDidLoad() {
    this.initAMap();
  }

  initAMap() {
    this.amap.initAMap('container', (map) => {
      //初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
      // this.city.adcode = map.getAdcode();
      map.getCity(result => {
        console.log("getCity:",JSON.stringify(result));
        this.city.adcode = result.citycode;
        this.city.name = result.province;
      });

      // //实例化城市查询类
      // var citysearch = new AMap.CitySearch();
      // //自动获取用户IP，返回当前城市
      // citysearch.getLocalCity((status, result) => {
      //   if (status === 'complete' && result.info === 'OK') {
      //     console.log("getLocalCity:", JSON.stringify(result));
      //     if (result) {
      //       this.city.adcode = result.adcode;
      //       this.city.name = result.city;
      //       //地图显示当前城市
      //       map.setBounds(result.bounds);
      //     }
      //   }
      // });

      // //构造地点查询类
      // var placeSearch = new AMap.PlaceSearch({
      //   pageSize: 10, // 单页显示结果条数
      //   pageIndex: 1, // 页码
      //   city: this.city.adcode, // 兴趣点城市
      //   citylimit: true,  //是否强制限制在设置的城市内搜索
      //   map: map, // 展现结果的地图实例
      //   panel: "panel", // 结果列表将在此容器中进行展示。
      //   autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      // });
      // //关键字查询
      // placeSearch.search('教育', function (status, result) {
      //   // 搜索成功时，result即是对应的匹配数据
      //   console.log(result);
      // });
    });
  }

  clickChooseCity() {
    this.navCtrl.push(AmapChooseCityPage, {
      callback: (name: string, district: AMap_district_interface) => {
        this.city.adcode = district.adcode;
        this.city.name = name;
        this.amap.map.setCenter(district.center);
      }
    })
  }

  clickSearch() {

  }


}
