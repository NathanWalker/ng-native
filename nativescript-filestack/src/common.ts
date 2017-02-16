import { Observable } from 'data/observable';
import { isIOS } from 'platform';

export interface IFilestack {
  open(): Promise<any>;
}
export interface IFSEvents {
  addedFiles: string;
}
export const FSEvents: IFSEvents = {
  addedFiles: 'addedFiles'
};
export interface IFSModel {
  url: string;
  internalURL: string;
  filename: string;
  size: number;
  mimetype: string;
  key: string;                                  
  container?: string;
  path?: string;
  writeable?: string;
  s3url?: string;
}
export class Common extends Observable {
  
  public getFilestackFile(file: any): IFSModel {
    if (isIOS) {
      return {
        url: file.url,
        internalURL: file.internalURL,
        filename: file.filename,
        size: file.size,
        mimetype: file.mimetype,
        key: file.key,                              
        container: file.container,
        path: file.path,
        writeable: file.writeable,
        s3url: file.s3url
      };
    } else {
      return {
        container: file.getContainer(),
        filename: file.getFilename(),
        key: file.getKey(),
        internalURL: file.getLocalPath(),
        size: file.getSize(),
        mimetype: file.getType(),
        url: file.getUrl()
      };
    }
  }

  public inspect(obj: any) {
    console.log('--- inspecting ---');
    console.log('class name:', obj.constructor.name);
    for (let key in obj) {
      console.log(key + ':', obj[key]);
    }
  }
}