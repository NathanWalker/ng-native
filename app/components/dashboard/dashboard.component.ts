import { Component, NgZone } from '@angular/core';
import { Filestack } from 'nativescript-filestack';
import * as fs from 'file-system';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public progress: number;

  constructor(private ngZone: NgZone) {
    let filestack = new Filestack('AAU0YKA2QRXqFTH15tokSz');
    let file = fs.knownFolders.currentApp().getFile('ns-egghead.png');
    filestack.on('uploadProgress', (event: any) => {
      this.ngZone.run(() => {
        this.progress = event.data;
      });
    })
    filestack.uploadLocal(file.path);
    
  }
  
}