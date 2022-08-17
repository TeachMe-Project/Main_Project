import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';

import { Container, Row, Col } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import PanelContainer from '../../Layout/PanelContainer';
import { CardButton } from '../../Card/CardButton';
import Searchbar from '../../Searchbar/Searchbar';
import Tabs from '../../Tabs/Tabs';
import { Link } from 'react-router-dom';
import SearchResultsTest from '../Teacher/SearchResultsTest';
import { InstituteCard } from '../../Card/InstituteCard';

type FreeCard = {
  topic?: string;
  date?: string;
};
export const FreeCard: React.FC<FreeCard> = props => {
  return (
    <div className="FreeCard">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Free Cards</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <Tabs>
                <div className="Current Free Cards">
                  <table className="booking-table" id="view-booking">
                    <thead>
                      <tr className="booking-thead-second-tr" style={{ textAlign: 'left' }}>
                        <th className="imc-first-th">Course ID</th>
                        <th className="imc-second-th">Course Name</th>
                        <th className="imc-second-th">Student Name</th>
                        <th className="imc-second-th">Grade</th>
                        <th className="imc-last-th"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Course Name :">Mathematics</td>
                        <td data-label="Student Name :">Pasan Gunarathne</td>
                        <td data-label="Grade :">9</td>
                        <td>
                          <div className="ViewMore">
                            <Link to="/studentanalytics" className="link ViewMoreBtn">
                              <CardButton btnname={'View More'} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Course Name :">Mathematics</td>
                        <td data-label="Student Name :">Hiruni Eppawala</td>
                        <td data-label="Grade :">9</td>
                        <td>
                          <div className="ViewMore">
                            <Link to="/studentanalytics" className="link ViewMoreBtn">
                              <CardButton btnname={'View More'} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102390</td>
                        <td data-label="Course Name :">Mathematics</td>
                        <td data-label="Student Name :">Aruna Kumara</td>
                        <td data-label="Grade :">8</td>
                        <td>
                          <div className="ViewMore">
                            <Link to="/studentanalytics" className="link ViewMoreBtn">
                              <CardButton btnname={'View More'} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102390</td>
                        <td data-label="Course Name :">Mathematics</td>
                        <td data-label="Student Name :">Sameera Mohottala</td>
                        <td data-label="Grade :">8</td>
                        <td>
                          <div className="ViewMore">
                            <Link to="/studentanalytics" className="link ViewMoreBtn">
                              <CardButton btnname={'View More'} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102390</td>
                        <td data-label="Course Name :">Mathematics</td>
                        <td data-label="Student Name :">Nimal Gunapala</td>
                        <td data-label="Grade :">8</td>
                        <td>
                          <div className="ViewMore">
                            <Link to="/studentanalytics" className="link ViewMoreBtn">
                              <CardButton btnname={'View More'} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="New Free Cards">
                  <div className="Panel">
                    <div className="PanelBody" style={{ display: 'block' }}>
                      <p className="Warning">Please note that you can only provide 2 more free cards for this month!</p>
                      <SearchResultsTest />
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FreeCard;
