import axios, {AxiosResponse} from "axios";
import qs from "qs";
import config from "../config/config";
import {Request, response, Response} from "express";
import logging from "../utils/logger";

let client_id = config.auth0.client_id;
let client_secret = config.auth0.client_secret;
let audience = config.auth0.audience;
let grant_type = config.auth0.grant_type;
let token_url = config.auth0.token_url;
let access_token: string| undefined;
access_token = "Nothing";

const NAMESPACE = 'Auth0 Users';

export const getAccessToken = (callback: () => void) => {
    axios({
        method: 'post',
        url: `${token_url}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
            'client_id': `${client_id}`,
            'client_secret': `${client_secret}`,
            'audience':`${audience}`,
            'grant_type': `${grant_type}`,
        })
    })
        .then((response: AxiosResponse) => {
            access_token = JSON.stringify(response.data.access_token);
            access_token = access_token.replace(/"/g, '');
            console.log(access_token);
            if (access_token) {
                callback();
                logging.info(NAMESPACE, 'Access Token Created: ', access_token);
            }
        })
        .catch((error) => {
                logging.error(NAMESPACE, error.message, error)
                return response.status(500).json({
                    message: error.message,
                    error
                });
            }
        )
}

export const createAuthParent = async (request: Request, response: Response) => {
    getAccessToken(() => {
        axios(
            {
                method: 'post',
                url: 'https://learningsl.us.auth0.com/api/v2/users',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(
                    {
                        "email": request.body.email,
                        "blocked": false,
                        "email_verified": false,
                        "given_name": request.body.firstName,
                        "name": request.body.lastName,
                        "nickname": request.body.firstName + " " + request.body.lastName,
                        "password": request.body.password,
                        "user_metadata": {
                            "type": "parent"
                        },
                        "family_name": "parent",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.info(NAMESPACE, access_token, 'Hello')
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

// const getAuthUser = async (request:Request, response: Response) => {
//     getAccessToken(() => {
//         axios(
//             {
//                 method: 'get',
//                 url: 'https://api.asgardeo.io/t/prasadkpd/scim2/Users',
//                 headers: {
//                     'Authorization': `Bearer ${access_token}`,
//                     'Content-Type': 'application/json'
//                 },
//             })
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//                 // @ts-ignore
//                 response.status(200).json(response.data);
//             })
//             .catch(function (error) {
//                 console.log('error');
//                 response.status(500).json({message: error});
//             })
//     });
// }
// export default {createAuthUser, getAuthUser};import axios, {AxiosResponse} from "axios";
// import qs from "qs";
// import config from "../config/config";
// import {Request, response, Response} from "express";
// import logging from "../utils/logger";
//
// let client_id = config.auth0.client_id;
// let client_secret = config.auth0.client_secret;
// let audience = config.auth0.audience;
// let grant_type = config.auth0.grant_type;
// let token_url = config.auth0.token_url;
// let access_token: string| undefined;
// access_token = "Nothing";
//
// const NAMESPACE = 'Auth0 Users';
//
// export const getAccessToken = (callback: () => void) => {
//     axios({
//         method: 'post',
//         url: `${token_url}`,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         data: qs.stringify({
//             'client_id': `${client_id}`,
//             'client_secret': `${client_secret}`,
//             'audience':`${audience}`,
//             'grant_type': `${grant_type}`,
//         })
//     })
//         .then((response: AxiosResponse) => {
//             access_token = JSON.stringify(response.data.access_token);
//             access_token = access_token.replace(/"/g, '');
//             console.log(access_token);
//             if (access_token) {
//                 callback();
//                 logging.info(NAMESPACE, 'Access Token Created: ', access_token);
//             }
//         })
//         .catch((error) => {
//                 logging.error(NAMESPACE, error.message, error)
//                 return response.status(500).json({
//                     message: error.message,
//                     error
//                 });
//             }
//         )
// }
//
// export const createAuthParent = async (request: Request, response: Response) => {
//     getAccessToken(() => {
//         axios(
//             {
//                 method: 'post',
//                 url: 'https://learningsl.us.auth0.com/api/v2/users',
//                 headers: {
//                     'Authorization': `Bearer ${access_token}`,
//                     'Content-Type': 'application/json'
//                 },
//                 data: JSON.stringify(
//                     {
//                         "email": request.body.email,
//                         "blocked": false,
//                         "email_verified": false,
//                         "given_name": request.body.firstName,
//                         "name": request.body.lastName,
//                         "nickname": request.body.firstName + " " + request.body.lastName,
//                         "password": request.body.password,
//                         "user_metadata": {
//                             "type": "parent"
//                         },
//                         "family_name": "parent",
//                         "connection": "Username-Password-Authentication",
//                         "verify_email": true
//                     })
//             })
//             .then(function (res) {
//                 logging.info(NAMESPACE, 'User Auth Created: ', res.data);
//                 return response.status(res.status).json(res.data);
//             })
//             .catch(function (error) {
//                 logging.info(NAMESPACE, access_token, 'Hello')
//                 logging.error(NAMESPACE, 'Not Done', error.message);
//                 return response.status(error.code).json(error.message);
//             })
//     })
// }
//
// // const getAuthUser = async (request:Request, response: Response) => {
// //     getAccessToken(() => {
// //         axios(
// //             {
// //                 method: 'get',
// //                 url: 'https://api.asgardeo.io/t/prasadkpd/scim2/Users',
// //                 headers: {
// //                     'Authorization': `Bearer ${access_token}`,
// //                     'Content-Type': 'application/json'
// //                 },
// //             })
// //             .then(function (response) {
// //                 console.log(JSON.stringify(response.data));
// //                 // @ts-ignore
// //                 response.status(200).json(response.data);
// //             })
// //             .catch(function (error) {
// //                 console.log('error');
// //                 response.status(500).json({message: error});
// //             })
// //     });
// // }
// // export default {createAuthUser, getAuthUser};