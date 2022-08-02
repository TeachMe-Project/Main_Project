import * as React from 'react';

import { Row, Col, Container, Accordion, Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import SubmitButton from '../../Button/SubmitButton';

export const Editdetails = () => {
  return (
    <Row>
      <div className="PanelHeader">
        <h2>Edit Course Details</h2>
      </div>
      <Container>
        <Form>
          <Form.Group controlId="form.Name" className="mb-3">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Topic" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Grade</Form.Label>
            <select className="form-select" aria-label="Default select example">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>

              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>University</option>
              <option>Other</option>
            </select>
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Medium</Form.Label>
            <select className="form-select" aria-label="Default select example">
              <option selected>English</option>
              <option>Sinhala</option>
              <option>Tamil</option>
            </select>
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Start date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>End date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Monthly Fee</Form.Label>
            <Form.Control type="text" placeholder="Monthly Fee" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label className="form-label" for="customFile">
              Course Thumbnail Image
            </Form.Label>
            <Form.Control type="file" className="form-control" id="customFile" />
          </Form.Group>
          <SubmitButton />
        </Form>
      </Container>
    </Row>
  );
};
export default Editdetails;
