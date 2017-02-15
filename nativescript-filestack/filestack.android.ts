import * as app from 'application';
import { Observable } from 'data/observable';

declare var io;
const Filepicker = io.filepicker.Filepicker;
const FilepickerCallback = io.filepicker.FilepickerCallback;

export class Filestack extends Observable {

  constructor(apiKey: string) {
    super();
    Filepicker.setKey(apiKey);
    Filepicker.setAppName('Demo');
  }

  public uploadLocal(filePath: string) {
    let uriToLocalFile = android.net.Uri.fromFile(new java.io.File(filePath));
    Filepicker.uploadLocalFile(uriToLocalFile, app.android.context, new FilepickerCallback({
      onFileUploadSuccess: (file) => {
        let fpFile = {
          container: file.getContainer(),
          filename: file.getFilename(),
          key: file.getKey(),
          localPath: file.getLocalPath(),
          size: file.getSize(),
          type: file.getType(),
          url: file.getUrl()
        };
        console.log('onFileUploadSuccess:', fpFile);
        for (let key in fpFile) {
          console.log(key + ':', fpFile[key]);
        }
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