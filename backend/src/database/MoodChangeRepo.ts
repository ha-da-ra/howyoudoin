
import { MoodChange } from "@prisma/client";
import { IMoodChangeRepo } from "./IMoodChangeRepo";
import { prisma } from "./PrismaClient";


export class MoodChangeRepo implements IMoodChangeRepo {


    add(moodId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    get(from: Date, to: Date): Promise<MoodChange[]> {
        return prisma.moodChange.findMany({
            where: {
                AND: [
                    {
                        changedAt: {
                            lt: to,
                        }
                    }, {
                        changedAt: {
                            gt: from,
                        }
                    }],
            },
        })
    }

}