import * as React from "react";

type Button = {
name?: string;
}

export const Button :React.FC<Button>= (props) => {
    return (
      <div className='Button'>
           {props.name}
      </div>
    )
  }
  export default Button;