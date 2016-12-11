import { Component } from "@angular/core";
import { isIOS } from 'platform';
import { topmost } from 'ui/frame';
var themes = require('nativescript-themes');

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    private _active = 'app';

    constructor() {
        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
        let savedTheme = themes.getAppliedTheme('app.css');
        if (savedTheme) {
            this.changeTheme(savedTheme);
        }
    } 
    
    public changeTheme(force?: string) {
        if (this._active === 'app' || force === 'blue.css') {
            this._active = 'blue';
            themes.applyTheme(`${this._active}.css`);
        } else {
            this._active = 'app';
            themes.applyTheme(`${this._active}.css`);
        }
    }
}
