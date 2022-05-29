import * as React from 'react';
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardDetails } from "../../Card/CardDetails";

type MyRecentCoursesListProps = {
  names:{
    classname:string,
    teachername:string
  }[];
}

export const MyRecentCourses = (props:MyRecentCoursesListProps) => {
  return (
    <div className="MyRecentCourses">
      <Card>
        {props.names.map((name,index) => {
          return (
            <div>
            <div key={index}>
              <CardHeader header={name.classname} />
              <CardDetails details={name.teachername} />
            </div>
         
        <div className="CardImg">
        <img src={require("../../../Assets/Images/testimg1.jpg")} />
        </div>
        <div className="CardContent">
          <CardHeader>Mathematics class</CardHeader>
          <CardDetails>Mr. Lasitha Nuwan</CardDetails>
        </div>
        </div>);
        })}
      </Card>

    </div>
  );
};

export default MyRecentCourses;
