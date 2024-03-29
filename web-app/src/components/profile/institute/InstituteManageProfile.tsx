import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import InstituteLayout from "./InstituteLayout";
import {useAuth0} from "@auth0/auth0-react";
import {Formik} from "formik";
import * as yup from "yup";
import {BsPencilSquare} from "react-icons/bs";
import axios, {AxiosResponse} from "axios";
import Loader from "../../utils/Loader";
import {storage} from "../../utils/fireBaseConfig";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
// @ts-ignore
import {v4 as uuidv4} from "uuid"
import {AiOutlinePlusCircle} from "react-icons/ai";

const schema = yup.object().shape({
    InstituteName: yup.string().required().label('Institute Name'),
    OwnerName: yup.string().required().label('Owner Name'),
    Location: yup.string().required(),
    Email: yup.string().email().required(),
    Description: yup.string().required(),
    Address: yup.string().required(),
    Mobile_Number: yup.string().required().label("Mobile Number").matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
        "Entered mobile number is invalid"),
    AccountName: yup.string().label("Account Holder's Name").required(),
    BankName: yup.string().label("Bank Name").required(),
    BranchName: yup.string().label("Branch Name").required(),
    AccountNo: yup.string().label("Account Number").required()
});

type initialStateType = {
    InstituteName: string,
    OwnerName: string,
    Location: string,
    Email: string,
    Mobile_Number: string,
    Description: string,
    Address: string,
    AccountName: string,
    BankName: string,
    BranchName: string,
    AccountNo: string

}

