import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'TeachMe';
const MYSQL_USER = process.env.MYSQL_HOST || 'root';
const MYSQL_PASS = process.env.MYSQL_HOST || '';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const AUTH0 = {
    client_id : 'dhGB2Rm3jFLMFI2hnMGsG2xkbrVDb0iT',
    client_secret : 'WzIOANIsf7Tn51EqHigeds9qDK2uCx_dT-v3Mwa0-PM4vSYdu2VmEt9YdI89l57t',
    audience : 'https://learningsl.us.auth0.com/api/v2/',
    grant_type:'client_credentials',
    token_url : `https://learningsl.us.auth0.com/oauth/token`
}

const config = {
    mysql: MYSQL,
    server: SERVER,
    auth0: AUTH0
};

export default config;
