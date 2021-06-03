import React from 'react';
import {Col, Row} from "react-bootstrap";
import Sidebar from "./Sidebar"
import HomeCharts from "./HomeCharts";
import Brokerages from "./brokerages";

function Home({ spy, qqq, btcusd, fxi, ashr }) {

    return (

        <Row>
            <Col md={8}>
            <HomeCharts
                spy={spy}
                qqq={qqq}
                btcusd={btcusd}
                fxi={fxi}
                ashr={ashr}
            />
            </Col>

            <Col md={4}>
                <Sidebar />
            </Col>

            {/*<Col className="" md={4}>*/}
            {/*    <Brokerages />*/}
            {/*</Col>*/}

        </Row>

    );
}

export default Home;
