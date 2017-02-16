import * as app from 'application';
import { Common, IFilestack, FSEvents } from '../common';

declare var io;
const Filepicker = io.filepicker.Filepicker;
const FilepickerCallback = io.filepicker.FilepickerCallback;

export class Filestack extends Common implements IFilestack {

  constructor(apiKey: string) {
    super();
    Filepicker.setKey(apiKey);
    Filepicker.setAppName('Demo');

  }

  public open() {
    return new Promise((resolve, reject) => {
      app.android.on(app.AndroidApplication.activityResultEvent, (args: any) => {
        if (args.requestCode == Filepicker.REQUEST_CODE_GETFILE) {
          if (args.resultCode == android.app.Activity.RESULT_OK) {

            let fpFiles = args.intent.getParcelableArrayListExtra(Filepicker.FPFILES_EXTRA);

            let files = [];
            for (let i = 0; i < fpFiles.size(); i++) {
              let rawFile = fpFiles.get(i);
              this.inspect(this.getFilestackFile(rawFile));
              files.push(this.getFilestackFile(rawFile));
            }
            this.notify({
              eventName: FSEvents.addedFiles,
              object: this,
              data: files
            })
            app.android.off(app.AndroidApplication.activityResultEvent);
          } 
        }
      });

      let intent = new android.content.Intent(app.android.context, java.lang.Class.forName('io.filepicker.Filepicker'));

      app.android.foregroundActivity.startActivityForResult(intent, Filepicker.REQUEST_CODE_GETFILE);
      resolve();
    });
  }

  public uploadLocal(filePath: string) {
    let uriToLocalFile = android.net.Uri.fromFile(new java.io.File(filePath));
    Filepicker.uploadLocalFile(uriToLocalFile, app.android.context, new FilepickerCallback({
      onFileUploadSuccess: (file) => {
        let fpFile = this.getFilestackFile(file);
        console.log('onFileUploadSuccess:', fpFile);
        this.inspect(fpFile);
      },
      onFileUploadError: (error: java.lang.Throwable) => {
        console.log('onFileUploadError:', error);
      },
      onFileUploadProgress: (uri: android.net.Uri, progress: number) => {
        console.log('onFileUploadProgress:', progress);
        this.notify({
          eventName: 'uploadProgress',
          object: this,
          data: Math.floor(progress * 100) // percentage
        });
      }
    }));
  }
}