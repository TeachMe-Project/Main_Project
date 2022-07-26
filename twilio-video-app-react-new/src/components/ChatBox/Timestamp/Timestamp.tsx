import * as React from 'react';

const Timestamp = ({ value, floatToRight }: { value: string; floatToRight: boolean }) => (
  <div className="timestampDisplay">{value}</div>
);

export default Timestamp;
