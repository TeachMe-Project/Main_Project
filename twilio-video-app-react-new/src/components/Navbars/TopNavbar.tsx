import * as React from 'react';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import UserProfileNavbar from '../Navbars/UserProfileNavbar';
import { Row, Col, Container } from 'react-bootstrap';
import Button from '../Button/Button';

export const TopNavbar = () => {
  return (
    <div className="TopNavbar">
      <Col xl={2}>
        <Logo />
      </Col>
      <Col xl={7}></Col>
      <Col xl={3}>
        <UserProfileNavbar name="Maneth Wijetunga" />
      </Col>
    </div>
  );
};

export default TopNavbar;
