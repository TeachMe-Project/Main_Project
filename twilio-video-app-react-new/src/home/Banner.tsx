import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Images from '../Assets/Images/Images';
import { useAuth0 } from '@auth0/auth0-react';

const Banner: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container fluid={true} className="banner mb-lg-5" id="Home">
      <Row className="mt-3 d-flex flex-lg-row flex-column-reverse">
        <Col lg={5} md={12} className="d-lg-flex flex-lg-column justify-content-lg-center">
          <Row className="ms-lg-3">
            <Col lg={12} className="m-0 px-lg-4 text-lg-start text-md-center text-center">
              <h1 className="banner-header text-lg-start text-center">
                Step into a brand new learning experience with LearnX
              </h1>
              <p className="mt-lg-3 banner-text text-md-start ">
                It is the convenient mode of learning and #1 online platform in Sri Lanka to offer reliable education
                courses with a unique set of features.
              </p>
              <Button
                className="px-md-4 py-2 mt-3 GetStartedBtn"
                style={{ marginRight: '5px',marginTop: '3rem', fontSize: '1rem', fontWeight: '600', borderRadius: '20px', }}
                onClick={loginWithRedirect}
              >
                Log In
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={7} md={12}>
          <Row>
            <Col lg={12} md={12} className="mx-md-auto">
              <Image src={Images.home} className="w-75 ms-5"></Image>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
