// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./drizzle/db";
import { Doctor, doctors } from "./drizzle/schema";

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

// app.get('/', async (req:Request, res:Response) => {
//   res.send('Hello World!');
//   main();
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.listen(3001,()=>{
  fetchDoctors();
})