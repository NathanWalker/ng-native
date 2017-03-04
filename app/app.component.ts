import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
registerElement('SwiftyCam', () => require('nativescript-swiftycam').SwiftyCam);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    
    public tookPhoto(e: any) {
        console.log('AppComponent tookPhoto:', e);
    }
}
