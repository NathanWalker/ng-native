import { Common, IFilestack } from '../common';
export declare class Filestack extends Common implements IFilestack {
    constructor(apiKey: string);
    open(): Promise<{}>;
    uploadLocal(filePath: string): void;
}
