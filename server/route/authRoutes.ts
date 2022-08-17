import express from 'express';
import {
    blockAuthUser,
    createAuthAdmin,
    createAuthInstitute,
    createAuthParent,
    createAuthStudent,
    createAuthTeacher, printRequest, unBlockAuthUser
} from '../auth0_api/user';

export const authRouter = express.Router();


authRouter.route('/createParent').post(createAuthParent);
authRouter.route('/createTeacher').post(createAuthTeacher);
authRouter.route('/createStudent').post(createAuthStudent);
authRouter.route('/createInstitute').post(createAuthInstitute);
authRouter.route('/createAdmin').post(createAuthAdmin);
authRouter.route('/access').post(printRequest);
authRouter.route('/unblock').post(unBlockAuthUser);
authRouter.route('/block').post(blockAuthUser);


