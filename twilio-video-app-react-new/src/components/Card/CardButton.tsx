import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type CardButton = {
  btnname?: string;
  id?:string;
  class_id?:string;
};

export const CardButton: React.FC<CardButton> = props => {
  const navigate = useNavigate();
  const id=props.id;
  const class_id=props.class_id

  return (
    <button className="CardButton" onClick={() => navigate('./twilio/'+ id+'/'+ class_id )}>
      {props.btnname}
    </button>
  );
};
export default CardButton;
