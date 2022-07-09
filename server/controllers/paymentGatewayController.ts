// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LIQIGSAqVJnYlkhcNXEyQ5IjYlBJw1A9JeFB4z6NvCeAY4UoAyzXcSZqA1KQ5xPthgoJbIETkLGQMBpYpvG8e2W004uBqmwsU');
import { Request, Response } from 'express';

const YOUR_DOMAIN = 'http://localhost:4242';
export const paymentGateway=async (req:Request,res:Response) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
};