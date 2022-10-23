import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Row, Tab, Tabs, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { BsPencilSquare } from 'react-icons/bs';
import axios, { AxiosResponse } from 'axios';
import PanelContainer from "../../Layout/PanelContainer";
import Homework from "../Teacher/Homework";
import Card from "../../Card/Card";
import SearchResultsTestCard from "./SearchResultsTestCard";
import CardDetails from "../../Card/CardDetails";
import {FiDownload} from "react-icons/fi";
import { MdDelete, MdNotStarted } from "react-icons/md";

const schema = yup.object().shape({
  InstituteName: yup
    .string()
    .required()
    .label('Institute Name'),
  OwnerName: yup
    .string()
    .required()
    .label('Owner Name'),
  Location: yup.string().required(),
  Email: yup
    .string()
    .email()
    .required(),
  Description: yup.string().required(),
  Address: yup.string().required(),
  Mobile_Number: yup
    .string()
    .required()
    .label('Mobile Number')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
      'Entered mobile number is invalid'
    ),
  AccountName: yup
    .string()
    .label("Account Holder's Name")
    .required(),
  BankName: yup
    .string()
    .label('Bank Name')
    .required(),
  BranchName: yup
    .string()
    .label('Branch Name')
    .required(),
  AccountNo: yup
    .string()
    .label('Account Number')
    .required(),
});

const initialState = {
  InstituteName: 'Sigma Institute',
  OwnerName: 'Avishka Hettarachchi',
  Location: 'Malabe',
  Email: 'sigmainst@gmail.com',
  Mobile_Number: '0771234567',
  Description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  Address: 'Malebe, Colombo 07',
  AccountName: 'Avishka Hettarachchi',
  BankName: 'Bank OF Ceylon',
  BranchName: 'Malabe',
  AccountNo: '6612345678',
};

