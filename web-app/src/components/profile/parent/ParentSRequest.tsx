import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {FaEye} from "react-icons/fa";
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {BsCheckCircleFill} from "react-icons/bs";
// @ts-ignore
import swal from "@sweetalert/with-react";
import Loader from "../../utils/Loader";

type UpComing = {
    id: number;
    name: string;
    class: string;
    month: string;
    payment: number;
    date: string;
    attendTime: string;
    leaveTime: string;
    classStartTime: string;
    classEndTime: string;
};

const ParentSRequest: React.FC = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
    const [acceptRequest, setAcceptRequest] = useState<any[]>([]);
        const [unenrollRequest, setUnenrollRequest] = useState<any[]>([]);
    const {user} = useAuth0();
    const user_id = user?.sub;
    const [isDataLoading, setIsDataLoading] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios
          .get(
            `https://learnxy.azurewebsites.net/parent/parentCourseRequest/${user_id}`
          )
          .then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            // console.log(res.data)
            res.data.map((item: any) => {
              console.log(res.data);
              // @ts-ignore
              setAcceptRequest((prevState) => [
                ...prevState,
                {
                  subject: item.course.subject,
                  teacher_name:
                    item.course.teacher.title +
                    " " +
                    item.course.teacher.first_name +
                    " " +
                    item.course.teacher.last_name,
                  course_id: item.course_id,
                },
              ]);

              setIsDataLoading(true);
            });
          })
          .catch((error: any) => {
            console.log(error.message);
          });

        axios
          .get(
            `https://learnxy.azurewebsites.net/parent/parentCourseUnenroll/${user_id}`
          )
          .then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            // console.log(res.data)
            res.data.map((item: any) => {
              console.log(res.data);
              // @ts-ignore
              setUnenrollRequest((prevState) => [
                ...prevState,
                {
                  subject: item.course.subject,
                  teacher_name:
                    item.course.teacher.title +
                    " " +
                    item.course.teacher.first_name +
                    " " +
                    item.course.teacher.last_name,
                  course_id: item.course_id,
                },
              ]);

              setIsDataLoading(true);
            });
          })
          .catch((error: any) => {
            console.log(error.message);
          });    
    }, []);

    const navigate = useNavigate();
    const acceptEnrollRequest = (row:any) => {
        swal({
            title: "Course Enroll Approve",
            text: `Do you really want to accept ${row.subject} course by ${row.teacher_name}?`,
            icon: "info",
            buttons: {
                cancel: true,
                confirm: {
                    value: "confirm"
                }
            },
            // dangerMode: true,
        })
            .then((value: any) => {
                switch (value) {
                    case "confirm" :{
                        console.log("Call")
                        setIsLoading(true);
                        const apiData = JSON.stringify({
                          course_id: `${row.course_id}`,
                          user_id: `${user_id}`,
                        });
                        axios({
                          method: "POST",
                          url: "https://learnxy.azurewebsites.net/parent/acceptCourse",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          data: apiData,
                        })
                          .then((apiRes) => {
                            console.log(apiRes.status);
                            if (apiRes.status === 200) {
                              setIsLoading(false);
                              swal(
                                `Poof! You have successfully approved ${row.subject}`,
                                {
                                  icon: "success",
                                }
                              );
                              const newRequestArray = acceptRequest.filter(
                                (request) => row.course_id !== request.course_id
                              );
                              setAcceptRequest(newRequestArray);
                            }
                          })
                          .catch((error) => {
                            console.log(error.message);
                          });
                    }
                }
                

            })
    }

    const rejectEnrollRequest = (row: any) => {
      swal({
        title: "Course Reject Approve",
        text: `Do you really want to reject ${row.subject} course by ${row.teacher_name}?`,
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            value: "confirm",
          },
        },
        // dangerMode: true,
      }).then((value: any) => {
        switch (value) {
          case "confirm": {
            console.log("Call");
            setIsLoading(true);
            const apiData = JSON.stringify({
              course_id: `${row.course_id}`,
              user_id: `${user_id}`,
            });
            axios({
              method: "POST",
              url: "https://learnxy.azurewebsites.net/parent/rejectCourse",
              headers: {
                "Content-Type": "application/json",
              },
              data: apiData,
            })
              .then((apiRes) => {
                console.log(apiRes.status);
                if (apiRes.status === 200) {
                  setIsLoading(false);
                  swal(`Poof! You have successfully rejected ${row.subject}`, {
                    icon: "success",
                  });
                  const newRequestArray = acceptRequest.filter(
                    (request) => row.course_id !== request.course_id
                  );
                  setAcceptRequest(newRequestArray);
                }
              })
              .catch((error) => {
                console.log(error.message);
              });
          }
        }
      });
    };
    
