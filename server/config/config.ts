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

const ASGARDEO = {
    org_name : 'prasadkpd',
    client_id : 'BTWf7qW3eMGHTFsuT_UnrwfjpfEa',
    client_secret : '_hf0ra2eFUfewc5hxjnEoj707Oga',
    token_url : `https://api.asgardeo.io/t/prasadkpd/oauth2/token`
}

const config = {
    mysql: MYSQL,
    server: SERVER,
    asgardeo: ASGARDEO
};

export default config;