const TeacherProfile = () => {
  const { user } = useAuth0(),
    teacherAuthId = user?.sub,
    // navigate = useNavigate(),
    baseURL = `https://learnxy.azurewebsites.net/teacher/${teacherAuthId}`,
    [profDetails,setProfDetails] =useState<any[]>([]),
    [instituteNameValidate, setInstituteNameValidate] = useState(false),
    [ownerNameValidate, setOwnerNameValidate] = useState(false),
    [locationValidate, setLocationValidate] = useState(false),
    [emailValidate, setEmailValidate] = useState(false),
    [descriptionValidate, setDescriptionValidate] = useState(false),
    [addressValidate, setAddressValidate] = useState(false),
    [mobileValidate, setMobileValidate] = useState(false),
    [accountNameValidate, setAccountNameValidate] = useState(false),
    [bankNameValidate, setBankNameValidate] = useState(false),
    [branchNameValidate, setBranchNameValidate] = useState(false),
    [accountNoValidate, setAccountNoValidate] = useState(false),
    changeInstituteNameValidate = (status: boolean): boolean => {
      if (status) {
        setInstituteNameValidate(true);
        return false;
      } else {
        setInstituteNameValidate(false);
        return true;
      }
    },
    changeOwnerNameValidate = (status: boolean): boolean => {
      if (status) {
        setOwnerNameValidate(true);
        return false;
      } else {
        setOwnerNameValidate(false);
        return true;
      }
    },
    changeLocationValidate = (status: boolean): boolean => {
      if (status) {
        setLocationValidate(true);
        return false;
      } else {
        setLocationValidate(false);
        return true;
      }
    },
    changeEmailValidate = (status: boolean): boolean => {
      if (status) {
        setEmailValidate(true);
        return false;
      } else {
        setEmailValidate(false);
        return true;
      }
    },
    changeDescriptionValidate = (status: boolean): boolean => {
      if (status) {
        setDescriptionValidate(true);
        return false;
      } else {
        setDescriptionValidate(false);
        return true;
      }
    },
    changeAddressValidate = (status: boolean): boolean => {
      if (status) {
        setAddressValidate(true);
        return false;
      } else {
        setAddressValidate(false);
        return true;
      }
    },
    changeMobileValidate = (status: boolean): boolean => {
      if (status) {
        setMobileValidate(true);
        return false;
      } else {
        setMobileValidate(false);
        return true;
      }
    },
    changeAccountNameValidate = (status: boolean): boolean => {
      if (status) {
        setAccountNameValidate(true);
        return false;
      } else {
        setAccountNameValidate(false);
        return true;
      }
    },
    changeBankNameValidate = (status: boolean): boolean => {
      if (status) {
        setBankNameValidate(true);
        return false;
      } else {
        setBankNameValidate(false);
        return true;
      }
    },
    changeBranchNameValidate = (status: boolean): boolean => {
      if (status) {
        setBranchNameValidate(true);
        return false;
      } else {
        setBranchNameValidate(false);
        return true;
      }
    },
    changeAccountNoValidate = (status: boolean): boolean => {
      if (status) {
        setAccountNoValidate(true);
        return false;
      } else {
        setAccountNoValidate(false);
        return true;
      }
    };

  const [enableEditProfile, setEnableEditProfile] = useState(true);
  const [passwordMail, setPasswordMail] = useState(null);
  const [isEditProfile, setIsEditProfile] = useState(false);
    const navigate = useNavigate();

  const changePassword = () => {
    const options = {
      method: 'POST',
      url: 'https://learningsl.us.auth0.com/dbconnections/change_password',
      headers: { 'content-type': 'application/json' },
      data: {
        client_id: 'MfDW7eqZ6yFDxDukb3rINlB0269uTekx',
        email: user?.email,
        connection: 'Username-Password-Authentication',
      },
    };
    // @ts-ignore
    axios.request(options)
      .then(function (response) {
        console.log('Success');
        // @ts-ignore
        return setPasswordMail('success');
      })
      .catch(function (error) {
        console.log(error.message);
        return setPasswordMail(error.message);
      });
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setProfDetails(prevState => [
            ...prevState,
            {
              
            }
          ])
        })
      })
  })
  useEffect(() => {
    if (user?.family_name === 'teacher') {
      setIsEditProfile(true);
    }
    else if (user?.family_name === 'student') {
      setIsEditProfile(false);
    }
  }, []);

  return (
    <Container>
      <Row>
        <PanelContainer />
        <div className="PanelHeader">
          <h2>Tutor Profile</h2>
        </div>

        <Row>
          <Col lg={3} className="d-flex flex-column justify-content-center align-items-center">
            <img src={user?.picture} className="w-100" style={{ borderRadius: '50%' }} />

            {passwordMail === 'success' && (
              <Alert variant="success" className="p-1 mt-2">
                {' '}
                Check email and reset the password
              </Alert>
            )}
          </Col>
          <Col className="px-lg-5">
            <Formik validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
              {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                <Row className="pb-md-0 pb-4">
                  <Form noValidate onSubmit={handleSubmit} >
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabs ">

                      <Tab eventKey="profile" title="Profile Details" className="teacherprofiletabcontent" style={{ fontWeight: 700 }}>
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                          <Col lg={10} md={6} sm={12} xs={12}>
                            <Form.Group className="mb-2 ProfileDetailsContainer" controlId="validationInstituteName">
                              <Form.Label style={{ fontWeight: 600 }}>Tutor Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter institute's name"
                                name="InstituteName"
                                value={values.InstituteName}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.InstituteName
                                    ? changeInstituteNameValidate(false)
                                    : changeInstituteNameValidate(true)}
                                isValid={touched.InstituteName}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.InstituteName}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={10} md={6} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationEmail">
                              <Form.Label style={{ fontWeight: 600 }}>Tutor's email</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter institute's email"
                                name="Email"
                                value={values.Email}
                                onChange={handleChange}
                                isInvalid={!!errors.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
                                isValid={touched.Email}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        {/*<Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">*/}
                        {/*  <Col lg={10} md={6} sm={12} xs={12}>*/}
                        {/*    <Form.Group className="mb-2" controlId="validationOwnerName">*/}
                        {/*      <Form.Label style={{ fontWeight: 600 }}>Owner's name</Form.Label>*/}
                        {/*      <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Enter owner's name"*/}
                        {/*        name="OwnerName"*/}
                        {/*        value={values.OwnerName}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        isInvalid={*/}
                        {/*          !!errors.OwnerName ? changeOwnerNameValidate(false) : changeOwnerNameValidate(true)*/}
                        {/*        }*/}
                        {/*        isValid={touched.OwnerName}*/}
                        {/*        onBlur={handleBlur}*/}
                        {/*        disabled={enableEditProfile}*/}
                        {/*      />*/}
                        {/*      <Form.Control.Feedback type="invalid">{errors.OwnerName}</Form.Control.Feedback>*/}
                        {/*    </Form.Group>*/}
                        {/*  </Col>*/}
                        {/*  <Col lg={10} md={6} sm={12} xs={12}>*/}
                        {/*    <Form.Group className="mb-2" controlId="validationLocation">*/}
                        {/*      <Form.Label style={{ fontWeight: 600 }}>Location</Form.Label>*/}
                        {/*      <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Enter location"*/}
                        {/*        name="Location"*/}
                        {/*        value={values.Location}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        isInvalid={*/}
                        {/*          !!errors.Location ? changeLocationValidate(false) : changeLocationValidate(true)*/}
                        {/*        }*/}
                        {/*        isValid={touched.Location}*/}
                        {/*        onBlur={handleBlur}*/}
                        {/*        disabled={enableEditProfile}*/}
                        {/*      />*/}
                        {/*      <Form.Control.Feedback type="invalid">{errors.Location}</Form.Control.Feedback>*/}
                        {/*    </Form.Group>*/}
                        {/*  </Col>*/}
                        {/*</Row>*/}
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                          <Col lg={10} md={12} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationMobile">
                              <Form.Label style={{ fontWeight: 600 }}>Mobile Number</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter mobile number in format: 0771234567"
                                name="Mobile"
                                value={values.Mobile_Number}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Mobile_Number ? changeMobileValidate(false) : changeMobileValidate(true)
                                }
                                isValid={touched.Mobile_Number}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Mobile_Number}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={10} md={12} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationDescription">
                              <Form.Label style={{ fontWeight: 600 }}>Description</Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter a description for the institute in order to describe
                                                                            the institute"
                                rows={4}
                                name="Description"
                                value={values.Description}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Description
                                    ? changeDescriptionValidate(false)
                                    : changeDescriptionValidate(true)
                                }
                                isValid={touched.Description}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Description}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        {isEditProfile && (
                        <Button
                            className="mt-4 ms-3 profile-edit-btn CardButton"
                            style={{ width: 'fit-content', borderRadius: '15px' ,float:'right', marginRight:'8rem' }}

                            onClick={changePassword}
                        >
                          Change Password
                        </Button>
                            )}

                      </Tab>

                      <Tab eventKey="qualifications" title="Qualifications" className="teacherprofiletabcontent Qualification">

                        <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                          <Col lg={10} md={12} sm={12} xs={12}>
                            <div className="SearchResultCard">

                              <Col xl={8} className="me-4">
                                <CardDetails details={"Qualification 1"} />
                              </Col>

                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                              <button className="QualificationBtn">
                                <Link to="/" className="link " >
                                <FiDownload className="ReactIcon DownloadBtn" />
                              </Link>
                                </button>
                                </div>
                              </Col>

                              {isEditProfile && (
                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <Link to="/" className="link " >
                                    <button className="QualificationBtn">
                                      <MdDelete className="ReactIcon DeleteBtn" />
                                    </button>
                                  </Link>
                                </div>
                              </Col>
                                  )}


