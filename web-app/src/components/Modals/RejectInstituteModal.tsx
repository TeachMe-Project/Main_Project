import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function
    RejectInstituteModal(props: any) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Institute Application Rejection
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure that you want to reject this institute's application?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className={"AcceptBtn"} onClick={props.onHide}>Yes</Button>
            </Modal.Footer>
        </Modal>

    );
}

