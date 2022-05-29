import * as React from "react";

type CardDetails = {
  details?:string
}

export const CardDetails :React.FC<CardDetails>= (props) => {
  return (
    <div className='CardDetails'>
        {props.details}
    </div>
  )
}
export default CardDetails;
