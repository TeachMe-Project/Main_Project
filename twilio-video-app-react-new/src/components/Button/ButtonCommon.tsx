import * as React from 'react';

type ButtonCommon = {
  name?: string;
};

export const ButtonCommon: React.FC<ButtonCommon & any> = props => {
  return (
    <div className="ButtonCommon" {...props}>
      {props.name}
    </div>
  );
};
export default ButtonCommon;
