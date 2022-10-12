import './bootstrap-globals';
import { createExpressHandler } from './createExpressHandler';
import express, { RequestHandler } from 'express';
import path from 'path';
import { ServerlessFunction } from './types';

import cors from "cors";
import {classSchedule, payment_schedule} from "./utils/scheduler";
import {studentRouter} from "./route/studentRoutes";
import {paymentGatewayRouter} from "./route/paymentGatewayRoutes";
import {userRouter} from "./route/userRoutes";
import {teacherRouter} from "./route/teacherRoutes";
import {parentRouter} from "./route/parentRoutes";
import {courseRouter} from "./route/courseRoutes";
import {adminRouter} from "./route/adminRoutes";
import {classRouter} from "./route/classRoutes";
import {homeworkRouter} from "./route/homeworkRoutes";
import {instituteRouter} from "./route/instituteRoutes";
import {notesRouter} from "./route/notesRoutes";
import {notificationRouter} from "./route/notificationRoutes";
import {authRouter} from "./route/authRoutes";
import logger from "./utils/logger";
import {contactRouter} from "./route/contactRoutes";
import routes from './route/routes';

const PORT = process.env.PORT ?? 8081;

const app = express();
app.use(express.json());

// This server reuses the serverless endpoints from the "plugin-rtc" Twilio CLI Plugin, which is used when the "npm run deploy:twilio-cli" command is run.
// The documentation for this endpoint can be found in the README file here: https://github.com/twilio-labs/plugin-rtc
const tokenFunction: ServerlessFunction = require('@twilio-labs/plugin-rtc/src/serverless/functions/token').handler;
const tokenEndpoint = createExpressHandler(tokenFunction);

const recordingRulesFunction: ServerlessFunction = require('@twilio-labs/plugin-rtc/src/serverless/functions/recordingrules')
  .handler;
const recordingRulesEndpoint = createExpressHandler(recordingRulesFunction);

const noopMiddleware: RequestHandler = (_, __, next) => next();
const authMiddleware =
  process.env.REACT_APP_SET_AUTH === 'firebase' ? require('./firebaseAuthMiddleware') : noopMiddleware;

//twilio rtc plugin endpoints
app.all('/token', authMiddleware, tokenEndpoint);
app.all('/recordingrules', authMiddleware, recordingRulesEndpoint);

app.use(cors());
setInterval(classSchedule, 172800000);
setInterval(payment_schedule, 432000000);
// classSchedule();
//development endpoints by developers
app.use('/admin',adminRouter)
app.use('/class',classRouter)
app.use('/course', courseRouter)
app.use('/homework', homeworkRouter)
app.use('/institute', instituteRouter)
app.use('/notes', notesRouter)
app.use('/notification', notificationRouter)
app.use('/parent', parentRouter)
app.use('/student', studentRouter)
app.use('/teacher', teacherRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/contact', contactRouter)
app.use('/create-checkout-session',paymentGatewayRouter)


app.get('/', (req, res) => {
    res.send('LearnX Server is Running')
})

// app.use((req, res, next) => {
//   // Here we add Cache-Control headers in accordance with the create-react-app best practices.
//   // See: https://create-react-app.dev/docs/production-build/#static-file-caching
//   if (req.path === '/' || req.path === 'index.html') {
//     res.set('Cache-Control', 'no-cache');
//     res.sendFile(path.join(__dirname, '../build/index.html'), { etag: false, lastModified: false });
//   } else {
//     res.set('Cache-Control', 'max-age=31536000');
//     next();
//   }
// });
//
// app.use(express.static(path.join(__dirname, '../build')));
//
// app.get('*', (_, res) => {
//   // Don't cache index.html
//   res.set('Cache-Control', 'no-cache');
//   res.sendFile(path.join(__dirname, '../build/index.html'), { etag: false, lastModified: false });
// });

app.listen(PORT, () => logger.info("Server",`Server is running on Port:${PORT}`));