const acceptUnEnrollRequest = (row: any) => {
  swal({
    title: "Course Unenroll Approve",
    text: `Do you really want to accept ${row.subject} course by ${row.teacher_name}?`,
    icon: "info",
    buttons: {
      cancel: true,
      confirm: {
        value: "confirm",
      },
    },
    // dangerMode: true,
  }).then((value: any) => {
    switch (value) {
      case "confirm": {
        console.log("Call");
        setIsLoading(true);
        const apiData = JSON.stringify({
          course_id: `${row.course_id}`,
          user_id: `${user_id}`,
        });
        axios({
          method: "POST",
          url: "https://learnxy.azurewebsites.net/parent/acceptUnenrollCourse",
          headers: {
            "Content-Type": "application/json",
          },
          data: apiData,
        })
          .then((apiRes) => {
            console.log(apiRes.status);
            if (apiRes.status === 200) {
              setIsLoading(false);
              swal(`Poof! You have successfully approved ${row.subject}`, {
                icon: "success",
              });
              const newRequestArray = acceptRequest.filter(
                (request) => row.course_id !== request.course_id
              );
              setUnenrollRequest(newRequestArray);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    }
  });
};

const rejectUnEnrollRequest = (row: any) => {
  swal({
    title: "Course Unenroll Reject",
    text: `Do you really want to reject ${row.subject} course by ${row.teacher_name}?`,
    icon: "warning",
    buttons: {
      cancel: true,
      confirm: {
        value: "confirm",
      },
    },
    // dangerMode: true,
  }).then((value: any) => {
    switch (value) {
      case "confirm": {
        console.log("Call");
        setIsLoading(true);
        const apiData = JSON.stringify({
          course_id: `${row.course_id}`,
          user_id: `${user_id}`,
        });
        axios({
          method: "POST",
          url: "https://learnxy.azurewebsites.net/parent/rejectUnenrollCourse",
          headers: {
            "Content-Type": "application/json",
          },
          data: apiData,
        })
          .then((apiRes) => {
            console.log(apiRes.status);
            if (apiRes.status === 200) {
              setIsLoading(false);
              swal(`Poof! You have successfully rejected ${row.subject}`, {
                icon: "success",
              });
              const newRequestArray = acceptRequest.filter(
                (request) => row.course_id !== request.course_id
              );
              setUnenrollRequest(newRequestArray);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    }
  });
};


    // @ts-ignore
    return (
      <ParentLayout>
        <Col lg={12} className="px-lg-5">
          <Row className="d-lg-flex flex-lg-column align-items-center text-lg-center">
            <Col lg={12} md={12} xs={12}>
              <h1 className="text-lg-start header my-lg-3 text-md-center text-center">
                Student Requests
              </h1>
            </Col>
          </Row>
          <Row>
            <Tabs
              defaultActiveKey="enrollrequest"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="enrollrequest" title="Enroll Requests">
                <div className="enrollrequest">
                  {isLoading && <Loader />}
                  {!isDataLoading && <Loader />}
                  {acceptRequest.map((item) => {
                    return (
                      <Row className="studentrequest">
                        <Col xl={3} className="cardheader">
                          {item.subject}
                        </Col>
                        <Col xl={4} className="cardheader">
                          {item.teacher_name}
                        </Col>
                        <Col xl={1}>
                          <button
                            className="icon"
                            onClick={() =>
                              navigate(`/parent/course/${item.course_id}`)
                            }
                          >
                            <FaEye />
                          </button>
                        </Col>
                        <Col xl={2}>
                          <button
                            className="btn accept"
                            onClick={() => acceptEnrollRequest(item)}
                          >
                            Accept
                          </button>
                        </Col>
                        <Col xl={2}>
                          <button
                            className="btn"
                            onClick={() => rejectEnrollRequest(item)}
                          >
                            Reject
                          </button>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Tab>
              <Tab eventKey="unenrollrequest" title="Unenroll Requests">
                <div className="unenrollrequest">
                  {isLoading && <Loader />}
                  {!isDataLoading && <Loader />}
                  {unenrollRequest.map((item) => {
                    return (
                      <Row className="studentrequest">
                        <Col xl={3} className="cardheader">
                          {item.subject}
                        </Col>
                        <Col xl={4} className="cardheader">
                          {item.teacher_name}
                        </Col>
                        <Col xl={1}>
                          <button
                            className="icon"
                            onClick={() =>
                              navigate(`/parent/course/${item.course_id}`)
                            }
                          >
                            <FaEye />
                          </button>
                        </Col>
                        <Col xl={2}>
                          <button
                            className="btn accept"
                            onClick={() => acceptUnEnrollRequest(item)}
                          >
                            Accept
                          </button>
                        </Col>
                        <Col xl={2}>
                          <button
                            className="btn"
                            onClick={() => rejectUnEnrollRequest(item)}
                          >
                            Reject
                          </button>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </ParentLayout>
    );

};

export default ParentSRequest;
