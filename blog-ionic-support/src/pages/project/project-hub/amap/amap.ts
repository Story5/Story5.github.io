import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AMapProvider, AMap_district_interface } from '../../../../providers/AMap/AMap';
import { AMapChooseCityPage } from './amap-choose-city/amap-choose-city';
import { AMapPlaceSearchPage } from './amap-place-search/amap-place-search';

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
        console.log("getCity:", JSON.stringify(result));
        this.city.adcode = result.citycode;
        this.city.name = result.province;
      });
    });
  }

  clickChooseCity() {
    this.navCtrl.push(AMapChooseCityPage, {
      callback: (name: string, district: AMap_district_interface) => {
        this.city.adcode = district.adcode;
        this.city.name = name;
        this.amap.map.setCenter(district.center);
      }
    })
  }

  clickSearch() {
    this.navCtrl.push(AMapPlaceSearchPage, {
      adcode: this.city.adcode,
      name: this.city.name
    });
  }
}
