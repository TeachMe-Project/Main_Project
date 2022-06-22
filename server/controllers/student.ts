import { Request, Response } from 'express';
import { Connect, Query } from '../utils/dbConnect';
import logging from '../utils/logger';

const NAMESPACE = 'Users';

const createUser = async (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Inserting User');

    let { author, title } = req.body;

    let query = `INSERT INTO books (author, title) VALUES ("${author}", "${title}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE, 'Book created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllUser = async (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Getting All Users.');

    let query = 'SELECT * FROM User';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE, 'Retrieved Users: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createUser, getAllUser };
