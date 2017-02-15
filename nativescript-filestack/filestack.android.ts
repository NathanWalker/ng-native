import * as app from 'application';

declare var io;
const Filepicker = io.filepicker.Filepicker;

export class Filestack {

  constructor(apiKey: string) {
    Filepicker.setKey(apiKey);
    Filepicker.setAppName('Demo');

    let intent = new android.content.Intent(app.android.context, java.lang.Class.forName('io.filepicker.Filepicker'));   

    app.android.foregroundActivity.startActivityForResult(intent, Filepicker.REQUEST_CODE_GETFILE);

    app.android.on(app.AndroidApplication.activityResultEvent, (args: any) => {
      if (args.requestCode == Filepicker.REQUEST_CODE_GETFILE) {
        if (args.resultCode == android.app.Activity.RESULT_OK) {
          // Filepicker always returns array of FPFile objects
          let fpFiles = args.intent.getParcelableArrayListExtra(Filepicker.FPFILES_EXTRA);

          let files = [];
          for (let i = 0; i < fpFiles.size(); i++) {
            let rawFile = fpFiles.get(i);
            console.log('file:', rawFile);
            files.push(rawFile);
          }
        }
      }
    });
  }
}