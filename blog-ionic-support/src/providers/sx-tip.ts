import { Injectable } from '@angular/core';
import {
  Platform,
  AlertController,
  Alert,
  AlertOptions,
  ActionSheetController,
  LoadingController,
  Loading,
  ModalController,
  ToastController,
  Refresher,
  InfiniteScroll,
} from 'ionic-angular';
export const SX_DEBUG = false;


export function sxalert(msg) {
  if (SX_DEBUG) {
    alert("debug模式:" + msg);
  }
  console.log(msg);
}

@Injectable()
export class TipProvider {
  appName: string = "溫馨提示";
  duration: number = 200;

  loader: Loading;
  refresher: Refresher;
  infiniteScroll: InfiniteScroll;

  constructor(
    platform: Platform,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
    });
  }

  errorAlert(error: string, replaceMsg: string = "请求失败") {
    let msg = error ? error : replaceMsg;
    return this.alert(msg);
  }

  alert(message: string, confirmText = "确认", confirmHandler = (param?) => { }) {
    return this.confirmAlert(message, confirmText, confirmHandler);
  }

  confirmAlert(message: string, confirmText: string = "确认", confirmHandler = (param?) => { }) {
    return this.alertTemplate(message, undefined, undefined, undefined, confirmText, confirmHandler);
  }

  confirmAlertWithCancel(message: string, confirmText: string = "确认", cancelHandler = (param?) => { }, confirmHandler) {
    return this.alertTemplate(message, undefined, undefined, cancelHandler, confirmText, confirmHandler);
  }

  /** 通用alert模版
   * @param {string} message
   * @param {string} [subTitle]
   * @param {string} [cancelText="取消"]
   * @param {*} [cancelHandler]
   * @param {string} [confirmText="确认"]
   * @param {*} [comfirmHandler]
   * @memberof SxTipProvider
   */
  alertTemplate(
    message: string,
    subTitle?: string,
    cancelText: string = "取消",
    cancelHandler?,
    confirmText: string = "确认",
    comfirmHandler?
  ) {
    let options: AlertOptions = {
      title: this.appName,
      message: message,
      buttons: [
        {
          text: confirmText,
          handler: comfirmHandler
        }
      ],
      enableBackdropDismiss: false
    }

    if (subTitle) {
      Object.assign(options, {
        subTitle: subTitle
      })
    }

    if (cancelHandler) {
      options.buttons.unshift({
        text: cancelText,
        handler: cancelHandler
      });
    }

    let alert: Alert = this.alertCtrl.create(options);
    alert.present();
    return alert;
  }

  showProgressAlert(title: string, content: string, cancelText, cancelHandler) {
    var buttons = [{ text: cancelText, handler: cancelHandler }];
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: buttons,
      enableBackdropDismiss: false
    });
    alert.present();

    return alert;
  }

  setLoadingContent(content: string) {
    if (this.loader) {
      this.loader.setContent(content);
    }
  }

  setLoadingDuration(dur: number) {
    if (this.loader) {
      this.loader.setDuration(dur);
    }
  }

  presentLoadingNeedDismiss(content: string = "正在加载...") {
    if (!this.loader) {
      this.loader = this.loadingCtrl.create({
        spinner: "bubbles",
        content: content
      });
      return this.loader.present();
    }
  }

  presentLoading(content: string = "正在加载...", duration: number = 5000) {
    if (!this.loader) {
      this.loader = this.loadingCtrl.create({
        spinner: "bubbles",
        content: content,
        duration: duration
      });
      return this.loader.present();
    }
  }

  dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }

    if (this.refresher) {
      this.refresher.complete();
      this.refresher = null;
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
      this.infiniteScroll = null;
    }
  }

  infiniteScrollComplete() {
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
      this.infiniteScroll = null;
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: this.duration,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

  presentModalController(component: any, data?: any) {
    let modal = this.modalCtrl.create(component, data);
    modal.present();
    return modal;
  }

  presentActionSheet(title: string, buttons: Array<ActionSheetButton_Interface> = []) {
    buttons.push({
      text: "取消",
      role: "cancel",
      handler: () => {
        console.log("Cancel clicked");
      }
    });

    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: buttons
    });

    actionSheet.present();
  }
}

export interface ActionSheetButton_Interface {
  text: string;
  role?: string;
  handler: any;
}
