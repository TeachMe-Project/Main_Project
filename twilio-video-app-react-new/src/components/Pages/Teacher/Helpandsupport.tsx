import * as React from "react";
import PanelContainer from "../../Layout/PanelContainer";
import { Container, Row } from "react-bootstrap";
import ContactUs from "../Student/contactUs";

export const HelpAndSupport = () => {
  return (
    <div className="HelpAndSupport">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Help & Support</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <ContactUs />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HelpAndSupport;
