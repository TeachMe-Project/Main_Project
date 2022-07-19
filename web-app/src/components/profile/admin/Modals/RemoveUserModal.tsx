import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function
    RemoveUserModal(props:any) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User Removal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Do you really want to remove this user?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className={"AcceptBtn"} onClick={props.onHide}>Yes</Button>
            </Modal.Footer>
        </Modal>

    );
}

