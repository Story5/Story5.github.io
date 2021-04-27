import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// page-project
import { ProjectPage } from './project';
import { BJPage } from './project-hub/bj/bj';
import { AMapPage } from './project-hub/amap/amap';
import { PasswordManagerPage } from './project-hub/password-manager/password-manager';

@NgModule({
  declarations: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,    
    AMapPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
  ],
  entryComponents: [
    ProjectPage,
    PasswordManagerPage,
    BJPage,
    AMapPage,
  ]
})
export class ProjectPageModule { }
