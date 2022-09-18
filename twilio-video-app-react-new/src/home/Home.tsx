import React from "react";
import NavBar from "./navBar";
import { Row } from "react-bootstrap";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <NavBar />
      <Row className="p-0 m-0">
        <Banner />
      </Row>
    </>
  );
};

export default Home;
