// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import doctorRouter from "./routes/doctor-route";

dotenv.config();

const app:Express = express();
const port = process.env.PORT;

// used to run middleware, login aka authentication | multer | smth
// app.params makes it so that it goes here before the methods
// app.param("id", (req, res, next, id) => {
//     //run middleware
//     next();
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/doctors',doctorRouter);

app.listen(port, ()=>{
  console.log("running server");
});
