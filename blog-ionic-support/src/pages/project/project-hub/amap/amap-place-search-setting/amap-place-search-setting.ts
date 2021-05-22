import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-amap-place-search-setting',
  templateUrl: 'amap-place-search-setting.html',
})
export class AMapPlaceSearchSettingPage {

  optionList: Array<number> = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  pageSize: number = 10;
  callback: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.pageSize = this.navParams.get("pageSize");
    this.callback = this.navParams.get("callback");
  }

  selectChange() {
  }

  clickConfirm() {
    if (this.callback) {
      this.callback(this.pageSize);
      this.navCtrl.pop();
    }
  }

}
