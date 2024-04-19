import { Request, Response } from "express";
import { DoctorService } from "../services/doctor-service";

// extend baseController Class will have all the error and success response
// and all the ultility functions such as pagination
export class DoctorController {
    public static async listDoctors (req:Request, res:Response) {
        // use a try catch to do logic exception handling
        try {
            // should add zod validator to handle params
            // not optimal to type set a param

            // handle all logic here 

            // access AWS, database and other external service in services
            const doctorList = await DoctorService.listDoctors();
            // do this alongside success msg in the base controller
            return res.send(doctorList);
        }
        catch {
            // where there is time set up a proper 500 internal server error response
            return res.send("error");
        }
    }

    public static async createDoctor (req:Request, res:Response) {
        try {
            // no params for this straight to service

            const doctorName = req.query.name as string;
            const doctorPhone =  req.query.phone as string;
            const createdDoctor = await DoctorService.createDoctor(doctorName, doctorPhone);
            return res.send(createdDoctor);
        }
        catch {
            return res.send("error");
        }
    }

    public static async individualDoctor (req:Request, res:Response) {
        try {

        }
        catch {
            return res.send("error");
        }
    }

    public static async editDoctor (req:Request, res:Response) {
        try {

        }
        catch {
            return res.send("error");
        }
    }

    public static async deleteDoctor (req:Request, res:Response) {
        try {

        }
        catch {
            return res.send("error");
        }
    }
}

