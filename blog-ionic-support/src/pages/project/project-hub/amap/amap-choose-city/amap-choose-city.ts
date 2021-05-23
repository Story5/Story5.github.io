import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AMap_district_interface } from '../../../../../providers/AMap/AMap';
import { TipProvider } from '../../../../../providers/sx-tip';
declare var AMap;
@Component({
  selector: 'page-amap-choose-city',
  templateUrl: 'amap-choose-city.html',
})
export class AMapChooseCityPage {

  callback: any;

  country = {
    province_index: -1,
    province: [],// 省市区
    city_index: -1,
    city: [],// 地级市
    district_index: -1,
    district: [],// 区县
    street_index: -1,
    street: []// 街道
  }
  amapDistrict;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private tip:TipProvider) {
  }

  ionViewDidLoad() {
    this.callback = this.navParams.get("callback");
    this.initAMapDistrict();
    this.search();
  }

  initAMapDistrict() {
    this.amapDistrict = new AMap.DistrictSearch({
      subdistrict: 1,//返回下一级行政区
      showbiz: false//最后一级返回街道信息
    });
  }

  selectChange(level: string) {
    this.clearDataOnChange(level);
    let index = this.country[level + '_index'];
    if (index != -1) {
      let district: AMap_district_interface = this.country[level][index];
      this.search(district.adcode);
    }
  }


  // adcode = 100000 表示 中国
  search(adcode: string = '100000') {
    this.tip.presentLoading();
    this.amapDistrict.search(adcode, (status, result) => {
      this.tip.dismissLoading();
      if (status == 'complete') {
        console.log(result);
        let data: AMap_district_interface = result.districtList[0];
        if (data.districtList && data.districtList.length > 0) {
          let firstLevel = data.districtList[0].level;
          this.country[firstLevel] = data.districtList;
        }
      }
    });
  }

  clickConfirm() {
    let name = '';
    let district: AMap_district_interface;
    if (this.country.province_index != -1) {
      district = this.country.province[this.country.province_index];
      name += district.name;
    }
    if (this.country.city_index != -1) {
      district = this.country.city[this.country.city_index];
      name += district.name;
    }
    if (this.country.district_index != -1) {
      district = this.country.district[this.country.district_index];
      name += district.name;
    }
    if (this.country.street_index != -1) {
      district = this.country.street[this.country.street_index];
      name += district.name;
    }

    if (district) {
      if (this.callback) {
        this.callback(name, district);
      }
      this.navCtrl.pop();
    } else {
      this.tip.alert('请选择');
    }
  }

  clearDataOnChange(level: string) {
    switch (level) {
      case 'province':
        {
          this.country.city_index = -1;
          this.country.city = [];
        }
      case 'city':
        {
          this.country.district_index = -1;
          this.country.district = [];
        }
      case 'district':
        {
          this.country.street_index = -1;
          this.country.street = [];
        }
      case 'street':
        {
        }
    }
  }
}
