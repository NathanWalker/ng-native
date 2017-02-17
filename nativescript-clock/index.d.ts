import { View } from 'ui/core/view';
export declare class Clock extends View {
    private _ios;
    constructor();
    readonly ios: any;
    readonly _nativeView: any;
    onLoaded(): void;
    updateTimeAnimated(hours: number, mins: number, secs: number): void;
}
