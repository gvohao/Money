import React from 'react';
import {Col, Row} from "react-bootstrap";

import Pitbull from "./Pitbull";
import Brokerage from "./Brokerage";

function Brokerages(props) {
    return (
        <Row>

            <Col md={9} className="mt-5" >
                <Brokerage />
            </Col>
            <Col md={3} className="mt-2" > <Pitbull /> </Col>



        </Row>
);
}



export default Brokerages;
