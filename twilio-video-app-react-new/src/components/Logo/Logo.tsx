import * as React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/" className="link">
        <img src={'/Images/logo.png'} />
      </Link>
    </div>
  );
};

export default Logo;
