import { IMoodChange, Mood } from "./IMoodChange";

export async function getMoodData(): Promise<IMoodChange[]> {
    return [
        {
            value: Mood.BAD,
            changedAt: new Date("2023-04-11T22:20")
        }, {
            value: Mood.NOTOKAY,
            changedAt: new Date("2023-04-12T10:20")
        }, {
            value: Mood.BAD,
            changedAt: new Date("2023-04-13T10:20")
        }, {
            value: Mood.GREAT,
            changedAt: new Date("2023-04-14T14:20")
        }, {
            value: Mood.OKAY,
            changedAt: new Date("2023-04-14T23:20")
        }, {
            value: Mood.GREAT,
            changedAt: new Date("2023-04-16T10:20")
        }
    ];
}