import { Component } from '@angular/core';
import { Clock } from 'nativescript-clock';
import { registerElement } from 'nativescript-angular';
registerElement('Clock', () => Clock);

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    private _clock: Clock;
    public realTime: boolean = false;
    public setTimeViaTouch: boolean = false; 

    public clockLoaded(e) {
        this._clock = e.object;   
    }

    public animateTime() {
        this._clock.updateTimeAnimated(Math.floor(Math.random() * 13), Math.floor(Math.random() * 61), Math.floor(Math.random() * 61));
    }

    public toggleRealTime() {
        this.realTime = !this.realTime;
    }

    public toggleTouch() {
        this.setTimeViaTouch = !this.setTimeViaTouch;
    }
}
