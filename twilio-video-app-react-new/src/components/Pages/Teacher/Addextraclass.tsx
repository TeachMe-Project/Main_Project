import * as React from 'react';

import { Row, Col, Container, Accordion, Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UploadButton from '../../Button/UploadButton';
import SubmitButton from '../../Button/SubmitButton';

export const Addextraclass = () => {
  return (
    //
    <Row>
      <div className="PanelHeader">
        <h2>Add Extra Class</h2>
      </div>
      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Topic" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Start time</Form.Label>
            <Form.Control type="text" placeholder="Start time" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="Duration" />
          </Form.Group>

          <SubmitButton />
        </Form>
      </Container>
    </Row>
  );
};
export default Addextraclass;
