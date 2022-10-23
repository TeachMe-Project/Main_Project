import * as React from "react";
import { useEffect, useState } from "react";
import CardDetails from "../../Card/CardDetails";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import PanelContainer from "../../Layout/PanelContainer";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import swal from "@sweetalert/with-react";
import { CardButton } from "../../Card/CardButton";
import { ButtonCommon } from "../../Button/ButtonCommon";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

library.add(fas);

export const Institutes = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate("/");
  };

  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  console.log(teacherAuthId);
  const baseURLCurrent = `https://learnxy.azurewebsites.net/teacher/teacherInstitutes/${teacherAuthId}`;
  const baseURLNew = `https://learnxy.azurewebsites.net/teacher/teacherPendingInstitutes/${teacherAuthId}`;
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [newInstitutes, setNewInstitutes] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURLCurrent)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setInstitutes(prevState => [
            ...prevState,
            {
              id: item.institute_id,
              name: item.institute.institute_name,
              contact: item.institute.contact_no
            }
          ]);
        });
        console.log(institutes);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(baseURLNew)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setNewInstitutes(prevState => [
            ...prevState,
            {
              id: item.institute_id,
              name: item.institute.institute_name
            }
          ]);
        });
        console.log(newInstitutes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const acceptInstitute = (item: any) => (
    <div className="SubscribeBtn Accept">
      <button
        className="CardButton"
        onClick={() => {
          swal({
            title: "Request Acception",
            text: `Do you really want to accept this institute?`,
            icon: "error",
            buttons: {
              cancel: true,
              confirm: true
            }
            // dangerMode: true,
          })
            .then((willDelete: any) => {
              const apiData = JSON.stringify({
                "institute_id": item.id,
                "request_time": new Date(),
              });
              axios({
                method: "POST",
                url: `https://learnxy.azurewebsites.net/teacher/acceptInstituteRequest/${teacherAuthId}`,
                headers: {
                  "Content-Type": "application/json",
                },
                data: apiData,
              }).then((apiRes) => {
                console.log(apiRes.status);
                if (apiRes.status === 200) {
                  swal(`Poof! You have successfully removed ${item.name}`, {
                    icon: "success",
                  });
                }
                console.log(`Successfully removed ${item.name}`);
              }).catch((error) => {
                console.log(error.message);
              }).catch((error) => {
                console.log(error.message);
              });
            });
        }}
      >
        Accept
      </button>
    </div >
  );

  return (
    <div className="Institutes">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Institutes</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader"></div>

            <Tabs>
              <div className="Current Institutes">
                <Link to="/editdetails" className="link"></Link>
                <table className="booking-table" id="view-booking">
                  <thead>
                    <tr className="booking-thead-second-tr" style={{ textAlign: "left" }}>
                      <th className="imc-first-th">Institute ID</th>
                      <th className="imc-second-th">Institute Name</th>
                      <th className="imc-second-th">Contact Number</th>
                      <th className="imc-last-th"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {institutes.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Institute ID :">{item.id}</td>
                          <td data-label="Institute Name :">{item.name}</td>
                          <td data-label="Contact Number :">{item.contact}</td>
                          <td data-label="Contact Number :">
                            <div className="ViewMore ViewMoreBtn">
                              <button className="CardButton" onClick={() => navigate(`/instituteView/${item.id}`)}>
                                View More
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="New Requests">
                <div className="Panel">
                  <div className="PanelBody" style={{ display: "block" }}>
                    {newInstitutes.map((item: any) => {
                      return (
                        <div className="SearchResultCard">
                          <Col xl={2}>
                            <div className="CardImage">
                              <img src="/Images/subjects/science.png" />
                            </div>
                          </Col>

                          <Col xl={2}>
                            <CardDetails details={item.name} />
                          </Col>

                          <Col xl={6}>
                            <div className="ViewMore link ViewMoreBtn">
                              <button className="CardButton" onClick={() => navigate(`/instituteView/${item.id}`)}>
                                View More
                              </button>
                            </div>
                          </Col>

                          <Col xl={1}>
                            {acceptInstitute(item)}
                          </Col>


                          <Col xl={1}>
                            <Link to="" className=" link SubscribeBtn">
                              <ButtonCommon name="Decline" />
                            </Link>
                          </Col>
                        </div>
                      );
                    })}
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

export default Institutes;
