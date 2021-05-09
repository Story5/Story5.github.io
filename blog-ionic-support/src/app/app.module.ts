import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// @ionic-native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// providers
import { AMapProvider } from '../providers/AMap/AMap';
import { TipProvider } from '../providers/sx-tip';
// pages
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
// 首页
import { HomePage } from '../pages/home/home';
// 文章
import { ArticlePage } from '../pages/article/article';
// 项目
import { ProjectPageModule } from './../pages/project/project.module';
// 我的
import { MinePage } from '../pages/mine/mine';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // 首页
    HomePage,
    // 文章
    ArticlePage,
    // 我的
    MinePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      swipeBackEnabled: true,
      tabsHideOnSubPages: true
    }),
    ProjectPageModule
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
    MinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AMapProvider,
    TipProvider
  ]
})
export class AppModule {}
