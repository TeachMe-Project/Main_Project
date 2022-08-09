import React, { useState } from 'react';
// import Path from 'path';
import { Form, Row, Col } from 'react-bootstrap';
import { ButtonCommon } from '../Button/ButtonCommon';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob-notes';

const storageConfigured = isStorageConfigured();

const AzureCloudStorage = (): JSX.Element => {
  // all blobs in container
  const [blobList, setBlobList] = useState<string[]>([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (event: any) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploaded(false);
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
    // await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setUploaded(true);
    setInputKey(Math.random().toString(36));
  };

  const blobItem = blobList[0];

  // display form
  const DisplayForm = () => (
    <div>
      <Row>
        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
          <Col xl={4}>
            <Form.Label style={{ fontWeight: 600 }}>Upload File</Form.Label>
          </Col>
          <Col xl={8}>
            <Form.Control
              type="file"
              placeholder="Notes"
              name="fileupload"
              accept="application/pdf"
              onChange={onFileChange}
            />
          </Col>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
          <Col xl={4}>
            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
          </Col>
          <Col xl={8} style={{ margin: '0 108px' }}>
            <div className="Buttonforsubmit">
              <ButtonCommon name={'Submit'} onClick={onFileUpload} />
            </div>
          </Col>
        </Form.Group>
      </Row>
    </div>
  );

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div className="ProfileImg">
      <h6>Container items</h6>
      <ul>
        {blobList.map(item => {
          return (
            <li key={item}>
              <div>
                {/* {Path.basename(item)} */}
                {/* {Path.basename(blobItem)} */}
                {/* <br /> */}
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div>
      {/* <h1>Upload file to Azure Blob Storage</h1> */}
      {/* {storageConfigured && <div>Storage is configured.</div>} */}
      {/* {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()} */}
      {/* <hr /> */}
      {!storageConfigured && <div>Storage is not configured.</div>}
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      {storageConfigured && uploaded && <div>Successfully uploaded. Go back to page</div>}
    </div>
  );
};

export default AzureCloudStorage;
