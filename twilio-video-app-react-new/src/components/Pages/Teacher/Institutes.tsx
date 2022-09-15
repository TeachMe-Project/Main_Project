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
  const baseURLCurrent = `https://learnx.azurewebsites.net/teacher/teacherInstitutes/${teacherAuthId}`;
  const baseURLNew = `https://learnx.azurewebsites.net/teacher/teacherPendingInstitutes/${teacherAuthId}`;
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
              url: `https://learnx.azurewebsites.net/teacher/acceptInstituteRequest/${teacherAuthId}`,
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
                      {/*amc: Institute Manage Courses*/}
                      <th className="imc-first-th">Institute ID</th>
                      <th className="imc-second-th">Institute Name</th>
                      <th className="imc-second-th">Contact Number</th>
                      <th className="imc-last-th"></th>

                      {/* <th className="imc-last-th"></th> */}
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
                            <div className="ViewMore">
                              <Link to="" className="link ViewMoreBtn">
                                <CardButton btnname={"View More"} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                      <td data-label="Institute ID :">10000102345</td>
                      <td data-label="Institute Name :">Sigma Institute</td>
                      <td data-label="Contact Number :">011 2536472</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102355</td>
                      <td data-label="Institute Name :">Rotary Institute</td>
                      <td data-label="Contact Number :">011 2859684</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102320</td>
                      <td data-label="Institute Name :">Syzygy Institute</td>
                      <td data-label="Contact Number :">011 2772134</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000109945</td>
                      <td data-label="Institute Name :">Montana Institute</td>
                      <td data-label="Contact Number :">011 7234999</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102300</td>
                      <td data-label="Institute Name :">Sasip Institute</td>
                      <td data-label="Contact Number :">033 2999684</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102345</td>
                      <td data-label="Institute Name :">Shakthi</td>
                      <td data-label="Contact Number :">011 2859684</td>
                      <td data-label="Contact Number :">
                        <div className="ViewMore">
                          <Link to="" className="link ViewMoreBtn">
                            <CardButton btnname={'View More'} />
                          </Link>
                        </div>
                      </td>
                    </tr> */}
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
                            <div className="ViewMore">
                              <Link to="" className="link ViewMoreBtn">
                                <CardButton btnname="View More" />
                              </Link>
                            </div>
                          </Col>

                          <Col xl={1}>
                            {/* <Link to="" className=" link SubscribeBtn">
                              <CardButton btnname="Accept" />
                            </Link> */}
                            {acceptInstitute(item)}
                          </Col>


                          <Col xl={1}>
                            <Link to="" className=" link SubscribeBtn">
                              <ButtonCommon name="Decline" />
                            </Link>
                          </Col>
                          {/* </InstituteCard> */}
                        </div>
                      );
                    })}
                    {/* <InstituteCard
                      institutename="Susipwan Institute, Gampaha"
                      image={<img src={'/Images/subjects/Science.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    />

                    <InstituteCard
                      institutename="Shakthi Institute"
                      image={<img src={'/Images/subjects/art.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    />

                    <InstituteCard
                      institutename="Flysky Institute"
                      image={<img src={'/Images/subjects/Mathematics.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    /> */}
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
