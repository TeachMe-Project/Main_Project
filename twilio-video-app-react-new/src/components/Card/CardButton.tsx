import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type CardButton = {
  btnname?: string;
  id?:string;
};

export const CardButton: React.FC<CardButton> = props => {
  const navigate = useNavigate();
  const id=props.id;

  return (
    <button className="CardButton" onClick={() => navigate('./twilio/'+ id )}>
      {props.btnname}
    </button>
  );
};
export default CardButton;
