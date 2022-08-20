import * as React from 'react';

type Button = {
  name?: string;
};

export const Button: React.FC<Button & any> = props => {
  return (
    <div className="Button" {...props}>
      {props.name}
    </div>
  );
};
export default Button;
