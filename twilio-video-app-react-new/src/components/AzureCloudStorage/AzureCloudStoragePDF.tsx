import React, { useState } from 'react';
// import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';

const storageConfigured = isStorageConfigured();

const AzureCloudStorage = (): JSX.Element => {
  // all blobs in container
  const [blobList, setBlobList] = useState<string[]>([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (event: any) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };

  const blobItem = blobList[0];

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
      </button>
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
      <hr />
      {!storageConfigured && <div>Storage is not configured.</div>}
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
    </div>
  );
};

export default AzureCloudStorage;
