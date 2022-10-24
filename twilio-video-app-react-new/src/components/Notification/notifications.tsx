import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Row, Col, Container, Accordion, Button } from 'react-bootstrap';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Notifications = () => {
  const { user } = useAuth0();
  const userAuthId = user?.sub;
  // const baseURL = `https://learnx.azurewebsites.net/notification/user/${userAuthId}`;
  const baseURL = `https://learnxy.azurewebsites.net/notification/user/${userAuthId}`;
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setNotifications(prevState => [
            ...prevState,
            {
              id: item.notification_id,
              subject: item.subject,
              desc: item.description,
              date: item.date,
              time: item.time
            },
          ]);
          setIsDataLoading(true);
        });
        console.log(notifications);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Notifications">
      <Container>
        <div className="PanelHeader">
          <h2>Notifications</h2>
        </div>
      </Container>
      <div className="PanelBody">
        <Accordion defaultActiveKey="0">
          {notifications.map((item: any) => {
            return (
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header> {item.subject}</Accordion.Header>
                <Accordion.Body>
                  <div className="description">
                    {item.desc}
                  </div>
                  <div className="date">{item.date}</div>
                  <div className="time">{item.time}</div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Notifications;
