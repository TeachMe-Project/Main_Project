import * as React from 'react';

import { Row, Col, Container, Accordion, Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UploadButton from '../../Button/UploadButton';

export const Uploadnotes = () => {
  return (
    <Row>
      <div className="PanelHeader">
        <h2>Notes</h2>
      </div>
      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Topic" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" placeholder="Deadline" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label className="form-label" for="customFile">
              Notes File
            </Form.Label>
            <Form.Control type="file" className="form-control" id="customFile" />
          </Form.Group>
          <UploadButton />
        </Form>
      </Container>
    </Row>
  );
};
export default Uploadnotes;
