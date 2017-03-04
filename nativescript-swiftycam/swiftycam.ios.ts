import { StackLayout } from 'ui/layouts/stack-layout';
import { Image } from 'ui/image';

class SwiftyDelegate extends NSObject implements SwiftyCamViewControllerDelegate {
  public static ObjCProtocols = [SwiftyCamViewControllerDelegate];
  private _owner: WeakRef<MySwifty>;

  public static initWithOwner(owner: WeakRef<MySwifty>) {
    let delegate = <SwiftyDelegate>SwiftyDelegate.new();
    delegate._owner = owner;
    return delegate;
  }

  swiftyCamDidBeginRecordingVideo(swiftyCam: SwiftyCamViewController, camera: CameraSelection) {
    console.log('swiftyCamDidBeginRecordingVideo:', camera);
  }

	swiftyCamDidChangeZoomLevel(swiftyCam: SwiftyCamViewController, zoom: number) {
    console.log('swiftyCamDidChangeZoomLevel:', zoom);
  }

	swiftyCamDidFinishProcessVideoAt(swiftyCam: SwiftyCamViewController, url: NSURL) {
    console.log('swiftyCamDidFinishProcessVideoAt:', url);
  }

	swiftyCamDidFinishRecordingVideo(swiftyCam: SwiftyCamViewController, camera: CameraSelection) {
    console.log('swiftyCamDidFinishRecordingVideo:', camera);
  }

	swiftyCamDidFocusAtPoint(swiftyCam: SwiftyCamViewController, point: CGPoint){
    console.log('swiftyCamDidFocusAtPoint:', point);
  }

	swiftyCamDidSwitchCameras(swiftyCam: SwiftyCamViewController, camera: CameraSelection) {
    console.log('swiftyCamDidSwitchCameras:', camera);
  }

  swiftyCamDidTake(swiftyCam: SwiftyCamViewController, photo: UIImage) {
    console.log('swiftyCamDidTake:', photo);
    UIImageWriteToSavedPhotosAlbum(photo, null, null, null);
    this._owner.get().tookPhoto(photo);
  }
}

class MySwifty extends SwiftyCamViewController {
  public static ObjCExposedMethods = {
    closeTapped: { returns: interop.types.void },
    switchCam: { returns: interop.types.void }
  };
  private _camComponent: SwiftyCam;
  
  viewDidLoad() {
    super.viewDidLoad();
    this.cameraDelegate = <any>SwiftyDelegate.initWithOwner(new WeakRef(this));

    let swiftyButton = new SwiftyCamButton(<any>{ frame: UIScreen.mainScreen.bounds });
    swiftyButton.delegate = this;
    this.view.addSubview(swiftyButton);

    let closeBtn = createButton(this, CGRectMake(20, 60, 50, 50), 'X', 'closeTapped');
    this.view.addSubview(closeBtn);

    let switchCamera = createButton(this, CGRectMake(UIScreen.mainScreen.bounds.size.width - 120, 60, 100, 50), 'Switch', 'switchCam');
    this.view.addSubview(switchCamera);

  }

  public closeTapped() {
    this._camComponent.close();
  }

  public switchCam() {
    this.switchCamera();
  }  

  public set camComponent(cmp: SwiftyCam) {
    this._camComponent = cmp;
  }

  public tookPhoto(photo: UIImage) {
    this._camComponent.showImage(photo);
    this._camComponent.sendEvent('tookPhoto', photo);
  }
}
export class SwiftyCam extends StackLayout {

  private _swifty: MySwifty;
  private _enable: boolean;

  public set enable(value: boolean) {
    this._enable = value;
    if (this._enable) {
      this._swifty = <MySwifty>MySwifty.new();
      this._swifty.camComponent = this;

      rootVC().presentViewControllerAnimatedCompletion(this._swifty, true, null);
    } else {
      rootVC().dismissViewControllerAnimatedCompletion(true, null);
    }
  }

  public sendEvent(eventName, data) {
    this.notify({
      eventName,
      object: this,
      data
    })
  }

  public showImage(photo) {
    let img = new Image();
    img.src = photo;
    this.addChild(img);
  }

  public close() {
    this.enable = false;
  }
}

const rootVC = function () {
  let appWindow = UIApplication.sharedApplication.keyWindow;
  return appWindow.rootViewController;
}

const createButton = function (target: any, frame: CGRect, label: string, eventName: string): UIButton {
  let btn = UIButton.alloc().initWithFrame(frame);
  btn.setTitleForState(label, UIControlState.Normal);
  btn.setTitleColorForState(UIColor.whiteColor, UIControlState.Normal);
  btn.titleLabel.font = UIFont.boldSystemFontOfSize(30);
  btn.addTargetActionForControlEvents(target, eventName, UIControlEvents.TouchDown);
  return btn;
}