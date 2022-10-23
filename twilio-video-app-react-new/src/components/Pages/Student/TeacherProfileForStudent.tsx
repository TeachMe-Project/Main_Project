import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";
import Loader from "../../../auth0/Loader";
import CardDetails from "../../Card/CardDetails";
// import Images from "../../../assets/images/Images";
// import Loader from "../../utils/Loader";

type initialStateType = {
    Name: string,
    Email: string,
    Mobile: string,
    Description: string,
    Image: string
}


const TeacherProfileForStudents = () => {
    const navigate = useNavigate();
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [initialState, setInitialState] = useState<initialStateType>({
        Description: "",
        Email: "",
        Name: "",
        Mobile: "",
        Image: ""
    });
    const {user} = useAuth0();
    const params = useParams();
    console.log(params.teacher_id);
    const [enableEditProfile, setEnableEditProfile] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);
    const [courses, setCourses] = useState<any[]>([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8081/teacher/${params.teacher_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res: AxiosResponse) => {
            console.log(res.data)
            setInitialState({
                Name: res.data[0].first_name + " " + res.data[0].last_name,
                Description: res.data[0].description,
                Mobile: res.data[0].contact_no,
                Email: res.data[0].user.username,
                Image: res.data[0].user.profile_image
            })
            const course = res.data[0].course;
            course.map((item: any) => {
                setCourses(prevState => [
                    ...prevState,
                    {
                        id: item.course_id,
                        title: item.subject + " " + item.grade + " " + item.medium + " " + "Medium",
                    }
                ]);
            });
            if (res.status === 200) {
                console.log(initialState)
                setIsDataLoading(true);
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }, []);


    return (
        <Col lg={12} className='px-lg-5'>
            <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                <Col lg={12} md={12} xs={12}>
                    <h1 className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                        Tutor Profile
                        <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                              onClick={() => navigate(-1)}/>
                    </h1>
                </Col>
            </Row>
            <Row className='mt-3'>
                {!isDataLoading && <Loader/>}
                {isDataLoading &&
                <>
                    <Col lg={3} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={initialState.Image} className='w-100' style={{borderRadius: "50%"}}/>
                    </Col>
                    <Col className='px-lg-5'>
                        <Formik
                            onSubmit={console.log}
                            initialValues={initialState}
                        >
                            {({
                                  values,
                              }) => (
                                <Row className="pb-md-0 pb-4">
                                    <Form noValidate>
                                        <Tabs
                                            defaultActiveKey="profile"
                                            id="uncontrolled-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="profile" title="Profile Details">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2">
                                                            <Form.Label style={{fontWeight: 600}}>First
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                value={values.Name}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2">
                                                            <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                value={values.Email}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                               <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2">
                                                            <Form.Label style={{fontWeight: 600}}>Contact No</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                value={values.Mobile}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Description</Form.Label>
                                                            <Form.Control as="textarea"
                                                                          rows={4}
                                                                          name="Description"
                                                                          value={values.Description}
                                                                          disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="coursesconducted" title="Courses Conducted" className="teacherprofiletabcontent CoursesConducted">
                                                {/*Put title as card header*/}

                                                {courses.map((item: any) => {
                                                    return (
                                                        <div className="SearchResultCard">
                                                            <Col xl={2}>
                                                                <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                                                            </Col>

                                                            <Col xl={8} className="me-4">
                                                                <CardDetails details={item.title} />
                                                            </Col>


                                                            <Col xl={2} className="me-8">
                                                                <div className="ViewMore">
                                                                        <button className="CardButton" onClick={() => navigate(`/course/${item.id}`)}>
                                                                            View More
                                                                        </button>
                                                                </div>
                                                            </Col>
                                                        </div>

                                                    )})}

                                                </Tab>

                                        </Tabs>
                                    </Form>
                                </Row>)}
                        </Formik>
                    </Col>
                </>
                }
            </Row>
        </Col>
    );
};

export default TeacherProfileForStudents;