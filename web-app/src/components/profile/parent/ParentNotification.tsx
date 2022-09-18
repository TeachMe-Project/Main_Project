import React, {useEffect, useState} from 'react';
import {Accordion, Col, Row} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import axios, {AxiosResponse} from "axios";
import ParentLayout from "./ParentLayout";
import {useAuth0} from "@auth0/auth0-react";
import Loader from "../../utils/Loader";



const ParentNotification = () => {

    const [notification, setNotification] = useState<any[]>([]);
    const {user} = useAuth0();
    const user_id = user?.sub;
    const [isDataLoading, setIsDataLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://learnx.azurewebsites.net/notification/user/${user_id}`).then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            console.log(user_id)
            res.data.map((item: any) => {
                setNotification(prevState => [...prevState, {
                    notification_id: item.notification_id,
                    subject: item.subject,
                    description: item.description,
                }])

                setIsDataLoading(true);
            })
        })
            .catch((error: any) => {
                console.log(error.message);
            })
    }, []);

    return (

        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Notification
                        </h1>
                    </Col>
                </Row>
                <Row className="Notifications">
                    {!isDataLoading && <Loader/>}
                    {isDataLoading &&
                    <Col lg={12} className="PanelBody">
                        <Accordion defaultActiveKey="0">
                            {notification.map((item) => {
                                return (
                                    <Accordion.Item eventKey={item.notification_id} className="mb-2">
                                        <Accordion.Header>{item.subject}
                                            !"</Accordion.Header>
                                        <Accordion.Body>
                                            {item.description}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </Col>}
                </Row>
            </Col>
        </ParentLayout>
    );
};

export default ParentNotification;