import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import axios, { AxiosResponse } from 'axios';
import PanelContainer from '../../Layout/PanelContainer';
import CardDetails from '../../Card/CardDetails';
import { FiDownload } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const schema = yup.object().shape({
  Title: yup.string().required(),
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Email: yup
    .string()
    .email()
    .required(),
  Description: yup.string().required(),
  Mobile: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
      'Mobile number is invalid'
    ),
  AccountName: yup
    .string()
    .label('Account Holder Name')
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

const TeacherProfile = () => {
  const { user } = useAuth0(),
    teacherAuthId = user?.sub;
  // const baseURL = `https://learnxy.azurewebsites.net/teacher/${teacherAuthId}`;

  const [loading, setLoading] = useState(false);
  const [pageStage, setPageStage] = useState(1);
  const [titleValidate, setTitleValidate] = useState<boolean>(false);
  const [fistNameValidate, setFistNameValidate] = useState(false);
  const [lastNameValidate, setLastNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [rPasswordValidate, setRPasswordValidate] = useState(false);
  const [descriptionValidate, setDescriptionValidate] = useState(false);
  const [qualificationValidate, setQualificationValidate] = useState(false);
  const [mobileValidate, setMobileValidate] = useState(false);
  const [accountNameValidate, setAccountNameValidate] = useState(false);
  const [bankNameValidate, setBankNameValidate] = useState(false);
  const [branchNameValidate, setBranchNameValidate] = useState(false);
  const [accountNoValidate, setAccountNoValidate] = useState(false);

  const changeTitleValidate = (status: boolean): boolean => {
    if (status) {
      setTitleValidate(true);
      return false;
    } else {
      setTitleValidate(false);
      return true;
    }
  };
  const changeFistNameValidate = (status: boolean): boolean => {
    if (status) {
      setFistNameValidate(true);
      return false;
    } else {
      setFistNameValidate(false);
      return true;
    }
  };
  const changeLastNameValidate = (status: boolean): boolean => {
    if (status) {
      setLastNameValidate(true);
      return false;
    } else {
      setLastNameValidate(false);
      return true;
    }
  };
  const changeEmailValidate = (status: boolean): boolean => {
    if (status) {
      setEmailValidate(true);
      return false;
    } else {
      setEmailValidate(false);
      return true;
    }
  };
  const changeDescriptionValidate = (status: boolean): boolean => {
    if (status) {
      setDescriptionValidate(true);
      return false;
    } else {
      setDescriptionValidate(false);
      return true;
    }
  };
  const changeQualificationValidate = (status: boolean): boolean => {
    if (status) {
      setQualificationValidate(true);
      return false;
    } else {
      setQualificationValidate(false);
      return true;
    }
  };
  const changeMobileValidate = (status: boolean): boolean => {
    if (status) {
      setMobileValidate(true);
      return false;
    } else {
      setMobileValidate(false);
      return true;
    }
  };
  const changeAccountNameValidate = (status: boolean): boolean => {
    if (status) {
      setAccountNameValidate(true);
      return false;
    } else {
      setAccountNameValidate(false);
      return true;
    }
  };
  const changeBankNameValidate = (status: boolean): boolean => {
    if (status) {
      setBankNameValidate(true);
      return false;
    } else {
      setBankNameValidate(false);
      return true;
    }
  };
  const changeBranchNameValidate = (status: boolean): boolean => {
    if (status) {
      setBranchNameValidate(true);
      return false;
    } else {
      setBranchNameValidate(false);
      return true;
    }
  };
  const changeAccountNoValidate = (status: boolean): boolean => {
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

  const [initialState, setInitialState] = useState({
    Title: '',
    Firstname: '',
    Lastname: '',
    Email: '',
    Mobile: '',
    Description: '',
    Qualification: '',
    AccountName: '',
    BankName: '',
    BranchName: '',
    AccountNo: '',
  });
  const [profileImage, setProfileImage] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);
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
    axios
      .request(options)
      .then(function(response) {
        console.log('Success');
        // @ts-ignore
        return setPasswordMail('success');
      })
      .catch(function(error) {
        console.log(error.message);
        return setPasswordMail(error.message);
      });
  };

  useEffect(() => {
    if (user?.family_name === 'teacher') {
      setIsEditProfile(true);
    } else if (user?.family_name === 'student') {
      setIsEditProfile(false);
    }

    axios({
      method: 'GET',
      url: `http://localhost:8081/teacher/authId/${teacherAuthId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: AxiosResponse) => {
        console.log(res.data[0]);
        setInitialState({
          Title: res.data[0].title,
          Firstname: res.data[0].first_name,
          Lastname: res.data[0].last_name,
          Email: res.data[0].user.username,
          Mobile: res.data[0].contact_no,
          Description: res.data[0].description,
          Qualification: res.data[0].qualifications,
          AccountName: res.data[0].account_name,
          BankName: res.data[0].bank_name,
          BranchName: res.data[0].branch_name,
          AccountNo: res.data[0].account_no,
        });
        setProfileImage(res.data[0].user.profile_image);
        console.log(initialState.Qualification);
        console.log(profileImage);
        if (res.status === 200) {
          console.log(initialState);
          setIsDataLoading(true);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <Container>
      <Row>
        <PanelContainer />
        <div className="PanelHeader">
          <h2>Tutor Profile</h2>
        </div>

        {isDataLoading && (
          <Row>
            <Col lg={3} className="d-flex flex-column justify-content-center align-items-center">
              <img src={profileImage} className="w-100" style={{ borderRadius: '50%' }} />

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
                  <Row className="pb-md-0">
                    <Form noValidate onSubmit={handleSubmit}>
                      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabs ">
                        <Tab eventKey="profile" title="Profile Details" style={{ fontWeight: 700 }}>
                          <Row className="mt-lg-0 me-3 mt-md-3 d-flex flex-row">
                            <Col lg={6} md={6} sm={12} xs={12}>
                              <Form.Group className="mb-2 ProfileDetailsContainer" controlId="validationInstituteName">
                                <Form.Label style={{ fontWeight: 600 }}>Email</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Email Here"
                                  name="Email"
                                  value={values.Email}
                                  onChange={handleChange}
                                  isInvalid={!!errors.Title ? changeEmailValidate(false) : changeEmailValidate(true)}
                                  isValid={touched.Email}
                                  onBlur={handleBlur}
                                  disabled={true}
                                />
                                <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={12} sm={12} xs={12}>
                              <Form.Group className="mb-2" controlId="validationMobile">
                                <Form.Label style={{ fontWeight: 600 }}>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter First Name Here"
                                  name="Mobile"
                                  value={values.Firstname}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!errors.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)
                                  }
                                  isValid={touched.Firstname}
                                  onBlur={handleBlur}
                                  disabled={enableEditProfile}
                                />
                                <Form.Control.Feedback type="invalid">{errors.Firstname}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="mt-lg-0 me-3 mt-md-3 d-flex flex-row">
                            <Col lg={6} md={6} sm={12} xs={12}>
                              <Form.Group className="mb-2" controlId="validationEmail">
                                <Form.Label style={{ fontWeight: 600 }}>Lastname</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Last Name Here"
                                  name="Lastname"
                                  value={values.Lastname}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!errors.Email ? changeLastNameValidate(false) : changeLastNameValidate(true)
                                  }
                                  isValid={touched.Lastname}
                                  onBlur={handleBlur}
                                  disabled={enableEditProfile}
                                />
                                <Form.Control.Feedback type="invalid">{errors.Lastname}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={12} sm={12} xs={12}>
                              <Form.Group className="mb-2" controlId="validationMobile">
                                <Form.Label style={{ fontWeight: 600 }}>Mobile No</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter mobile in 0771234567"
                                  name="Mobile"
                                  value={values.Mobile}
                                  onChange={handleChange}
                                  isInvalid={!!errors.Mobile ? changeMobileValidate(false) : changeMobileValidate(true)}
                                  isValid={touched.Mobile}
                                  onBlur={handleBlur}
                                  disabled={enableEditProfile}
                                />
                                <Form.Control.Feedback type="invalid">{errors.Mobile}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="mt-lg-0 me-3 mt-md-3 d-flex flex-row">
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <Form.Group className="mb-1" controlId="validationDescription">
                                <Form.Label style={{ fontWeight: 600 }}>Description</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  placeholder="Enter a description to describe yourself"
                                  rows={4}
                                  name="Description"
                                  value={values.Description}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!errors.Description && touched.Description
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
                        </Tab>

                        <Tab eventKey="bankdetails" title="Bank Details">
                          <Row className="mt-lg-0 me-3 mt-md-3">
                            <Col lg={12} md={12} sm={12} xs={12}>
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
                          <Row className="mt-lg-0 me-3 mt-md-3 d-flex flex-column">
                            <Col lg={12} md={6} sm={12} xs={12}>
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
                            <Col lg={12} md={6} sm={12} xs={12}>
                              <Form.Group className="mb-2" controlId="validationBranchName">
                                <Form.Label style={{ fontWeight: 600 }}>Branch Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter branch name"
                                  name="BranchName"
                                  value={values.BranchName}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!errors.BranchName
                                      ? changeBranchNameValidate(false)
                                      : changeBranchNameValidate(true)
                                  }
                                  isValid={touched.BranchName}
                                  onBlur={handleBlur}
                                  disabled={enableEditProfile}
                                />
                                <Form.Control.Feedback type="invalid">{errors.BranchName}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="mt-lg-0 me-3 mt-md-3">
                            <Col lg={12} md={12} sm={12} xs={12}>
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
                        <Tab eventKey="qualifications" title="Qualifications">
                          <Row className="mt-lg-0 mt-md-3">
                            <Col lg={12} md={12} sm={12} xs={12}>
                              <div className="SearchResultCard">
                                <Col xl={8} className="me-4">
                                  <CardDetails details={'Qualification 1'} />
                                </Col>

                                <Col xl={2} className="me-4">
                                  <div className="CardButton">
                                    <a
                                      href="https://firebasestorage.googleapis.com/v0/b/learning-e074c.appspot.com/o/Qualification%2FL1%20-%20Introduction.pdf771d93b4-e9f6-441c-ac50-a27930c18720?alt=media&token=f85c6e76-0cad-415d-9db7-cf1b0244c54d"
                                      target="_blank"
                                    >
                                      <FiDownload />
                                    </a>
                                  </div>
                                </Col>
                              </div>
                            </Col>
                          </Row>
                        </Tab>

                        {/*<Tab eventKey="coursesconducted" title="Courses Conducted"*/}
                        {/*     className="teacherprofiletabcontent CoursesConducted">*/}
                        {/*    /!*Put title as card header*!/*/}
                        {/*    <div className="SearchResultCard">*/}
                        {/*        <Col xl={2}>*/}
                        {/*            <img className="CardImage" width="50" height="50"*/}
                        {/*                 src="/Images/subjects/Mathematics.png"/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={8} className="me-4">*/}
                        {/*            <CardDetails details={"Mathematics Grade 8 English Medium"}/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={2} className="me-4">*/}
                        {/*            <div className="ViewMore">*/}
                        {/*                <Link to="/courseDetails" className="link ViewMoreBtn">*/}
                        {/*                    <button className="CardButton"*/}
                        {/*                            onClick={() => navigate("./course")}>*/}
                        {/*                        View More*/}
                        {/*                    </button>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </Col>*/}
                        {/*    </div>*/}

                        {/*    <div className="SearchResultCard">*/}
                        {/*        <Col xl={2}>*/}
                        {/*            <img className="CardImage" width="50" height="50"*/}
                        {/*                 src="/Images/subjects/Mathematics.png"/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={8} className="me-4">*/}
                        {/*            <CardDetails details={"Mathematics Grade 9 English Medium"}/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={2} className="me-4">*/}
                        {/*            <div className="ViewMore">*/}
                        {/*                <Link to="/courseDetails" className="link ViewMoreBtn">*/}
                        {/*                    <button className="CardButton"*/}
                        {/*                            onClick={() => navigate("./course")}>*/}
                        {/*                        View More*/}
                        {/*                    </button>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </Col>*/}
                        {/*    </div>*/}

                        {/*    <div className="SearchResultCard">*/}
                        {/*        <Col xl={2}>*/}
                        {/*            <img className="CardImage" width="50" height="50"*/}
                        {/*                 src="/Images/subjects/Mathematics.png"/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={8} className="me-4">*/}
                        {/*            <CardDetails details={"Science Grade 8 English Medium"}/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={2} className="me-4">*/}
                        {/*            <div className="ViewMore">*/}
                        {/*                <Link to="/courseDetails" className="link ViewMoreBtn">*/}
                        {/*                    <button className="CardButton"*/}
                        {/*                            onClick={() => navigate("./course")}>*/}
                        {/*                        View More*/}
                        {/*                    </button>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </Col>*/}
                        {/*    </div>*/}

                        {/*    <div className="SearchResultCard">*/}
                        {/*        <Col xl={2}>*/}
                        {/*            <img className="CardImage" width="50" height="50"*/}
                        {/*                 src="/Images/subjects/Mathematics.png"/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={8} className="me-4">*/}
                        {/*            <CardDetails details={"Science Grade 9 English Medium"}/>*/}
                        {/*        </Col>*/}

                        {/*        <Col xl={2} className="me-4">*/}
                        {/*            <div className="ViewMore">*/}
                        {/*                <Link to="/courseDetails" className="link ViewMoreBtn">*/}
                        {/*                    <button className="CardButton"*/}
                        {/*                            onClick={() => navigate("./course")}>*/}
                        {/*                        View More*/}
                        {/*                    </button>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </Col>*/}
                        {/*    </div>*/}

                        {/*</Tab>*/}
                      </Tabs>

                      {isEditProfile && (
                        <Row className="ms-1 mt-2 me-3">
                          <Col lg={12}>
                            {enableEditProfile ? (
                              <Button
                                className="mt-4 px-3 profile-edit-btn CardButton"
                                style={{
                                  width: 'fit-content',
                                  borderRadius: '15px',
                                  float: 'right',
                                }}
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
                                  style={{
                                    width: 'fit-content',
                                    borderRadius: '15px',
                                    float: 'right',
                                  }}
                                >
                                  Update Profile
                                </Button>
                              </>
                            )}
                            {!enableEditProfile && isEditProfile && (
                              <Button
                                className="mt-4 ms-3 profile-edit-btn CardButton"
                                style={{
                                  width: 'fit-content',
                                  borderRadius: '15px',
                                  float: 'right',
                                }}
                                onClick={changePassword}
                              >
                                Change Password
                              </Button>
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
        )}
      </Row>
    </Container>
  );
};

export default TeacherProfile;
