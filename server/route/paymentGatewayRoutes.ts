import express from "express";
import {paymentGatewayCheckout} from "../controllers/paymentGatewayController";
export const paymentGatewayRouter=express.Router();



paymentGatewayRouter.route("/")
    .post(paymentGatewayCheckout);




