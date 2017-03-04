import { StackLayout } from 'ui/layouts/stack-layout';
export declare class SwiftyCam extends StackLayout {
    private _swifty;
    private _enable;
    enable: boolean;
    sendEvent(eventName: any, data: any): void;
    showImage(photo: any): void;
    close(): void;
}