const InstituteManageProfile = () => {

    const {user} = useAuth0(), [instituteNameValidate, setInstituteNameValidate] = useState(false), [ownerNameValidate, setOwnerNameValidate] = useState(false), [locationValidate, setLocationValidate] = useState(false), [emailValidate, setEmailValidate] = useState(false), [descriptionValidate, setDescriptionValidate] = useState(false), [addressValidate, setAddressValidate] = useState(false), [mobileValidate, setMobileValidate] = useState(false), [accountNameValidate, setAccountNameValidate] = useState(false), [bankNameValidate, setBankNameValidate] = useState(false), [branchNameValidate, setBranchNameValidate] = useState(false), [accountNoValidate, setAccountNoValidate] = useState(false),
        changeInstituteNameValidate = (status: boolean): boolean => {
            if (status) {
                setInstituteNameValidate(true);
                return false
            } else {
                setInstituteNameValidate(false);
                return true
            }
        }, changeOwnerNameValidate = (status: boolean): boolean => {
            if (status) {
                setOwnerNameValidate(true);
                return false
            } else {
                setOwnerNameValidate(false);
                return true
            }
        }, changeLocationValidate = (status: boolean): boolean => {
            if (status) {
                setLocationValidate(true);
                return false
            } else {
                setLocationValidate(false);
                return true
            }
        }, changeEmailValidate = (status: boolean): boolean => {
            if (status) {
                setEmailValidate(true);
                return false
            } else {
                setEmailValidate(false);
                return true
            }
        }, changeDescriptionValidate = (status: boolean): boolean => {
            if (status) {
                setDescriptionValidate(true);
                return false
            } else {
                setDescriptionValidate(false);
                return true
            }
        }, changeAddressValidate = (status: boolean): boolean => {
            if (status) {
                setAddressValidate(true);
                return false
            } else {
                setAddressValidate(false);
                return true
            }
        }, changeMobileValidate = (status: boolean): boolean => {
            if (status) {
                setMobileValidate(true);
                return false
            } else {
                setMobileValidate(false);
                return true
            }
        }, changeAccountNameValidate = (status: boolean): boolean => {
            if (status) {
                setAccountNameValidate(true);
                return false
            } else {
                setAccountNameValidate(false);
                return true
            }
        }, changeBankNameValidate = (status: boolean): boolean => {
            if (status) {
                setBankNameValidate(true);
                return false
            } else {
                setBankNameValidate(false);
                return true
            }
        }, changeBranchNameValidate = (status: boolean): boolean => {
            if (status) {
                setBranchNameValidate(true);
                return false
            } else {
                setBranchNameValidate(false);
                return true
            }
        }, changeAccountNoValidate = (status: boolean): boolean => {
            if (status) {
                setAccountNoValidate(true);
                return false
            } else {
                setAccountNoValidate(false);
                return true
            }
        };

    const [enableEditProfile, setEnableEditProfile] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [initialState, setInitialState] = useState<initialStateType>({
        InstituteName: '',
        OwnerName: '',
        Location: '',
        Email: '',
        Mobile_Number: '',
        Description: '',
        Address: '',
        AccountName: '',
        BankName: '',
        BranchName: '',
        AccountNo: ''
    });


    useEffect(() => {
        if (user?.family_name === "institute") {
            setIsEditProfile(true);
        }
        axios({
            method: "GET",
            url: `https://learnxy.azurewebsites.net/institute/${user?.sub}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res: AxiosResponse) => {
            console.log(res.data[0].institute_name)
            setInitialState({
                InstituteName: res.data[0].institute_name,
                AccountName: res.data[0].account_name,
                AccountNo: res.data[0].account_no,
                Address: res.data[0].address,
                BankName: res.data[0].bank_name,
                BranchName: res.data[0].branch_name,
                Description: res.data[0].description,
                Email: res.data[0].user.username,
                Location: res.data[0].location,
                Mobile_Number: res.data[0].contact_no,
                OwnerName: res.data[0].owner_name
            })
            setProfileImage(res.data[0].user.profile_image)
            console.log(profileImage)
            if (res.status === 200) {
                console.log(initialState)
                setIsDataLoading(true);
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }, []);


    const changePassword = () => {
        const options = {
            method: 'POST',
            url: "https://learningsl.us.auth0.com/dbconnections/change_password",
            headers: {'content-type': 'application/json'},
            data: {
                client_id: 'MfDW7eqZ6yFDxDukb3rINlB0269uTekx',
                email: user?.email,
                connection: "Username-Password-Authentication"
            }
        };
        axios.request(options).then(function (response) {
            console.log("Success")
            // @ts-ignore
            return setPasswordMail("success");
        }).catch(function (error) {
            console.log(error.message)
            return setPasswordMail(error.message);
        });
    }

    const handleOnSubmit = (values: { InstituteName: any; OwnerName: any; Location: any; Email?: string; Mobile_Number: any; Description: any; Address: any; AccountName: any; BankName: any; BranchName: any; AccountNo: any; }) => {
        setLoading(true)
        const apiData = JSON.stringify({
            "user_id": `${user?.sub}`,
            "institute_name": `${values.InstituteName}`,
            "owner_name": `${values.OwnerName}`,
            "location": `${values.Location}`,
            "address": `${values.Address}`,
            "contact_no": `${values.Mobile_Number}`,
            "description": `${values.Description}`,
            "account_name": `${values.AccountName}`,
            "account_no": `${values.AccountNo}`,
            "bank_name": `${values.BankName}`,
            "branch_name": `${values.BranchName}`
        })

        axios({
            method: "POST",
            url: "https://learnxy.azurewebsites.net/institute/updateInstituteDetails",
            headers: {
                'Content-Type': 'application/json'
            },
            data: apiData
        }).then((apiRes) => {
            console.log(apiData)
            console.log("Api user created")
            console.log(apiRes.status);
            if (apiRes.status === 200) {
                setLoading(false);
                setIsEditProfile(false);
            }
        }).catch((error) => {
            console.log(error.message)
        })

    }

    const [file, setFile] = useState<any>(null);
    const [progress, setProgress] = useState(0);
    const [profileImage, setProfileImage] = useState("");
    const hiddenFileInput = useRef(null);

    const uploadFile = (event: any) => {
        setProfileImage(URL.createObjectURL(event));
        console.log(event.name)
        console.log("Commng")
        const fileRef = ref(storage, `/Qualification/${event.name + uuidv4()}`);
        const uploadTask = uploadBytesResumable(fileRef, event);
        uploadTask.on("state_changed", (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog)
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {

                    const user_id = user?.sub;

                    const data = JSON.stringify({
                        "user_id": `${user_id}`,
                        "image_url": `${url}`
                    })

                    axios({
                        method: "POST",
                        url: "https://learnxy.azurewebsites.net/user/changeImage",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: data
                    }).then((apiRes) => {
                        console.log(apiRes)
                    }).catch((error) => {
                        console.log(error.message)
                    })

                })
            }
        )
    }


    return (
        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Manage Profile
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className='d-flex flex-column justify-content-center align-items-center'>
                        {isDataLoading &&
                        <img src={profileImage} style={{borderRadius: "50%", width: "300px", height: "300px"}}/>}
                        {
                            !enableEditProfile && (
                                <>
                                    <input type="file" accept=".png, .jpg" style={{display: "none"}}
                                           ref={hiddenFileInput}
                                           onChange={(event: any) => uploadFile(event.target.files[0])}/>
                                    <Button variant='outline-secondary' onClick={(event) => { // @ts-ignore
                                        hiddenFileInput.current.click()
                                    }}><AiOutlinePlusCircle/></Button>
                                </>
                            )
                        }
                        {passwordMail === "success" &&
                        <Alert variant="success" className="p-1 mt-2"> Check email and reset the password</Alert>
                        }

                    </Col>
                    <Col className='px-lg-5'>
                        {!isDataLoading && <Loader/>}
                        {loading && <Loader/>}
                        {isDataLoading && <Formik
                            validationSchema={schema}
                            onSubmit={console.log}
                            initialValues={initialState}
                        >
                            {({
                                  handleSubmit,
                                  handleChange,
                                  handleBlur,
                                  values,
                                  touched,
                                  errors,
                                  validateField,

                              }) => (
                                <Row className="pb-md-0 pb-4">
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Tabs
                                            defaultActiveKey="profile"
                                            id="uncontrolled-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="profile" title="Profile Details">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2"
                                                                    controlId="validationInstituteName">
                                                            <Form.Label style={{fontWeight: 600}}>Institute
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's name"
                                                                name="InstituteName"
                                                                value={values.InstituteName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.InstituteName ? changeInstituteNameValidate(false) : changeInstituteNameValidate(true)}
                                                                isValid={touched.InstituteName}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.InstituteName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationEmail">
                                                            <Form.Label style={{fontWeight: 600}}>Institute's
                                                                email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's email"
                                                                name="Email"
                                                                value={values.Email}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
                                                                isValid={touched.Email}
                                                                onBlur={handleBlur}
                                                                disabled={true}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Email}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationOwnerName">
                                                            <Form.Label style={{fontWeight: 600}}>Owner's
                                                                name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter owner's name"
                                                                name="OwnerName"
                                                                value={values.OwnerName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.OwnerName ? changeOwnerNameValidate(false) : changeOwnerNameValidate(true)}
                                                                isValid={touched.OwnerName}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.OwnerName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationLocation">
                                                            <Form.Label style={{fontWeight: 600}}>Location</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter location"
                                                                name="Location"
                                                                value={values.Location}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Location ? changeLocationValidate(false) : changeLocationValidate(true)}
                                                                isValid={touched.Location}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Location}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="description" title="Description">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationMobile">
                                                            <Form.Label style={{fontWeight: 600}}>Mobile
                                                                Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter mobile number in format: 0771234567"
                                                                name="Mobile_Number"
                                                                value={values.Mobile_Number}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Mobile_Number ? changeMobileValidate(false) : changeMobileValidate(true)}
                                                                isValid={touched.Mobile_Number}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Mobile_Number}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2"
                                                                    controlId="validationAddress">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Institute's
                                                                Address</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's address "
                                                                name="Address"
                                                                value={values.Address}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Address ? changeAddressValidate(false) : changeAddressValidate(true)}
                                                                isValid={touched.Address}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Address}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationDescription">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Description</Form.Label>
                                                            <Form.Control as="textarea"
                                                                          placeholder="Enter a description for the institute in order to describe
                                                                            the institute"
                                                                          rows={4}
                                                                          name="Description"
                                                                          value={values.Description}
                                                                          onChange={handleChange}
                                                                          isInvalid={!!errors.Description ? changeDescriptionValidate(false) : changeDescriptionValidate(true)}
                                                                          isValid={touched.Description}
                                                                          onBlur={handleBlur}
                                                                          disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Description}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="bankdetails" title="Bank Details">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationAccountName">
                                                            <Form.Label style={{fontWeight: 600}}>Account Holder's
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter account holder's name"
                                                                name="AccountName"
                                                                value={values.AccountName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.AccountName ? changeAccountNameValidate(false) : changeAccountNameValidate(true)}
                                                                isValid={touched.AccountName}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.AccountName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationBankName">
                                                            <Form.Label style={{fontWeight: 600}}>Bank Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter bank name"
                                                                name="BankName"
                                                                value={values.BankName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.BankName ? changeBankNameValidate(false) : changeBankNameValidate(true)}
                                                                isValid={touched.BankName}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.BankName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationBranchName">
                                                            <Form.Label style={{fontWeight: 600}}>Branch
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter branch name"
                                                                name="BranchName"
                                                                value={values.BranchName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.BranchName ? changeBranchNameValidate(false) : changeBranchNameValidate(true)}
                                                                isValid={touched.BranchName}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.BranchName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationAccountNo">
                                                            <Form.Label style={{fontWeight: 600}}>Account
                                                                Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter account number"
                                                                name="AccountNo"
                                                                value={values.AccountNo}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.AccountNo ? changeAccountNoValidate(false) : changeAccountNoValidate(true)}
                                                                isValid={touched.AccountNo}
                                                                onBlur={handleBlur}
                                                                disabled={enableEditProfile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.AccountNo}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                        </Tabs>
                                        {isEditProfile &&
                                        <Row className='ms-1 mt-2 pe-lg-4'>
                                            <Col lg={10}>
                                                {enableEditProfile ?
                                                    <Button className="mt-4 px-3 profile-edit-btn"
                                                            style={{width: "fit-content", borderRadius: "15px"}}
                                                            variant="outline-secondary"
                                                            onClick={() => {
                                                                setEnableEditProfile(false);
                                                                console.log(enableEditProfile);
                                                            }}>
                                                        <BsPencilSquare style={{marginRight: "10px"}}/>Edit
                                                        Profile</Button>
                                                    : (
                                                        <>
                                                            <Button className='mt-4 ms-2 profile-edit-btn'
                                                                    style={{width: "fit-content", borderRadius: "15px"}}
                                                                    variant='outline-secondary'
                                                                    onClick={() => handleOnSubmit(values)}>Update
                                                                Profile</Button>
                                                            <Button className='mt-4 ms-3 profile-edit-btn'
                                                                    style={{width: "fit-content", borderRadius: "15px"}}
                                                                    variant='outline-secondary'
                                                                    onClick={changePassword}>Change Password</Button>
                                                        </>)
                                                }

                                            </Col>
                                        </Row>}
                                    </Form>
                                </Row>)}
                        </Formik>}
                    </Col>
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteManageProfile;

