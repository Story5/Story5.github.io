import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: "password-manager",
  segment: "password-manager"
})
@Component({
  selector: 'page-password-manager',
  templateUrl: 'password-manager.html'
})
export class PasswordManagerPage {

  disable : boolean = false;
  password:string;
  time : number = 4;

  zhenzhen: string;
  jiejie: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl:AlertController) {

  }

  clickRandom() {
    this.zhenzhen = "";
    this.jiejie = "";
    this.disable = true;

    let random = Math.random();
    let fix = random.toFixed(3);
    let str = fix.substr(2);
    this.password = str;
    this.settime();
  }

  clickShowPassword() {
    this.presentPrompt();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: '请先输入各自的3位密码',
      inputs: [
        {
          name: 'zhenzhen',
          placeholder: '请在这里输入小珍珍的3位数密码',
          type: 'password'
        },
        {
          name: 'jiejie',
          placeholder: '请在这里输入小节节的3位数密码',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            this.zhenzhen = data.zhenzhen;
            this.jiejie = data.jiejie;
          }
        }
      ]
    });
    alert.present();
  }

  // 倒计时
  settime() {
    if (this.time == 0) {
      this.password = "";
      this.time = 4;
      this.disable = false;
      return;
    } else {
      this.time--;
    }

    setTimeout(() => {
      this.settime();
    }, 1000);
  }

}
