import { Doctor, doctors } from "../drizzle/schema";
import { db } from "../drizzle/db";

export class DoctorService {
    public static async listDoctors() {
        // use here to access database
        const doctorsList:Doctor[] = await db.select().from(doctors);
        return doctorsList;
    }

    public static async createDoctor(doctorName:string, doctorPhone:string) {
        const createdDoctor = await db.insert(doctors).values({ name: doctorName, phone: doctorPhone}).returning({ insertedId: doctors.id});
        return createdDoctor;
    }
}