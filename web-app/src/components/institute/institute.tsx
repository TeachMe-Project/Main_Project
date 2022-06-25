import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import NavBar from "../navBar/navBar";
import InstituteTabs from "../tabset/instituteTabs";



const Institute: React.FC = () => {
  return (
    <div>
    <Container fluid={true} className='institute pt-4' id="Institute" 
    style={{
       display:"flex",
        justifyContent:"center"
    }} >
      
      <InstituteTabs />
      </Container>
    </div>
  );
};

export default Institute;

        