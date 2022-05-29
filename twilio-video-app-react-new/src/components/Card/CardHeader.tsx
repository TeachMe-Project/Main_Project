import * as React from "react";

type CardHeader = {
  header?: string;
}

export const CardHeader :React.FC<CardHeader>= (props) => {
  return (
    <div className="CardHeader">
      <h6>
    {props.header}
     </h6>
    </div>
  )
}
export default CardHeader;
