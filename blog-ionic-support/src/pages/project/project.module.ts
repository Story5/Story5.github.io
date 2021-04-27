import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// page-project
import { ProjectPage } from './project';
import { PasswordManagerPage } from './project-hub/password-manager/password-manager';
import { BJPage } from './project-hub/bj/bj';
import { AMapPage } from './project-hub/amap/amap';
import { AmapChooseCityPage } from './project-hub/amap/amap-choose-city/amap-choose-city'

@NgModule({
  declarations: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,    
    AMapPage,
    AmapChooseCityPage
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
  ],
  entryComponents: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,
    AMapPage,
    AmapChooseCityPage
  ]
})
export class ProjectPageModule { }
