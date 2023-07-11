import { MoodChange } from '@prisma/client';
import express from 'express'
import { Request, Response } from "express";
export const moodRouter = express.Router();
import moment from 'moment';
import { getMoodRepo } from '../database/getMoodRepo';

moodRouter.get("/", getMoods);
moodRouter.post("/", addMood);


export async function getMoods(req: Request, res: Response) {
    const from = req.query.from as string;
    const to = req.query.to as string;
    console.log(from)
    if (!from || !to) {
        res.status(400).send("from or to param is missing from query");
    } else {
        const fromDate = moment(from);
        const toDate = moment(to);
        if (fromDate.isValid() && toDate.isValid()) {
            const moodRepo = getMoodRepo();
            const result = await moodRepo.get(fromDate.toDate(), toDate.toDate());
            if (result) res.status(200).send(result);
        } else {
            res.status(400).send("one or more date(s) invalid");
        }
    }
}

export async function addMood(req: Request, res: Response) {
    const newMood = req.body;
    console.log(newMood);
    newMood.changedAt = moment(newMood.changedAt);
    console.log(newMood);
    const moodRepo = getMoodRepo();
   if (newMood.changedAt.isValid()){
    newMood.changedAt = newMood.changedAt.toDate();
    if (newMood.value <= 2 && newMood.value >= -2){
        const createdMood = await moodRepo.add(newMood);
        res.status(201).send(createdMood);
    } else {
        res.status(400).send("value has to be one of [2,1,0,-1,-2]");
    }
   } else {
    res.status(400).send("Date invalid");
   }
}
