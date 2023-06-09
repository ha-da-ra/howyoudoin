import { fetchFromBackend } from "../functions/fetchFromBackend";
import { IMoodChange, Mood } from "./IMoodChange";

export async function getMoodData(year: number, month: number): Promise<IMoodChange[]> {
    //return getStaticTestData();
    const[from, to] = getFromAndToFor(year, month);
    return getMoodDataFromBackend(from,to);
}

function getFromAndToFor(year: number, month: number){
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    return [firstDay, lastDay];
}

async function getStaticTestData(): Promise<IMoodChange[]> {
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

async function getMoodDataFromBackend(from : Date, to: Date): Promise<IMoodChange[]> {
    
    const result = await fetchFromBackend(`moods?from=${from.toDateString()}&to=${to.toDateString()}`);
    if (result.status == 200) {
        const moodData : IMoodChange[] = await result.json();
        return moodData;
    } else {
        console.log(result.statusText);
        return [];
    }
}