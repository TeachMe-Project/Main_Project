import {Express, Request, Response} from 'express';
import controller from '../controllers/student';
import asgardeo from '../asgardio_api/user';
import logger from "../utils/logger";
import validate from "../middleware/validateResource";
import studentSchema from "../models/student.model";

const routes = (app: Express) => {
    app.get("/api/v1/check", (req: Request, res: Response) => {
        logger.info("Checking:","Ok","200");
        res.status(200).send('Ok')
    });

    app.get('/get', controller.getAllUser);
    app.post('/',validate(studentSchema),(req: Request, res: Response): Response => {
        return res.json({ ...req.body });
    } );
}

export default routes;
