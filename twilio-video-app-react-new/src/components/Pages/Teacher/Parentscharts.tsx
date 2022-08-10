import * as React from 'react';
import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import Parentsaveragetimechart from './Parentaveragetimechart';

export const Parentscharts = () => {
  return (
    <div className="Parentscharts">
      <Container>
        <Row>
          <Col xl={6}>
            <Parentsaveragetimechart />
          </Col>
          <Col xl={6}>
            <div className="chart">
              <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '18rem' }}>
                <div className="card-body">
                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                        Course
                      </h5>
                    </Col>
                    <Col xl={4}>
                      <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                        Student Count
                      </h5>
                    </Col>
                  </div>
                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <p style={{ marginRight: '20px' }}>Mathematics</p>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <center>20</center>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <p style={{ marginRight: '20px' }}>Science</p>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <center>20</center>
                      </p>
                    </Col>
                  </div>
                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <p style={{ marginRight: '20px' }}>Pure Maths Revision</p>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <center>20</center>
                      </p>
                    </Col>
                  </div>
                </div>
              </div>

              {/* <Monthlyattendancechart /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Parentscharts;
