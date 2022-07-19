import * as React from "react";

type RequestCardButton = {
  requestbtnname?: string;
};

export const RequestCardButton: React.FC<RequestCardButton> = (props) => {
  return <div className=" RequestCardButton">{props.requestbtnname}</div>;
};
export default RequestCardButton;
