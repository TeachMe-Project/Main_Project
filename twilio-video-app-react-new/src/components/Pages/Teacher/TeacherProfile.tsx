import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import AzureCloudStorage from '../../AzureCloudStorage/AzureCloudStorageImagesTeacher';

// @ts-ignore
import LazyLoad from 'react-lazyload';

const schema = yup.object().shape({
  Firstname: yup
    .string()
    .required()
    .label('First Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'First Name must contain only letters'),
  Lastname: yup
    .string()
    .required()
    .label('Last Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Last Name must contain only letters'),
  Email: yup
    .string()
    .email()
    .required()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid Email address'),
  Password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters with 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character'
    ),
  Grade: yup
    .string()
    .required()
    .matches(/Grade-(?:1[01]|0[1-9])|AL-20\d\d/, 'Grade must be between Grade-03 to A/L-Year-3'),
  Bankbranch: yup
    .string()
    .required()
    .label('Bank Branch'),
  Accountnumber: yup
    .string()
    .required()
    .label('Account Number')
    .matches(/Grade-(?:1[01]|0[1-9])/, 'Account number should only contain numbers '),
  Qualifications: yup
    .string()
    .required()
    .label('Qualifications'),
});

const initialState = {
  Firstname: '',
  Lastname: '',
  Email: '',
  Password: '',
  Grade: '',
  Bankbranch: '',
  Accountnumber: '',
  Qualifications: '',
};

