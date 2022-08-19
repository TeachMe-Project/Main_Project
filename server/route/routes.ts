import {Express, Request, Response} from 'express';
import logger from "../utils/logger";

const routes = (app: Express) => {
    app.get("/check", (req: Request, res: Response) => {
        logger.info("Checking:","Ok","200");
        res.status(200).send('Ok All Are Working')
    });
}

export default routes;
