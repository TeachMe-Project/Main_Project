import * as React from "react";
import { RequestCardButton } from "./RequestCardButton";
import { RequestCardDetails } from "./RequestCardDetails";
import { RequestCardHeader } from "./RequestCardHeader";


type RequestCard = {
  acceptbtnname?: any;
  rejectbtnname?: any;
  date?: string;
  teacher?: string;
  detail?: string;
  time?: string;
  header?: string;
  amount?: string;
  icon?: any;
  image?: JSX.Element;
};

export const RequestCard: React.FC<RequestCard> = (props) => {
  return (
    <div className="RequestCard">
      <div className="RequestCardImage">{props.image}</div>
      <div className="RequestCardBody">
        <div>
          
          <RequestCardHeader header={props.header} />
        </div>
        <div style={{ width: "30%", display: "flex" }}>
          <RequestCardButton requestbtnname={props.acceptbtnname} />
          <RequestCardButton requestbtnname={props.rejectbtnname} />
        </div>
      </div>
    </div>
  );
};
export default RequestCard;
