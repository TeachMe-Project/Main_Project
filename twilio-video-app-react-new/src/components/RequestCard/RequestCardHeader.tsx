import * as React from "react";

type RequestCardHeader = {
  header?: string;
  image?: JSX.Element;
};

export const RequestCardHeader: React.FC<RequestCardHeader> = (props) => {
  return (
    <div className="RequestCardHeader" >
   
      <h6>{props.header}</h6>
    </div>
  );
};
export default RequestCardHeader;
