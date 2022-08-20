import * as React from 'react';

type RequestCardButton = {
  requestbtnname?: string;
};

export const RequestCardButton: React.FC<RequestCardButton> = props => {
  return (
    <div className=" RequestCardButton" style={{ marginLeft: '10px' }}>
      {props.requestbtnname}
    </div>
  );
};
export default RequestCardButton;
