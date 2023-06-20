import express, { Application } from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import path from "path";
import { PORT } from "./environment";
import { MoodChangeRepo } from "./database/MoodChangeRepo";
import { moodRouter } from "./mood/mood-endpoint";



const app: Application = express();

// Logging + Encoding
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SERVE CLIENT
const clientDir = path.join(__dirname, "client");

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/test/', async (req, res) => {
  const moodRepo = new MoodChangeRepo();
  const result = await moodRepo.get(new Date(1999,1), new Date(2023,12));
  res.status(200).send(result);
})

app.use(`/view/`, express.static(clientDir));
app.use(`/moods`, moodRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});