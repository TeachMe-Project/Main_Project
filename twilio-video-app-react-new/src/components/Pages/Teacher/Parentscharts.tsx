import * as React from 'react';
import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import Parentsaveragetimechart from './Parentaveragetimechart';

export const Parentscharts = () => {
  return (
    <div className="Parentscharts">
      <Container>
        <div className="PanelHeader">
          <h2>Dashboard</h2>
        </div>
        <Row>
          <Col xl={6}>
            <Parentsaveragetimechart />
          </Col>
          <Col xl={6}>
            <div className="chart">
              <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                <div className="card-body">
                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                        Apps Used
                      </h5>
                    </Col>
                    <Col xl={4}>
                      <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                        Time (Mins)
                      </h5>
                    </Col>
                  </div>
                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <p style={{ marginRight: '20px' }}>
                        <b>MS Office</b>
                      </p>
                    </Col>
                    <Col xl={4}>
                      <p className="text-center">
                        <b>13</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                    <Col xl={8}>
                      <p style={{ marginRight: '20px' }}>
                        <b>MS PowerPoint</b>
                      </p>
                    </Col>
                    <Col xl={4}>
                      <p className="text-center">
                        <b>22</b>
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
