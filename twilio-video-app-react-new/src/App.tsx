import React from 'react';
import '../src/Assets/Styles/main.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Routings from "./components/Routings/Routings"

import Twilio from './components/Twilio/Twilio';
import TopNavbar from './components/Navbars/TopNavbar';

export default function App() {
  return (
    <div className="App">

          <Twilio />

    </div>
  );
}
