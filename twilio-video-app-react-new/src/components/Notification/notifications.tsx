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
  const baseURL = `https://learnx.azurewebsites.net/notification/${userAuthId}`;
  const [notifications, setNotifications] = useState<any[]>([]);
  const [eventKey, setEventKey] = useState<number>(0)

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setNotifications(prevState => [
            ...prevState,
            {
              subject: item.subject,
              desc: item.description,
              eventKey: String(setEventKey(eventKey+1)),
              // date and time
            },
          ]);
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
              <Accordion.Item eventKey={item.eventKey}>
                <Accordion.Header> {item.subject}</Accordion.Header>
                <Accordion.Body>
                  <div className="description">
                    {item.desc}
                  </div>
                  <div className="date">2022 - 07 - 23</div>
                  <div className="time">20:58</div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
          {/* <Accordion.Item eventKey="0">
            <Accordion.Header> Your payment for Course "Mathematics by D.H.Silva is successful !"</Accordion.Header>
            <Accordion.Body>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
              <div className="date">2022 - 07 - 23</div>
              <div className="time">20:58</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header> Please Complete your profile information .</Accordion.Header>
            <Accordion.Body>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
              <div className="date">2022 - 07 - 23</div>
              <div className="time">20:58</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header> Please Complete your profile information .</Accordion.Header>
            <Accordion.Body>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
              <div className="date">2022 - 07 - 23</div>
              <div className="time">20:58</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header> Please Complete your profile information .</Accordion.Header>
            <Accordion.Body>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
              <div className="date">2022 - 07 - 23</div>
              <div className="time">20:58</div>
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </div>
    </div>
  );
};

export default Notifications;
