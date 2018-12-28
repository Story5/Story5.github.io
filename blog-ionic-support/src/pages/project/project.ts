import { PasswordManagerPage } from './projectHub/password-manager/password-manager';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name:"project-page",
  segment:"project"
})
@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  constructor(public navCtrl: NavController) {

  }

  clickItem() {
    this.navCtrl.push(PasswordManagerPage);
  }
}
