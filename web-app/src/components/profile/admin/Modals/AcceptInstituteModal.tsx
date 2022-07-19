import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AcceptInstituteModal = (props: any) => (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Institute Application Acceptance
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Do you really want to accept this application and join this institute to our platform?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button className={"AcceptBtn"} onClick={props.onHide}>Yes</Button>
        </Modal.Footer>
    </Modal>

);
export default AcceptInstituteModal

