import { MoodChange } from "@prisma/client";



export interface IMoodChangeRepo {
    add(moodId: string):Promise<boolean>;
    get(from: Date, to: Date):Promise<MoodChange[]>;
}