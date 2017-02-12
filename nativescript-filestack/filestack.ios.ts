declare var FSConfig, FSStoreOptions, FSTheme, FSPickerController;

export class Filestack {
  private _config: any;
  private _storeOptions: any;

  constructor(apiKey: string) {
    this._config = FSConfig.alloc().initWithApiKey(apiKey);

    this._storeOptions = FSStoreOptions.alloc().init();
    this._storeOptions.location = 'S3';

    this._config.storeOptions = this._storeOptions;

    let theme = FSTheme.filestackTheme();

    let ctrl = FSPickerController.alloc().initWithConfigTheme(this._config, theme);
    // fsPickerController.fsDelegate = self;
    // present the controller
    rootVC().presentViewControllerAnimatedCompletion(ctrl, true, null);
  }
}

const rootVC = function() {
  let appWindow = UIApplication.sharedApplication.keyWindow;
  return appWindow.rootViewController;
}