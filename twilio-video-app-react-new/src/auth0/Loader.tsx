import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: '48vh', left: '48vw', zIndex: '1', width: 'fit-content' }}>
      <ThreeDots height="100" width="100" radius="15" color="#007dfe " ariaLabel="three-dots-loading" visible={true} />
    </div>
  );
};

export default Loader;
