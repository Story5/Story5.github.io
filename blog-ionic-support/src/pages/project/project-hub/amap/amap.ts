import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AMapProvider } from '../../../../providers/amap/AMap';
declare var AMapLoader

@Component({
  selector: 'page-amap',
  templateUrl: 'amap.html',
})
export class AMapPage {

  constructor(
    private navCtrl: NavController,
    private amap:AMapProvider) {
  }

  ionViewDidLoad() {
    this.amap.initAMap('container');
  }
}
