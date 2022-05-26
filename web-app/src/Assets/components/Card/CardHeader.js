import React from 'react'



export const CardHeader = (props) => {
  return (
    <div className="CardHeader">
      <h6>
    {props.children}
     </h6>
    </div>
  )
}
export default CardHeader;
