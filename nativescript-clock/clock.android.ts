import { View } from 'ui/core/view';

declare var com;
const GoogleClock = com.lypeer.googleioclock.GoogleClock;

export class Clock extends View {

  private _android: any;
  private _size: string;

  public get android(): any {
    return this._android;
  }

  public get _nativeView(): any {
    return this._android;
  }

  public _createUI() {
    this._android = new GoogleClock(this._context);
  }
}