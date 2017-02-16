import { Component } from '@angular/core';
import { Filestack, FSEvents } from 'nativescript-filestack';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  private _filestack: Filestack;

  constructor() {
    this._filestack = new Filestack('AAU0YKA2QRXqFTH15tokSz');
  }

  public openPicker() {
    this._filestack.on(FSEvents.addedFiles, (event: any) => {
      console.log('files added in component:', event.data);
    });
    this._filestack.open().then(() => {
      console.log('opened.');
    });
  }
  
}