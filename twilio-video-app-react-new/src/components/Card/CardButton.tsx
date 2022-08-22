import * as React from 'react';

type CardButton = {
  btnname?: string;
};

export const CardButton: React.FC<CardButton> = props => {
  return <button className="CardButton">{props.btnname}</button>;
};
export default CardButton;
