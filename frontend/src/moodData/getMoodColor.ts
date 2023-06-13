import { Mood } from "./IMoodChange"

export function getMoodColor(mood: Mood) : string{
    switch(mood) {
        case Mood.BAD:
          return "rgba(194, 70, 100, 0.5)"
        case Mood.NOTOKAY:
          return "rgba(129, 70, 194, 0.5)"
        case Mood.NEUTRAL:
          return "rgba(70, 155, 194, 0.5)"
        case Mood.OKAY: 
        return "rgba(70, 194, 158, 0.5)"
        case Mood.GREAT:
          return "rgba(70, 194, 78, 0.5)"
      }
}

