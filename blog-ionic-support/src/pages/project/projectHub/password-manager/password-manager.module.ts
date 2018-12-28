import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordManagerPage } from './password-manager';

@NgModule({
  declarations: [
    PasswordManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordManagerPage),
  ],
  entryComponents: [
    PasswordManagerPage
  ]
})
export class PasswordManagerPageModule {}
