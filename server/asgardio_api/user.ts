import axios, {AxiosResponse} from "axios";
import qs from "qs";
import config from "../config/config";
import {response, Response} from "express";
import logging from "../utils/logger";

let token_url = config.asgardeo.token_url;
let client_id = config.asgardeo.client_id;
let client_secret = config.asgardeo.client_secret;
let access_token: string | undefined;

const NAMESPACE = 'Users';

const getAccessToken = (callback: () => void) => {
    axios({
        method: 'post',
        url: `${token_url}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
            'grant_type': 'client_credentials',
            'client_id': `${client_id}`,
            'client_secret': `${client_secret}`,
            'scope': 'internal_user_mgt_list internal_user_mgt_create internal_user_mgt_update internal_user_mgt_delete internal_user_mgt_view'
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

let user = {
    email: "saman@gmail.com",
    firstName: "saman",
    lastName: "banda",
    password: "Test@123"
}

const createAuthUser = () => {
    getAccessToken(() => {
        axios(
            {
                method: 'post',
                url: 'https://api.asgardeo.io/t/prasadkpd/scim2/Users',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "emails": [
                        {
                            "primary": true,
                            "value": `${user.email}`
                        }
                    ],
                    "name": {
                        "familyName": `${user.lastName}`,
                        "givenName": `${user.firstName}`
                    },
                    "password": `${user.password}`,
                    "userName": "CUSTOMER-DEFAULT/" + `${user.email}`
                })
            })
            .then(function (response) {

                logging.info(NAMESPACE, 'User Auth Created: ', response.data);

            })
            .catch(function (error) {
                logging.info(NAMESPACE, access_token, 'Hello')
                logging.error(NAMESPACE, 'Not Done', error.message);
            })
    })
}

const getAuthUser = () => {
    getAccessToken(() => {
        axios(
            {
                method: 'get',
                url: 'https://api.asgardeo.io/t/prasadkpd/scim2/Users',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
            })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                // res.status(200).json(response.data);
            })
            .catch(function (error) {
                // return
                // console.log('error');
                // res.status(500).json({message: error});
            })
    });
}
export default {createAuthUser, getAuthUser};