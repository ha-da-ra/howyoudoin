
export enum Mood {
    BAD = -2,
    NOTOKAY = 1,
    NEUTRAL = 0,
    OKAY = 1,
    GREAT = 2
}

export interface IMoodChange {
    value: Mood,
    changedAt: Date
}