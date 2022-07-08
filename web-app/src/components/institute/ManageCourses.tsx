import React from "react";
import { MDBDataTable, MDBTable } from "mdbreact";
import  {course} from './ManageCourseMockData'

const btn= () => <button className="btn btn-primary">Add</button>; 
const ManageCourses = () => {
  const data = {
    columns: [
      {
        label: "Course Id",
        field: "course_id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Grade",
        field: "grade",
        sort: "asc",
        width: 150,
      },
      {
        label: "Subject",
        field: "subject_name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Tutor Name",
        field: "teacher_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "",
        field: "btn",
        sort: "asc",
        width: 50,
      },
      
    ],
    rows:course.map(e=>({...e,btn:<button >View Details</button>})),
  };

  return (
    <MDBDataTable
      className="text-center"
      searching={true}
      data={data}
      hover
      bordered
      noBottomColumns
    />
  );
};

export default ManageCourses;