</div>
                            <div className="SearchResultCard">

                              <Col xl={8} className="me-4">
                                <CardDetails details={"Qualification 2"} />
                              </Col>

                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <button className="QualificationBtn">
                                    <Link to="/" className="link " >
                                      <FiDownload className="ReactIcon DownloadBtn" />
                                    </Link>
                                  </button>
                                </div>
                              </Col>
                              {isEditProfile && (
                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <Link to="/" className="link " >
                                    <button className="QualificationBtn">
                                      <MdDelete className="ReactIcon DeleteBtn" />
                                    </button>
                                  </Link>
                                </div>
                              </Col>

                                  )}

                            </div>

                            <div className="SearchResultCard">

                              <Col xl={8} className="me-4">
                                <CardDetails details={"Qualification 3"} />
                              </Col>

                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <button className="QualificationBtn">
                                    <Link to="/" className="link " >
                                      <FiDownload className="ReactIcon DownloadBtn" />
                                    </Link>
                                  </button>
                                </div>
                              </Col>

                              {isEditProfile && (
                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <Link to="/" className="link " >
                                    <button className="QualificationBtn">
                                      <MdDelete className="ReactIcon DeleteBtn" />
                                    </button>
                                  </Link>
                                </div>
                              </Col>
                                  )}



                            </div>
                            <div className="SearchResultCard">

                              <Col xl={8} className="me-4">
                                <CardDetails details={"Qualification 4"} />
                              </Col>

                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <button className="QualificationBtn">
                                    <Link to="/" className="link " >
                                      <FiDownload className="ReactIcon DownloadBtn" />
                                    </Link>
                                  </button>
                                </div>
                              </Col>
                              {isEditProfile && (
                              <Col xl={2} className="me-4">
                                <div className="CardButton">
                                  <Link to="/" className="link " >
                                    <button className="QualificationBtn">
                                      <MdDelete className="ReactIcon DeleteBtn" />
                                    </button>
                                  </Link>
                                </div>
                              </Col>
                                  )}



                            </div>
                          </Col>

                        </Row>
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3">

                        </Row>
                      </Tab>


                      <Tab eventKey="coursesconducted" title="Courses Conducted" className="teacherprofiletabcontent CoursesConducted">
                        {/*Put title as card header*/}
                        <div className="SearchResultCard">
                          <Col xl={2}>
                            <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                          </Col>

                          <Col xl={8} className="me-4">
                            <CardDetails details={"Mathematics Grade 8 English Medium"} />
                          </Col>


                          <Col xl={2} className="me-4">
                            <div className="ViewMore">
                              <Link to="/courseDetails" className="link ViewMoreBtn">
                                <button className="CardButton" onClick={() => navigate("./course")}>
                                  View More
                                </button>
                              </Link>
                            </div>
                          </Col>
                        </div>

                        <div className="SearchResultCard">
                          <Col xl={2}>
                            <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                          </Col>

                          <Col xl={8} className="me-4">
                            <CardDetails details={"Mathematics Grade 9 English Medium"} />
                          </Col>

                          <Col xl={2} className="me-4">
                            <div className="ViewMore">
                              <Link to="/courseDetails" className="link ViewMoreBtn">
                                <button className="CardButton" onClick={() => navigate("./course")}>
                                  View More
                                </button>
                              </Link>
                            </div>
                          </Col>
                        </div>


                        <div className="SearchResultCard">
                          <Col xl={2}>
                            <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                          </Col>

                          <Col xl={8} className="me-4">
                            <CardDetails details={"Science Grade 8 English Medium"} />
                          </Col>


                          <Col xl={2} className="me-4">
                            <div className="ViewMore">
                              <Link to="/courseDetails" className="link ViewMoreBtn">
                                <button className="CardButton" onClick={() => navigate("./course")}>
                                  View More
                                </button>
                              </Link>
                            </div>
                          </Col>
                        </div>

                        <div className="SearchResultCard">
                          <Col xl={2}>
                            <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                          </Col>

                          <Col xl={8} className="me-4">
                            <CardDetails details={"Science Grade 9 English Medium"} />
                          </Col>

                          <Col xl={2} className="me-4">
                            <div className="ViewMore">
                              <Link to="/courseDetails" className="link ViewMoreBtn">
                                <button className="CardButton" onClick={() => navigate("./course")}>
                                  View More
                                </button>
                              </Link>
                            </div>
                          </Col>
                        </div>

                      </Tab>


                      {isEditProfile && (
                      <Tab eventKey="bankdetails" title="Bank Details" className="teacherprofiletabcontent">
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                          <Col lg={10} md={12} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationAccountName">
                              <Form.Label style={{ fontWeight: 600 }}>Account Holder's Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter account holder's name"
                                name="AccountName"
                                value={values.AccountName}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.AccountName
                                    ? changeAccountNameValidate(false)
                                    : changeAccountNameValidate(true)
                                }
                                isValid={touched.AccountName}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.AccountName}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                          <Col lg={10} md={6} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationBankName">
                              <Form.Label style={{ fontWeight: 600 }}>Bank Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter bank name"
                                name="BankName"
                                value={values.BankName}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.BankName ? changeBankNameValidate(false) : changeBankNameValidate(true)
                                }
                                isValid={touched.BankName}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.BankName}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={10} md={6} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationBranchName">
                              <Form.Label style={{ fontWeight: 600 }}>Branch Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter branch name"
                                name="BranchName"
                                value={values.BranchName}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.BranchName ? changeBranchNameValidate(false) : changeBranchNameValidate(true)
                                }
                                isValid={touched.BranchName}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.BranchName}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                          <Col lg={10} md={12} sm={12} xs={12}>
                            <Form.Group className="mb-2" controlId="validationAccountNo">
                              <Form.Label style={{ fontWeight: 600 }}>Account Number</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter account number"
                                name="AccountNo"
                                value={values.AccountNo}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.AccountNo ? changeAccountNoValidate(false) : changeAccountNoValidate(true)
                                }
                                isValid={touched.AccountNo}
                                onBlur={handleBlur}
                                disabled={enableEditProfile}
                              />
                              <Form.Control.Feedback type="invalid">{errors.AccountNo}</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Tab>
                      )}
                    </Tabs>
                    {isEditProfile && (
                      <Row className="ms-1 mt-2 pe-lg-4">
                        <Col lg={10}>
                          {enableEditProfile ? (
                            <Button
                              className="mt-4 px-3 profile-edit-btn CardButton"
                              style={{ width: 'fit-content', borderRadius: '15px', float:'right' }}

                              onClick={() => {
                                setEnableEditProfile(false);
                                console.log(enableEditProfile);
                              }}
                            >
                              <BsPencilSquare style={{ marginRight: '10px' }} />
                              Edit Profile
                            </Button>
                          ) : (
                            <>
                              <Button
                                className="mt-4 ms-2 profile-edit-btn CardButton"
                                style={{ width: 'fit-content', borderRadius: '15px', float:'right' }}

                              >
                                Update Profile
                              </Button>

                            </>
                          )}
                        </Col>
                      </Row>
                    )}
                  </Form>
                </Row>
              )}
            </Formik>
          </Col>
        </Row>

      </Row>
    </Container>

  );
};

export default TeacherProfile;
