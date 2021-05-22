import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// page-project
import { ProjectPage } from './project';
import { PasswordManagerPage } from './project-hub/password-manager/password-manager';
import { BJPage } from './project-hub/bj/bj';
import { AMapPage } from './project-hub/amap/amap';
import { AMapChooseCityPage } from './project-hub/amap/amap-choose-city/amap-choose-city'
import { AMapPlaceSearchPage } from './project-hub/amap/amap-place-search/amap-place-search';
import { AMapPlaceSearchSettingPage } from './project-hub/amap/amap-place-search-setting/amap-place-search-setting';

@NgModule({
  declarations: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,    
    AMapPage,
    AMapChooseCityPage,
    AMapPlaceSearchPage,
    AMapPlaceSearchSettingPage
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
  ],
  entryComponents: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,
    AMapPage,
    AMapChooseCityPage,
    AMapPlaceSearchPage,
    AMapPlaceSearchSettingPage
  ]
})
export class ProjectPageModule { }
