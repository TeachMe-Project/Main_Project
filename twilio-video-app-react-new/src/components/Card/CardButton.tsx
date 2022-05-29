import * as React from "react";

type CardButton = {
  btnname?: string;
}

export const CardButton :React.FC<CardButton>= (props) => {
  return (
    <div className='CardButton'>
         {props.btnname}
    </div>
  )
}
export default CardButton;