export const TeacherProfile = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [gradeValidate, setGradeValidate] = useState<boolean>(false);
  const [fistNameValidate, setFistNameValidate] = useState(false);
  const [lastNameValidate, setLastNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [BankbranchValidate, setBankbranchValidate] = useState(false);
  const [AccountnumberValidate, setAccountnumberValidate] = useState(false);
  const [QualificationsValidate, setQualificationsValidate] = useState(false);

  const changeGradeValidate = (status: boolean): boolean => {
    if (status) {
      setGradeValidate(true);
      return false;
    } else {
      setGradeValidate(false);
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
  const changePasswordValidate = (status: boolean): boolean => {
    if (status) {
      setPasswordValidate(true);
      return false;
    } else {
      setPasswordValidate(false);
      return true;
    }
  };
  const changeBankbranchValidate = (status: boolean): boolean => {
    if (status) {
      setBankbranchValidate(true);
      return false;
    } else {
      setBankbranchValidate(false);
      return true;
    }
  };
  const changeAccountnumberValidate = (status: boolean): boolean => {
    if (status) {
      setAccountnumberValidate(true);
      return false;
    } else {
      setAccountnumberValidate(false);
      return true;
    }
  };
  const changeQualificationsValidate = (status: boolean): boolean => {
    if (status) {
      setQualificationsValidate(true);
      return false;
    } else {
      setQualificationsValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <div className="TeacherProfile">
        <Container>
          <div className="PanelHeader">
            <h2>User Profile</h2>
            {!isEditing && <Button name=" Edit Profile" onClick={() => setISEditing(true)} />}
          </div>
          <div className="PanelContainer">
            <Col xl={4}>
              <div className="LeftContainer">
                <div className="ProfileImg">
                  <img src={'https://learninggp2.blob.core.windows.net/images/teacher.jpg'} />
                  <AzureCloudStorage />
                </div>
                <div className="ParentContact">
                  <div className="ContactHeader">Bank Account Details:</div>
                  <div className="ParentLabel">Bank Branch:</div>
                  <div className="ParentValue">Commercial Bank - Maharagama </div>
                  <div className="ParentLabel">Account No:</div>
                  <div className="ParentValue">80019238343</div>
                </div>
              </div>
            </Col>

            <Col xl={8}>
              <div className="RightContainer">
                <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                  {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                    <Row>
                      <Form noValidate onSubmit={handleSubmit}>
                        {/*FirstName*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationFirstName">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>First Name</Form.Label>
                            </Col>

                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Enter the first name here"
                                name="Firstname"
                                value={values.Firstname}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)
                                }
                                isValid={touched.Firstname}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Firstname}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>
                        {/*LastName*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Last Name</Form.Label>
                            </Col>

                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Enter the last name here"
                                name="Lastname"
                                value={values.Lastname}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Lastname ? changeLastNameValidate(false) : changeLastNameValidate(true)
                                }
                                isValid={touched.Lastname}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Lastname}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>
                        {/* Qualitifications */}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Qualitifications</Form.Label>
                            </Col>

                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Enter the Qualitifications here"
                                name="Qualitifications"
                                value={values.Qualifications}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Qualifications
                                    ? changeQualificationsValidate(false)
                                    : changeQualificationsValidate(true)
                                }
                                isValid={touched.Qualifications}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Qualifications}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>
                        {/*Email*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationEmail">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Email</Form.Label>
                            </Col>
                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Enter the email"
                                name="Email"
                                value={values.Email}
                                onChange={handleChange}
                                isInvalid={!!errors.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
                                isValid={touched.Email}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>
                        {/*Password*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Password</Form.Label>
                            </Col>
                            <Col xl={8}>
                              <Form.Control
                                type="password"
                                placeholder="Enter the password here"
                                name="Password"
                                value={values.Password}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Password ? changePasswordValidate(false) : changePasswordValidate(true)
                                }
                                isValid={touched.Password}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Password}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>
                        {/*Bank Branch*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationBankbranch">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Bank Branch</Form.Label>
                            </Col>
                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Bank Branch"
                                name="Bankbranch"
                                value={values.Bankbranch}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Bankbranch ? changeBankbranchValidate(false) : changeBankbranchValidate(true)
                                }
                                isValid={touched.Bankbranch}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Bankbranch}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>

                        {/*Account Number*/}
                        <Row>
                          <Form.Group className="ProfileDetailsContainer" controlId="validationBankbranch">
                            <Col xl={4}>
                              <Form.Label style={{ fontWeight: 600 }}>Account Number</Form.Label>
                            </Col>
                            <Col xl={8}>
                              <Form.Control
                                type="text"
                                placeholder="Enter Account Number here"
                                name="Bankbranch"
                                value={values.Accountnumber}
                                onChange={handleChange}
                                isInvalid={
                                  !!errors.Accountnumber
                                    ? changeBankbranchValidate(false)
                                    : changeBankbranchValidate(true)
                                }
                                isValid={touched.Accountnumber}
                                onBlur={handleBlur}
                              />
                              <Form.Control.Feedback type="invalid">{errors.Accountnumber}</Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </Row>

                        <Row>
                          {isEditing && (
                            <Button
                              name="Save Changes"
                              onClick={() => {
                                if (
                                  gradeValidate &&
                                  fistNameValidate &&
                                  lastNameValidate &&
                                  emailValidate &&
                                  passwordValidate &&
                                  BankbranchValidate
                                ) {
                                  setPageStage(2);
                                }
                              }}
                              onClickCapture={() => {
                                validateField('Grade');
                                validateField('Firstname');
                                validateField('Lastname');
                                validateField('Email');
                                validateField('Password');
                                validateField('Bankbranch');
                              }}
                            />
                          )}
                        </Row>
                      </Form>
                    </Row>
                  )}
                </Formik>
              </div>
            </Col>

            {/*<div className="ProfileButton">*/}
            {/*  <Button name="Save Changes"/>*/}
            {/*</div>*/}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TeacherProfile;

// import React, { useEffect, useState } from 'react';
// import { Alert, Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// import { useAuth0 } from '@auth0/auth0-react';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { BsPencilSquare } from 'react-icons/bs';
// import axios from 'axios';

// const schema = yup.object().shape({
//   InstituteName: yup
//     .string()
//     .required()
//     .label('Institute Name'),
//   OwnerName: yup
//     .string()
//     .required()
//     .label('Owner Name'),
//   Location: yup.string().required(),
//   Email: yup
//     .string()
//     .email()
//     .required(),
//   Description: yup.string().required(),
//   Address: yup.string().required(),
//   Mobile_Number: yup
//     .string()
//     .required()
//     .label('Mobile Number')
//     .matches(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
//       'Entered mobile number is invalid'
//     ),
//   AccountName: yup
//     .string()
//     .label("Account Holder's Name")
//     .required(),
//   BankName: yup
//     .string()
//     .label('Bank Name')
//     .required(),
//   BranchName: yup
//     .string()
//     .label('Branch Name')
//     .required(),
//   AccountNo: yup
//     .string()
//     .label('Account Number')
//     .required(),
// });

// const initialState = {
//   InstituteName: 'Sigma Institute',
//   OwnerName: 'Avishka Hettarachchi',
//   Location: 'Malabe',
//   Email: 'sigmainst@gmail.com',
//   Mobile_Number: '0771234567',
//   Description:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   Address: 'Malebe, Colombo 07',
//   AccountName: 'Avishka Hettarachchi',
//   BankName: 'Bank OF Ceylon',
//   BranchName: 'Malabe',
//   AccountNo: '6612345678',
// };

// const TeacherProfile = () => {
//   const { user } = useAuth0(),
//     [instituteNameValidate, setInstituteNameValidate] = useState(false),
//     [ownerNameValidate, setOwnerNameValidate] = useState(false),
//     [locationValidate, setLocationValidate] = useState(false),
//     [emailValidate, setEmailValidate] = useState(false),
//     [descriptionValidate, setDescriptionValidate] = useState(false),
//     [addressValidate, setAddressValidate] = useState(false),
//     [mobileValidate, setMobileValidate] = useState(false),
//     [accountNameValidate, setAccountNameValidate] = useState(false),
//     [bankNameValidate, setBankNameValidate] = useState(false),
//     [branchNameValidate, setBranchNameValidate] = useState(false),
//     [accountNoValidate, setAccountNoValidate] = useState(false),
//     changeInstituteNameValidate = (status: boolean): boolean => {
//       if (status) {
//         setInstituteNameValidate(true);
//         return false;
//       } else {
//         setInstituteNameValidate(false);
//         return true;
//       }
//     },
//     changeOwnerNameValidate = (status: boolean): boolean => {
//       if (status) {
//         setOwnerNameValidate(true);
//         return false;
//       } else {
//         setOwnerNameValidate(false);
//         return true;
//       }
//     },
//     changeLocationValidate = (status: boolean): boolean => {
//       if (status) {
//         setLocationValidate(true);
//         return false;
//       } else {
//         setLocationValidate(false);
//         return true;
//       }
//     },
//     changeEmailValidate = (status: boolean): boolean => {
//       if (status) {
//         setEmailValidate(true);
//         return false;
//       } else {
//         setEmailValidate(false);
//         return true;
//       }
//     },
//     changeDescriptionValidate = (status: boolean): boolean => {
//       if (status) {
//         setDescriptionValidate(true);
//         return false;
//       } else {
//         setDescriptionValidate(false);
//         return true;
//       }
//     },
//     changeAddressValidate = (status: boolean): boolean => {
//       if (status) {
//         setAddressValidate(true);
//         return false;
//       } else {
//         setAddressValidate(false);
//         return true;
//       }
//     },
//     changeMobileValidate = (status: boolean): boolean => {
//       if (status) {
//         setMobileValidate(true);
//         return false;
//       } else {
//         setMobileValidate(false);
//         return true;
//       }
//     },
//     changeAccountNameValidate = (status: boolean): boolean => {
//       if (status) {
//         setAccountNameValidate(true);
//         return false;
//       } else {
//         setAccountNameValidate(false);
//         return true;
//       }
//     },
//     changeBankNameValidate = (status: boolean): boolean => {
//       if (status) {
//         setBankNameValidate(true);
//         return false;
//       } else {
//         setBankNameValidate(false);
//         return true;
//       }
//     },
//     changeBranchNameValidate = (status: boolean): boolean => {
//       if (status) {
//         setBranchNameValidate(true);
//         return false;
//       } else {
//         setBranchNameValidate(false);
//         return true;
//       }
//     },
//     changeAccountNoValidate = (status: boolean): boolean => {
//       if (status) {
//         setAccountNoValidate(true);
//         return false;
//       } else {
//         setAccountNoValidate(false);
//         return true;
//       }
//     };

//   const [enableEditProfile, setEnableEditProfile] = useState(true);
//   const [passwordMail, setPasswordMail] = useState(null);
//   const [isEditProfile, setIsEditProfile] = useState(false);
//   useEffect(() => {
//     if (user?.family_name === 'institute') {
//       setIsEditProfile(true);
//     }
//   }, []);

//   const changePassword = () => {
//     const options = {
//       method: 'POST',
//       url: 'https://learningsl.us.auth0.com/dbconnections/change_password',
//       headers: { 'content-type': 'application/json' },
//       data: {
//         client_id: 'MfDW7eqZ6yFDxDukb3rINlB0269uTekx',
//         email: user?.email,
//         connection: 'Username-Password-Authentication',
//       },
//     };
//     // @ts-ignore
//     axios.request(options)
//       .then(function(response) {
//         console.log('Success');
//         // @ts-ignore
//         return setPasswordMail('success');
//       })
//       .catch(function(error) {
//         console.log(error.message);
//         return setPasswordMail(error.message);
//       });
//   };

//   return (

//       <Col lg={12} className="px-lg-5">
//         <Row className="d-lg-flex flex-lg-column align-items-center text-lg-center">
//           <Col lg={12} md={12} xs={12}>
//             <h1 className="text-lg-start header my-lg-3 text-md-center text-center">Manage Profile</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={3} className="d-flex flex-column justify-content-center align-items-center">
//             <img src={user?.picture} className="w-100" style={{ borderRadius: '50%' }} />

//             {passwordMail === 'success' && (
//               <Alert variant="success" className="p-1 mt-2">
//                 {' '}
//                 Check email and reset the password
//               </Alert>
//             )}
//           </Col>
//           <Col className="px-lg-5">
//             <Formik validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
//               {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
//                 <Row className="pb-md-0 pb-4">
//                   <Form noValidate onSubmit={handleSubmit}>
//                     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
//                       <Tab eventKey="profile" title="Profile Details">
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationInstituteName">
//                               <Form.Label style={{ fontWeight: 600 }}>Institute Name</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter institute's name"
//                                 name="InstituteName"
//                                 value={values.InstituteName}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.InstituteName
//                                     ? changeInstituteNameValidate(false)
//                                     : changeInstituteNameValidate(true)
//                                 }
//                                 isValid={touched.InstituteName}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.InstituteName}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationEmail">
//                               <Form.Label style={{ fontWeight: 600 }}>Institute's email</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter institute's email"
//                                 name="Email"
//                                 value={values.Email}
//                                 onChange={handleChange}
//                                 isInvalid={!!errors.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
//                                 isValid={touched.Email}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationOwnerName">
//                               <Form.Label style={{ fontWeight: 600 }}>Owner's name</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter owner's name"
//                                 name="OwnerName"
//                                 value={values.OwnerName}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.OwnerName ? changeOwnerNameValidate(false) : changeOwnerNameValidate(true)
//                                 }
//                                 isValid={touched.OwnerName}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.OwnerName}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationLocation">
//                               <Form.Label style={{ fontWeight: 600 }}>Location</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter location"
//                                 name="Location"
//                                 value={values.Location}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.Location ? changeLocationValidate(false) : changeLocationValidate(true)
//                                 }
//                                 isValid={touched.Location}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.Location}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                       </Tab>
//                       <Tab eventKey="description" title="Description">
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3">
//                           <Col lg={10} md={12} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationMobile">
//                               <Form.Label style={{ fontWeight: 600 }}>Mobile Number</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter mobile number in format: 0771234567"
//                                 name="Mobile"
//                                 value={values.Mobile_Number}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.Mobile_Number ? changeMobileValidate(false) : changeMobileValidate(true)
//                                 }
//                                 isValid={touched.Mobile_Number}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.Mobile_Number}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3">
//                           <Col lg={10} md={12} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationAddress">
//                               <Form.Label style={{ fontWeight: 600 }}>Institute's Address</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter institute's address "
//                                 name="Address"
//                                 value={values.Address}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.Address ? changeAddressValidate(false) : changeAddressValidate(true)
//                                 }
//                                 isValid={touched.Address}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.Address}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3">
//                           <Col lg={10} md={12} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationDescription">
//                               <Form.Label style={{ fontWeight: 600 }}>Description</Form.Label>
//                               <Form.Control
//                                 as="textarea"
//                                 placeholder="Enter a description for the institute in order to describe
//                                                                             the institute"
//                                 rows={4}
//                                 name="Description"
//                                 value={values.Description}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.Description
//                                     ? changeDescriptionValidate(false)
//                                     : changeDescriptionValidate(true)
//                                 }
//                                 isValid={touched.Description}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.Description}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                       </Tab>
//                       <Tab eventKey="bankdetails" title="Bank Details">
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3">
//                           <Col lg={10} md={12} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationAccountName">
//                               <Form.Label style={{ fontWeight: 600 }}>Account Holder's Name</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter account holder's name"
//                                 name="AccountName"
//                                 value={values.AccountName}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.AccountName
//                                     ? changeAccountNameValidate(false)
//                                     : changeAccountNameValidate(true)
//                                 }
//                                 isValid={touched.AccountName}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.AccountName}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationBankName">
//                               <Form.Label style={{ fontWeight: 600 }}>Bank Name</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter bank name"
//                                 name="BankName"
//                                 value={values.BankName}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.BankName ? changeBankNameValidate(false) : changeBankNameValidate(true)
//                                 }
//                                 isValid={touched.BankName}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.BankName}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                           <Col lg={10} md={6} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationBranchName">
//                               <Form.Label style={{ fontWeight: 600 }}>Branch Name</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter branch name"
//                                 name="BranchName"
//                                 value={values.BranchName}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.BranchName ? changeBranchNameValidate(false) : changeBranchNameValidate(true)
//                                 }
//                                 isValid={touched.BranchName}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.BranchName}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                         <Row className="mt-lg-0 pe-lg-4 mt-md-3">
//                           <Col lg={10} md={12} sm={12} xs={12}>
//                             <Form.Group className="mb-2" controlId="validationAccountNo">
//                               <Form.Label style={{ fontWeight: 600 }}>Account Number</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 placeholder="Enter account number"
//                                 name="AccountNo"
//                                 value={values.AccountNo}
//                                 onChange={handleChange}
//                                 isInvalid={
//                                   !!errors.AccountNo ? changeAccountNoValidate(false) : changeAccountNoValidate(true)
//                                 }
//                                 isValid={touched.AccountNo}
//                                 onBlur={handleBlur}
//                                 disabled={enableEditProfile}
//                               />
//                               <Form.Control.Feedback type="invalid">{errors.AccountNo}</Form.Control.Feedback>
//                             </Form.Group>
//                           </Col>
//                         </Row>
//                       </Tab>
//                     </Tabs>
//                     {isEditProfile && (
//                       <Row className="ms-1 mt-2 pe-lg-4">
//                         <Col lg={10}>
//                           {enableEditProfile ? (
//                             <Button
//                               className="mt-4 px-3 profile-edit-btn"
//                               style={{ width: 'fit-content', borderRadius: '15px' }}
//                               variant="outline-secondary"
//                               onClick={() => {
//                                 setEnableEditProfile(false);
//                                 console.log(enableEditProfile);
//                               }}
//                             >
//                               <BsPencilSquare style={{ marginRight: '10px' }} />
//                               Edit Profile
//                             </Button>
//                           ) : (
//                             <>
//                               <Button
//                                 className="mt-4 ms-2 profile-edit-btn"
//                                 style={{ width: 'fit-content', borderRadius: '15px' }}
//                                 variant="outline-secondary"
//                               >
//                                 Update Profile
//                               </Button>
//                               {/* <Button
//                                 className="mt-4 ms-3 profile-edit-btn"
//                                 style={{ width: 'fit-content', borderRadius: '15px' }}
//                                 variant="outline-secondary"
//                                 onClick={changePassword}
//                               >
//                                 Change Password
//                               </Button> */}
//                             </>
//                           )}
//                         </Col>
//                       </Row>
//                     )}
//                   </Form>
//                 </Row>
//               )}
//             </Formik>
//           </Col>
//         </Row>
//       </Col>

//   );
// };

// export default TeacherProfile;
