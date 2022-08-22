import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type CardButton = {
  btnname?: string;
};

export const CardButton: React.FC<CardButton> = props => {
  const navigate = useNavigate();

  return (
    <button className="CardButton" onClick={() => navigate('./twilio')}>
      {props.btnname}
    </button>
  );
};
export default CardButton;
