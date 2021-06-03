import React from 'react';
import {Col, Row} from "react-bootstrap";
import Sidebar from "./Sidebar"
import HomeCharts from "./HomeCharts";

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
        </Row>

    );
}

export default Home;
