import React from "react";
import { MDBDataTable, MDBTable } from "mdbreact";
import  {x} from './MockData'

const ExistingTutorsPage = () => {
  const data = {
    columns: [
      {
        label: "Tutor Id",
        field: "id",
        sort: "asc",
        width: 120,
      },
      {
        label: "Username",
        field: "username",
        sort: "asc",
        width: 270,
      },
      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Contact No",
        field: "contact_no",
        sort: "asc",
        width: 100,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 100,
      },
      {
        label: "",
        field: "btn",
        sort: "asc",
        width: 100,
      },
    ],
    rows:x.map(e=>({...e,btn:<button >Button</button>})),
  };

  return (
    <MDBDataTable
      className="text-center"
      theaderColor="primary-color"
      tbodyColor="secondary-color"
      searching={true}
      data={data}
      hover
      noBottomColumns
    />
  );
};

export default ExistingTutorsPage;

