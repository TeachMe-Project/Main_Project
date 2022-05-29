import * as React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import Notes from "./Notes";
import Homework from "./Homework";
import PendingPayments from "./PendingPayments";
import PanelContainer from "../../Layout/PanelContainer";

export const Course = () => {
  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader">
              <h3>Mathematics Class</h3>
              <div className="PanelImage">
              <img src={require("../../../Assets/Images/testimg2.jpeg")} />
            </div>
            </div>

            <Tabs>
             
              <div className="Details">
                <Details label="Subject" value="Mathematics" symbol=":" />
                <Details label="Teacher" value="Mr. Lasitha Nuwan" symbol=":" />
                <Details label="Grade" value="8" symbol=":" />
                <Details
                  label="Description"
                  value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                />
                <Details label="Monthly Payment" value= "LKR 2500" symbol=":" />
                <Details label="Started Date" value="2022-03-24" symbol=":" />
                <Details label="Institute" value="Sigma Institute" symbol=":" />
                <Details label="Duration" value="12 months" symbol=":" />
             
              </div>
              <div className="Notes">
                <Notes topic="Note for week 1" date="04-05-2022"/>
                <Notes topic="Note for week 2" date="04-05-2022"/>
                <Notes topic="Note for week 3" date="04-05-2022"/>
                <Notes topic="Note for week 4" date="04-05-2022"/>
                <Notes topic="Note for week 5" date="04-05-2022"/>
              </div>
              <div className="Homework">
                <Homework name="Differentiaion part 1"
                date="2022-04-05"
                btnname="view"/>
                <Homework name="Differentiaion part 1"
                date="2022-04-05"
                btnname="view"/>
                <Homework name="Differentiaion part 1"
                date="2022-04-05"
                btnname="view"/>
                <Homework name="Differentiaion part 1"
                date="2022-04-05"
                btnname="view"/>
                
              </div>
              <div className="Pending Payments">
                <PendingPayments month="January"
                date="2022-02-24"
                amount="LKR 3000"/> 
            <PendingPayments month="February"
                date="2022-02-24"
                amount="LKR 3000"/> 
                <PendingPayments month="March"
                date="2022-02-24"
                amount="LKR 3000"/> 
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
