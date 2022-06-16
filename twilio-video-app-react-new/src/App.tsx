import * as React from "react";
import "../src/Assets/Styles/main.scss";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import MainPanel from "./components/Pages/Student/MainPanel";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import TopNavbar from "./components/Navbars/TopNavbar";

function App() {
    return (

            <div className="App">
                <Row>
                    <TopNavbar />
                </Row>
                <Row>
                    <Col xl={2}>
                        <LeftSidebar />
                    </Col>
                    <Col xl={10}>
                        <MainPanel />
                    </Col>
                </Row>
            </div>

    );
}

export default App;
