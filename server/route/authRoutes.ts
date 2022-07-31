import express from 'express';
import {
    createAuthAdmin,
    createAuthInstitute,
    createAuthParent,
    createAuthStudent,
    createAuthTeacher
} from '../auth0_api/user';

export const authRouter = express.Router();


authRouter.route('/createParent').post(createAuthParent);
authRouter.route('/createTeacher').post(createAuthTeacher);
authRouter.route('/createStudent').post(createAuthStudent);
authRouter.route('/createInstitute').post(createAuthInstitute);
authRouter.route('/createAdmin').post(createAuthAdmin);


