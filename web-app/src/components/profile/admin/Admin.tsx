import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import NavBar from "../../navBar/navBar";
import {Routes, Route} from "react-router-dom";
import ManageUsers from "../admin/ManageUsers";
import ManageCourses from "../admin/ManageCourses";
import ComplaintHandling from "../admin/ComplaintHandling";
import VerifyTutorsPage from "../admin/VerifyTutorsPage";
import VerifyInstitutesPage from "../admin/VerifyInstitutesPage";

const Admin: React.FC = () => {
  return (
    <div>
    <Container fluid={true} className='institute pt-4' id="Institute" 
    style={{
       display:"flex",
        justifyContent:"center"
    }} >
      </Container>
 </div>
  );
};
export default Admin;