import { Component, NgZone } from "@angular/core";
import * as fs from 'file-system';
import { topmost }  from 'ui/frame';
import { isIOS } from 'platform';

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
})
export class AppComponent {

  constructor() {
    if (isIOS) {
      let navigationBar = topmost().ios.controller.navigationBar;
      // 0: default
      // 1: light
      navigationBar.barStyle = 1;
    }
  }
}
