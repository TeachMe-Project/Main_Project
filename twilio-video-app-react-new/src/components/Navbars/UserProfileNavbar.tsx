import * as React from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

type UserProfileNavbar = {
  name: string;
  image?: HTMLImageElement;
};

export const UserProfileNavbar = (props: UserProfileNavbar) => {
  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
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
