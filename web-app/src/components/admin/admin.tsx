import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import NavBar from "../navBar/navBar";
import AdminTabs from "../tabset/adminTabs";



const Admin: React.FC = () => {
  return (
    <div>
    <Container fluid={true} className='institute pt-4' id="Institute" 
    style={{
       display:"flex",
        justifyContent:"center"
    }} >
      
      <AdminTabs />
      </Container>
    </div>
  );
};

export default Admin;

        