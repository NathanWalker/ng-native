import { Component } from '@angular/core';
import { Clock } from 'nativescript-clock';
import { registerElement } from 'nativescript-angular';
registerElement('Clock', () => Clock);

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

}
