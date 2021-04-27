import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PasswordManagerPage } from './project-hub/password-manager/password-manager';
import { BJPage } from './project-hub/bj/bj';
import { AMapPage } from './project-hub/amap/amap';

@IonicPage({
  name: "project-page",
  segment: "project"
})
@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  projects:Array<{
    title:string,
    page:any
  }> = [
    // {
    //   title: "财务管理系统",
    //   page: PasswordManagerPage
    // },
    {
      title: "皇帝那些事儿",
      page: BJPage
    },
    {
      title:"高德地图",
      page:AMapPage
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  clickItem(index) {
    let item = this.projects[index];
    this.navCtrl.push(item.page);
  }
}
