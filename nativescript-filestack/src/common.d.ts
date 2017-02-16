import { Observable } from 'data/observable';
export interface IFilestack {
    open(): Promise<any>;
}
export interface IFSEvents {
    addedFiles: string;
}
export declare const FSEvents: IFSEvents;
export declare class Common extends Observable {
    inspect(obj: any): void;
}
