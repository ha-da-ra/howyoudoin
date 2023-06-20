import { IMoodChangeRepo } from "./IMoodChangeRepo";
import { MoodChangeRepo } from "./MoodChangeRepo";

export function getMoodRepo() : IMoodChangeRepo{
    return new MoodChangeRepo();
}