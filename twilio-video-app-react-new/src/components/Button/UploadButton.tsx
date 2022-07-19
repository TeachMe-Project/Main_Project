import * as React from "react";

import { Button } from "react-bootstrap";

function UploadButton() {
  return(
 <Button
            type="button"
            className="uploadbtn btn btn-info btn-sm w-100"
            style={{ marginTop: "2rem" }}
          >
            Upload
        </Button>
  );
}

export default UploadButton;
