import * as React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

// type UserProfileNavbar={
//   name: string;
//   image?: HTMLImageElement
// }

export const UserProfileNavbar = (props) => {
  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
            <img src={require("../../Images/pexels-photo-1226302.jpeg")} />
          </div>
          <div className="Name">{props.name}</div>
        </Link>
      </div>
      <Link to="#">
        <div className="NotificationBell">
          <BsFillBellFill className="Bell-icon" />
        </div>
      </Link>
      <Link to="/userprofile" className="link">
        <div className="SignoutBtn">
          <Button name="Signout"/>
        </div>
      </Link>
    </div>
  );
};
export default UserProfileNavbar;
