import * as React from "react";
import { useState } from "react";
import CardDetails from "../../Card/CardDetails";
import { Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// @ts-ignore
import swal from "@sweetalert/with-react";

type SearchResults = {
  topic?: string;
  date?: string;
};
export const SearchResults: React.FC<SearchResults> = props => {

  const [courses, setCourses] = useState<any>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  const searchCourse = (searchData: String) => {
    setCourses([]);
    const data = JSON.stringify({
      "data": `${searchData}`
    });
    axios({
      method: "POST",
      url: `http://localhost:8081/student/searchCourse`,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    }).then((res: AxiosResponse) => {
      console.log(res.data);
      res.data.map((item: any) => {
        setCourses((prevState: any) => [...prevState, {
          course_id: item.course_id,
          image: "none",
          grade: item.grade,
          subject: item.subject,
          tutor_name: item.teacher.title + " " + item.teacher.first_name + " " + item.teacher.last_name,
          tutor_contact: item.teacher.contact_no,
          price: item.price,
          day: item.day,
          start_time: item.start_time,
          end_time: item.end_time
        }]);

        setIsDataLoading(true);
      });
    });
  };

  const { user } = useAuth0();
  const user_id = user?.sub;

  const handleCourseRequest = (course_id: any, course_name:any) => {
    const data = JSON.stringify({
      "user_id": `${user_id}`,
      "course_id": `${course_id}`
    });
    swal({
      title: "Request Course",
      text: `Do you really want to access this ${course_id}`,
      icon: "info",
      buttons: {
        cancel: true,
        confirm: true
      },
    })
      .then((willDelete: any) => {
        if (willDelete) {
          axios(
            {
              method: "POST",
              url: `http://localhost:8081/student/requestCourse`,
              headers: {
                "Content-Type": "application/json"
              },
              data: data
            }).then((res: AxiosResponse) => {
              console.log(res)
            if (res.data == "Course Already Added") {
              swal({
                title: "Course Added",
                text: `This Course is Already Added`,
                icon: "info",
                buttons: {
                  cancel: true
                },
              })
            }
            else{
              swal({
                title: "Course Added",
                text: `This Course is Added Successfully`,
                icon: "success",
                buttons: {
                  cancel: true
                },
              })
            }
          });
        }
      })
  };


  return (
    <div className="SearchResults">
      <Container>
        <div className="Searchbar">
          <input type="text" placeholder="Search by Course name, Tutor name, Institute, Subject or Grade"
                 onChange={(event) => searchCourse(event.target.value)} />
          <BiSearch className="SearchIcon" onClick={() => searchCourse(searchData)} />
        </div>
        <div className="Panel">
          <div className="PanelTopic">Search Results</div>
          <div className="PanelBody">

            {courses.map((item: any) => {
              return (
                <div className="SearchResultCard">
                  <Col xl={1}>
                    <img className="CardImage" width="50" height="50" src="/Images/subjects/Mathematics.png" />
                  </Col>

                  <Col xl={1} className="me-4">
                    <CardDetails details={item.subject} />
                  </Col>

                  <Col xl={2}>
                    <CardDetails details={item.tutor_name} />
                  </Col>

                  <Col xl={2}>
                    <CardDetails details={item.price} />
                  </Col>
                  <Col xl={2}>
                    <CardDetails details={item.grade} />
                  </Col>
                  <Col xl={2} className="me-4">
                    <div className="ViewMore">
                      <Link to="/courseDetails" className="link ViewMoreBtn">
                        <button className="CardButton" onClick={() => navigate("./twilio")}>
                          View More
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col xl={1}>
                    <div className=" link SubscribeBtn">
                      <button className="CardButton" onClick={() => handleCourseRequest(item.course_id, item.subject)}>
                        Enroll
                      </button>
                    </div>
                  </Col>
                </div>
              );
            })}
            {!isDataLoading &&
            <img width="750" className="mt-2" src="/Images/landingpage.png" />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResults;
