import * as React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardButton from "./CardButton";
import CardDetails from "./CardDetails";

export const UpcomingCard = () => {
  return (
    <div className="UpcomingCard">
      <Card>
        <CardHeader header="History Class" />
        <CardDetails details="Mr. Kamal Maggona" />
        <div className="CardDetailsRow">
          <CardDetails details="26th April, 2022" />
          <CardDetails details="|" />
          <CardDetails details="04:00pm - 06:00pm" />
        </div>
        <div className="UpcomingCardBtn">
          <CardButton btnname="Join Class" />
        </div>
      </Card>
    </div>
  );
};
export default UpcomingCard;
