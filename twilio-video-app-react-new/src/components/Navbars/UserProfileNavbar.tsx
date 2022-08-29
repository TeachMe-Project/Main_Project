import * as React from 'react';
import { useEffect, useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axios, { AxiosResponse } from 'axios';
import { NavItem } from 'react-bootstrap';

type UserProfileNavbar = {
  name: string;
  image?: string;
};

export const UserProfileNavbar = (props: UserProfileNavbar) => {

  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
            <img src={props.image} />
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
