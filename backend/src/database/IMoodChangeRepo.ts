import { MoodChange } from "@prisma/client";



export interface IMoodChangeRepo {
    add(newMood : MoodChange):Promise<MoodChange>;
    get(from: Date, to: Date):Promise<MoodChange[]>;
}