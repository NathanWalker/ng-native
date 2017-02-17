import { View } from 'ui/core/view';

declare var BEMAnalogClockView;

export class Clock extends View {
  private _ios: any;

  constructor() {
    super();
    this._ios = BEMAnalogClockView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
  }

  public get ios() {
    return this._ios;
  }

  public get _nativeView() {
    return this._ios;
  }

  public set realTime(value: boolean) {
    if (this._ios) {
      this._ios.realTime = value;
      if (value) {
        this._ios.startRealTime();
      } else {
        this._ios.stopRealTime();
      }
    }
  }

  public set setTimeViaTouch(value: boolean) {
    if (this._ios) {
      this._ios.setTimeViaTouch = value;
      this._ios.reloadClock();
    }
  }

  public updateTimeAnimated(hours: number, mins: number, secs: number) {
    this._ios.hours = hours;
    this._ios.minutes = mins;
    this._ios.secconds = secs;
    this._ios.updateTimeAnimated(true);
  }

  onLoaded() {
    super.onLoaded();
 
    if (this.width && this.height) {
      this._ios.frame = CGRectMake(0, 0, this.width, this.height);
    } else {
      // default size
      this._ios.frame = CGRectMake(0, 0, 300, 300);
    }
  }
}