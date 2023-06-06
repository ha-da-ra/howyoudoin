import { IMoodChange, Mood } from "./IMoodChange";

export async function getMoodData(): Promise<IMoodChange[]> {
    return [
        {
            value: Mood.BAD,
            changedAt: new Date("12.01.2022")
        }, {
            value: Mood.NOTOKAY,
            changedAt: new Date("13.01.2022")
        }, {
            value: Mood.BAD,
            changedAt: new Date("14.01.2022")
        }, {
            value: Mood.GREAT,
            changedAt: new Date("15.01.2022")
        }, {
            value: Mood.OKAY,
            changedAt: new Date("16.01.2022")
        }, {
            value: Mood.GREAT,
            changedAt: new Date("17.01.2022")
        }
    ]
}