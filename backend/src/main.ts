import express, { Application } from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import path from "path";
import { PORT } from "./environment";



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
app.get('/test/', (req, res) => {
  res.send('Hello World!')
})

app.use(`/view/`, express.static(clientDir));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});