import { PasswordManagerPage } from './projectHub/password-manager/password-manager';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BJPage } from './projectHub/bj/bj';

@IonicPage({
  name: "project-page",
  segment: "project"
})
@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  projects = [
    {
      title: "皇帝那些事儿",
      page: BJPage
    }
    // ,{
    //   title: "财务管理系统",
    //   page: PasswordManagerPage
    // }
  ]

  constructor(public navCtrl: NavController) {

  }

  clickItem(index) {
    let item = this.projects[index];
    this.navCtrl.push(item.page);
  }
}
