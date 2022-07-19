import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import Details from './Details';
import Notes from './Notes';

import PendingPayments from './PendingPayments';
import PanelContainer from '../../Layout/PanelContainer';
import UploadButton from '../../Button/UploadButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Instituterequest } from './Instituterequest';

function createData(name: string, joineddate: string, courseofferings: string, classdate: string, starttime: string) {
  return { name, joineddate, courseofferings, classdate, starttime };
}

const rows = [
  createData('Sigma Institute', '2022-01-01', 'Mathematics', 'Thursday', '05:00 PM'),
  createData('Sigma Institute', '2022-01-01', 'Mathematics', 'Thursday', '05:00 PM'),
  createData('Sigma Institute', '2022-01-01', 'Mathematics', 'Thursday', '05:00 PM'),
];

export const Institutes = () => {
  return (
    <div className="Notifications">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Institutes</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader"></div>

            <Tabs>
              <div className="Institutes I am working at">
                <Link to="/editdetails" className="link"></Link>

                <TableContainer component={Paper}>
                  <Table size="medium" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Institute Name</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Joined Date</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Course offerings</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Class Date</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Start Time</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.joineddate}</TableCell>
                          <TableCell align="right">{row.courseofferings}</TableCell>
                          <TableCell align="right">{row.classdate}</TableCell>
                          <TableCell align="right">{row.starttime}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="New Institute Requests">
                <Link className="link" to="/uploadnotes"></Link>
                <br />
                <Instituterequest name="Syzygy Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Institutes;
