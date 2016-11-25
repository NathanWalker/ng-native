import { ModalDialogOptions } from './../../../platforms/ios/build/emulator/ngnative.app/app/tns_modules/nativescript-angular/directives/dialogs.d';
import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html'
})
export class DetailComponent {

  constructor(private router: RouterExtensions, private params: ModalDialogParams) {
    console.log(params.context.msg);
  }
  
  public goBack() {
    this.router.back();
  }  

  public close() {
    this.params.closeCallback('closed the ModalDialogOptions.');
  }
}