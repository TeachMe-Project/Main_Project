import * as React from 'react';
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Details from './Details';
import PanelContainer from '../../Layout/PanelContainer';

type tutorName = {
    // name: string;
    image?: HTMLImageElement;
};
export const CourseDetails = () => {
    return (
        <div className="Course">
            <Container>
                <Row>
                    <PanelContainer/>
                    <div className="PanelHeader">
                        <h2>Course Details</h2>
                    </div>
                    <div className="Panel">
                        <div className="PanelSubHeader">
                            <div className="PanelImage">
                                <img src={'/Images/subjects/Mathematics.png'}/>
                            </div>

                            <div className="PanelTopic">
                                <div className="SubjectName">
                                    <h3>Mathematics</h3>
                                </div>
                                <div className="TutorProfileButton">
                                    <Link to="/teacherProfile" className="link">
                                        <div className="UserImg">
                                            <img src={'/Images/Teachers/mr1.jpg'}/>
                                        </div>
                                        <div className="Name">Mr. Saman Rathnapriya</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="Details">
                            <Details label="Subject" value="Mathematics" symbol=":"/>
                            <Details label="Grade" value="10" symbol=":"/>
                            <Details label="Medium" value="English" symbol=":"/>
                            <Details
                                label="Description"
                                value="This course includes content of Grade 10 mathematics
                of local syllabus in English medium. It contains algebraic concepts and skills needed to
                graph and solve linear equations and inequalities."
                            />
                            <Details label="Monthly Payment" value="LKR 2500" symbol=":"/>
                            <Details label="Started Date" value="2022-03-24" symbol=":"/>
                            <Details label="Institute" value="Sigma Institute" symbol=":"/>
                            <Details label="Duration" value="12 months" symbol=":"/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;
