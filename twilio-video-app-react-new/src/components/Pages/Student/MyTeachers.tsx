import * as React from 'react';
import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";

export const MyTeachers = () => {
  return (
    <div className='MyTeachers'>
        <Container>
        <div className="PanelHeader">
          <h2>My Teachers</h2>
        </div>
        <div className="PanelContainer">
          <Card>
            Search bar
            <br />
            jkwnfkjenfejkfnejfnef\efjkenjkn
          </Card>
          <h5>My Recent Courses</h5>
          <div className="MyCoursesCardBackground">
           
          </div>

         
        </div>

        {/* <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Crocodile">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs> */}
      </Container>
    </div>
  )
}
export default MyTeachers;
