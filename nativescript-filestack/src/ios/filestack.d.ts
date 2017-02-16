import { Common, IFilestack } from '../common';
export declare class Filestack extends Common implements IFilestack {
    private _config;
    private _storeOptions;
    constructor(apiKey: string);
    open(): Promise<{}>;
    addedFiles(fpFiles: NSArray<any>): void;
}
