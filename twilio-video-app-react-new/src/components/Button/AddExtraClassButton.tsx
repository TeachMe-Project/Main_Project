import * as React from 'react';

import { Button } from 'react-bootstrap';

function AddExtraClassButton() {
  return (
    <Button type="button" className="submitbtn btn btn-info btn-sm w-100" style={{ marginTop: '2rem' }}>
      Add Extra Class
    </Button>
  );
}

export default AddExtraClassButton;
