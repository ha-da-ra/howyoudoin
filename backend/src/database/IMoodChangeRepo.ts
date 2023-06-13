import { IMoodChange } from "./IMoodChange";


export interface IMoodChangeRepo {
    add(moodId: string):Promise<boolean>;
    get(from: Date, to: Date):Promise<IMoodChange[]>;
}