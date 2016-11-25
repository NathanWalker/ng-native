import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/directives/dialogs';

import { DetailComponent } from '../detail/detail.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent {

  constructor(private modal: ModalDialogService, private viewRef: ViewContainerRef) {

  } 
  
  public openModal() {
    let options: ModalDialogOptions = {
      context: { msg: 'Hello' },
      viewContainerRef: this.viewRef
    };
    this.modal.showModal(DetailComponent, options).then((result) => {
      console.log(result);
    });
  }
}