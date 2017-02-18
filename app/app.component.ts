import { Component } from "@angular/core";
import { isIOS } from 'platform';
import { registerElement } from 'nativescript-angular';
if (isIOS) {
    registerElement('AudioPlot', () => require('nativescript-ezaudio').AudioPlot);
}

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    
}
