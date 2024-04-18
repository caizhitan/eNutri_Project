// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./drizzle/db";
import { Doctor, doctors } from "./drizzle/schema";
import doctorRouter from "./routes/doctor-route";

dotenv.config();

const app:Express = express();
const port = process.env.PORT;

async function main() {
  await db.insert(doctors).values({
    name:"Kyle",
    phone: "12341234"
  });
  const doctor = await db.query.doctors.findFirst();
  console.log(doctor);
}

async function fetchDoctors() {
  const listDoctors:Doctor[] = await db.select().from(doctors).limit(10);
  console.log(listDoctors)
}
// used to run middleware, login aka authentication | multer | smth
// app.params makes it so that it goes here before the methods
// app.param("id", (req, res, next, id) => {
//     //run middleware
//     next();
// })

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/doctors',doctorRouter);

app.listen(port, ()=>{
  console.log("running server");
});
