import * as React from "react";

type RequestCardDetails = {
  details?: string;
};

export const RequestCardDetails: React.FC<RequestCardDetails> = (props) => {
  return <div className="RequestCardDetails">{props.details}</div>;
};
export default RequestCardDetails;
