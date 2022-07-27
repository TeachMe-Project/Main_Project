import * as React from "react";

import { Button } from "react-bootstrap";

function SubmitButton() {
  return (
    <Button
      type="button"
      className="submitbtn btn btn-info btn-sm w-100"
      style={{ marginTop: "2rem" }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
