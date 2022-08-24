import * as React from 'react';
import { useEffect, useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axios, { AxiosResponse } from 'axios';
import { NavItem } from 'react-bootstrap';

type UserProfileNavbar = {
  name: string;
  image?: HTMLImageElement;
};

export const UserProfileNavbar = (props: UserProfileNavbar) => {
  const baseURL = 'https://learnx.azurewebsites.net/user/:id';
  const [profilePic, setProfilePic] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setProfilePic(prevState => [
            ...prevState,
            {
              profile_pic: item.profile_pic,
            },
          ]);
        });
        console.log(profilePic);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
            {/* {profilePic.map((item: any) => {
              return (
                <img src={item.profile_pic} />
              );
            }
            )} */}
            <img src={'https://learninggp2.blob.core.windows.net/images/student.png'} />
            {/*<img src={require("../../Assets/Images/testimg2.jpeg")} />*/}
          </div>
          <div className="Name">{props.name}</div>
        </Link>
      </div>
      <Link to="/notifications">
        <div className="NotificationBell">
          <BsFillBellFill className="Bell-icon" />
        </div>
      </Link>
    </div>
  );
};
export default UserProfileNavbar;
