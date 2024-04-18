import express, { Request, Response, Router } from "express";
import { DoctorController } from "../controllers/doctor-controller";

const doctorRouter:Router = express.Router();

doctorRouter.get('/', (req:Request, res:Response) => {
  // router only takes in the request, push the logic to controller
  return DoctorController.listDoctors(req, res);
});

doctorRouter.post('/', (req:Request, res:Response) => {
    return DoctorController.createDoctor(req, res);
})

doctorRouter
    .route('/:id')
    .get((req:Request, res:Response)=>{
        res.send(`individual doctor ${req.params.id}`)
    })
    .put((req:Request, res:Response) => {
        res.send(`put doctor ${req.params.id}`);
    })
    .delete((req:Request, res:Response)=>{
        res.send(`delete doctor ${req.params.id}`);
})

export default doctorRouter; 