import { Observable } from 'data/observable';
export declare class Filestack extends Observable {
    constructor(apiKey: string);
    uploadLocal(filePath: string): void;
}
