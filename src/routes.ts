import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateRequest";


// route handler
export default function(app: Express) {
    app.get("/check", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

   
}