
import { MoodChange } from "@prisma/client";
import { IMoodChangeRepo } from "./IMoodChangeRepo";
import { prisma } from "./PrismaClient";


export class MoodChangeRepo implements IMoodChangeRepo {


    async add(newMood: MoodChange): Promise<MoodChange> {
        const result = await prisma.moodChange.create({
            data: {
              ...newMood
            }
          });
        return result;
    }
    
    get(from: Date, to: Date): Promise<MoodChange[]> {
        return prisma.moodChange.findMany({
            orderBy: [
                {
                  changedAt: 'desc',
                }
              ],
            where: {
                AND: [
                    {
                        changedAt: {
                            lte: to,
                        }
                    }, {
                        changedAt: {
                            gte: from,
                        }
                    }],
            },
        })
    }

}