import * as React from "react";
import { Container, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import Notes from "./Notes";
import PanelContainer from "../../Layout/PanelContainer";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ButtonCommon } from "../../Button/ButtonCommon";

library.add(fas);

export const StudentAnalytics = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate("/");
  };
  return (
    <div className="StudentAnalytics">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Student Analytics</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader">
              <div className="PanelImage">{<img src={"/Images/Students/st3.jpg"} />}</div>
              <h3>Nuwani Alubomulla</h3>
            </div>

            <Tabs>
              <div className="Details" style={{ marginTop: "50px" }}>
                <Details label="Email" value="nuwanial@gmail.com" symbol=":" />
                <Details label="Parent's Contact" value="077-4789872" symbol=":" />
                <Details label="Subject" value="Mathematics" symbol=":" />
                <Details label="Grade" value="9" symbol=":" />
                <Details label="Medium" value="English" symbol=":" />
                <Details label="School" value="Thambuttegama Central College" symbol=":" />
              </div>
              <div className="Analytics">
                <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                  <Link to="/uploadnotes" className="link">
                    <ButtonCommon name={"Upload Notes"} />
                  </Link>
                </div>

                <div className="noteContainer" style={{ marginTop: "50px" }}>
                  <Notes topic="Note for week 1" date="04-05-2022" />
                  <Notes topic="Note for week 2" date="04-05-2022" />
                  <Notes topic="Note for week 3" date="04-05-2022" />
                  <Notes topic="Note for week 4" date="04-05-2022" />
                  <Notes topic="Note for week 5" date="04-05-2022" />
                </div>
              </div>
              <div className="Participation" style={{ marginTop: "50px" }}>
                <div className="Week">
                  <div className="WeekHeader">2022-08-12:</div>
                  <div className="WeekImages">
                    {<img src={"/Images/Students/st3.jpg"} />}
                    {<img src={"/Images/Students/st3.jpg"} />}
                    {<img src={"/Images/Students/st3.jpg"} />}
                    {<img src={"/Images/Students/st3.jpg"} />}
                    {<img src={"/Images/Students/st3.jpg"} />}
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default StudentAnalytics;
