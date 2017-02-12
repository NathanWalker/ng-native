import { Component } from "@angular/core";
import { Filestack } from 'nativescript-filestack';

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
})
export class AppComponent {

  constructor() {
    let filestack = new Filestack('AAU0YKA2QRXqFTH15tokSz');
  }
}
