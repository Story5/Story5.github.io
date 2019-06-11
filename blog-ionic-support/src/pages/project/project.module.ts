import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';
import { PasswordManagerPageModule } from './projectHub/password-manager/password-manager.module';
import { BJPage } from './projectHub/bj/bj';

@NgModule({
  declarations: [
    ProjectPage,
    BJPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    PasswordManagerPageModule
  ],
  entryComponents: [
    ProjectPage,
    BJPage
  ]
})
export class ProjectPageModule { }
