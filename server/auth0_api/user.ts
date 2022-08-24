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
let access_token: string | undefined;
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
            'audience': `${audience}`,
            'grant_type': `${grant_type}`,
        })
    })
        .then((response: AxiosResponse) => {
            access_token = JSON.stringify(response.data.access_token);
            access_token = access_token.replace(/"/g, '');
            console.log(access_token);
            if (access_token) {
                callback();
                logging.info(NAMESPACE, 'Access Token Created');
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
    console.log(request.body);
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
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
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
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const createAuthStudent = async (request: Request, response: Response) => {
    console.log(request.body);
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
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
                        "user_metadata": {
                            "type": "student"
                        },
                        "family_name": "student",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const createAuthTeacher = async (request: Request, response: Response) => {
    console.log(request.body);
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
                        "blocked": true,
                        "email_verified": false,
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
                        "user_metadata": {
                            "type": "teacher"
                        },
                        "family_name": "teacher",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const createAuthInstitute = async (request: Request, response: Response) => {
    console.log(request.body);
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
                        "blocked": true,
                        "email_verified": false,
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
                        "user_metadata": {
                            "type": "institute"
                        },
                        "family_name": "institute",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const createAuthAdmin = async (request: Request, response: Response) => {
    console.log(request.body);
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
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
                        "user_metadata": {
                            "type": "admin"
                        },
                        "family_name": "admin",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const unBlockAuthUser = async (request: Request, response: Response) => {
    console.log(request.body);
    const user_id = request.body.user_id;
    getAccessToken(() => {
        axios(
            {
                method: 'PATCH',
                url: `https://learningsl.us.auth0.com/api/v2/users/${user_id}`,
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(
                    {
                        "blocked": false,
                    })
            })
            .then(function (res) {
                logging.info(NAMESPACE, 'User Auth Unblocked: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}

export const blockAuthUser = async (request: Request, response: Response) => {
    console.log(request.body);
    const user_id = request.body.user_id;
    getAccessToken(() => {
        axios(
            {
                method: 'PATCH',
                url: `https://learningsl.us.auth0.com/api/v2/users/${user_id}`,
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(
                    {
                        "blocked": true,
                    })
            })
            .then(function (res: AxiosResponse) {
                logging.info(NAMESPACE, 'User Auth Blocked: ');
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}


export const printRequest = async (request: Request, response: Response) => {
    console.log(request.body);
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
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                        "password": request.body.Password,
                        "user_metadata": {
                            "type": "admin"
                        },
                        "family_name": "admin",
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

export const changeUserDetails = async (request: Request, response: Response) => {
    console.log(request.body);
    const user_id = request.body.user_id;
    getAccessToken(() => {
        axios(
            {
                method: 'PATCH',
                url: `https://learningsl.us.auth0.com/api/v2/users/${user_id}`,
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(
                    {
                        "given_name": request.body.Firstname,
                        "name": request.body.Lastname,
                        "nickname": request.body.Firstname + " " + request.body.Lastname,
                    })
            })
            .then(function (res: AxiosResponse) {
                logging.info(NAMESPACE, 'User Details Changed');
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    })
}