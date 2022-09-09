import * as React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import UserProfileNavbar from '../Navbars/UserProfileNavbar';
import { Row, Col, Container } from 'react-bootstrap';
import Button from '../Button/Button';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const TopNavbar = () => {
  const { user } = useAuth0();
  const userAuthId = user?.sub;
  const baseURL = `https://learnx.azurewebsites.net/user/${userAuthId}`;
  const [userDetails, setUserDetails] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          if (item.type === 'student') {
            setUserDetails(prevState => [
              ...prevState,
              {
                profile_pic: item.profile_image,
                full_name: item.student.first_name + ' ' + item.student.last_name,
              },
            ]);
            } else if (item.type === 'teacher') {
              setUserDetails(prevState => [
                ...prevState,
                {
                  profile_pic: item.profile_image,
                  full_name: item.teacher.first_name + ' ' + item.teacher.last_name,
                },
              ]);
          }
        });
        console.log(userDetails);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="TopNavbar">
      <Col xl={2}>
        <Logo />
      </Col>
      <Col xl={7}></Col>
      <Col xl={3}>
        {userDetails.map((item: any) => {
          return (
            <UserProfileNavbar name={item.full_name} id={userAuthId} image={item.profile_pic}  />
          );
        })}
      </Col>
    </div>
  );
};

export default TopNavbar;
