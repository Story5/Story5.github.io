import { PasswordManagerPage } from './projectHub/password-manager/password-manager';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
