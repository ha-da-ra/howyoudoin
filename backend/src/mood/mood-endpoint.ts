import express from 'express'
import { Request, Response } from "express";
import { MoodChangeRepo } from '../database/MoodChangeRepo';
export const moodRouter = express.Router();
import moment from 'moment';

moodRouter.get("/", getMoods);
// dataModelsRouter.post("/", postDataModel);


export async function getMoods(req: Request, res: Response) {
    const from = req.query.from as string;
    const to = req.query.to as string;
    console.log(from)
    if (!from || !to){
        res.status(400).send("from or to param is missing from query");
    } else {
        const fromDate = moment(from);
        const toDate = moment(to);

        const moodRepo = new MoodChangeRepo();
        const result = await moodRepo.get(fromDate.toDate(), toDate.toDate());
        if (result) res.status(200).send(result);
    }
}
