import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';
import { PasswordManagerPageModule } from './projectHub/password-manager/password-manager.module';

@NgModule({
  declarations: [
    ProjectPage
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    PasswordManagerPageModule
  ],
  entryComponents: [
    ProjectPage
  ]
})
export class ProjectPageModule { }
