import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
// 首页
import { HomePage } from '../pages/home/home';
// 文章
import { ArticlePage } from '../pages/article/article';
// 项目
import { ProjectPage } from '../pages/project/project';
import { PasswordManagerPage } from '../pages/project/projectHub/password-manager/password-manager';
// 我的
import { MinePage } from '../pages/mine/mine';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // 首页
    HomePage,
    // 文章
    ArticlePage,
    // 项目
    ProjectPage,
    PasswordManagerPage,
    // 我的
    MinePage
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
    // 项目
    ProjectPage,
    PasswordManagerPage,
    // 我的
    MinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
