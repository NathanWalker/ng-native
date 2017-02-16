import { Common, IFilestack } from './src/common';
export interface IFSEvents {
    addedFiles: string;
}
export declare const FSEvents: IFSEvents;
export declare class Filestack extends Common implements IFilestack {
    constructor(apiKey: string);
    open(): Promise<{}>;
}
