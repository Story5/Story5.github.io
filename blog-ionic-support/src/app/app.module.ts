import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
// 首页
import { HomePage } from '../pages/home/home';
// 文章
import { ArticlePage } from '../pages/article/article';
// 我的
import { MinePage } from '../pages/mine/mine';
// 支持


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SupportPage } from '../pages/support/support';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // 首页
    HomePage,
    // 文章
    ArticlePage,
    // 我的
    MinePage,
    // 支持
    SupportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    // 首页
    HomePage,
    // 文章
    ArticlePage,
    // 我的
    MinePage,
    // 支持
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
