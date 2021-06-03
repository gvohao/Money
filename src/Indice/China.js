import React from 'react';
import {Row, Col} from "react-bootstrap";
import Ashr from "./Ashr";
import Fxi from "./Fxi";

function China({ashr, fxi }) {
    return (
        <div>
            <Row>
                <Col>
                    <h3 className="text-center header mt-3 mb-0">China
                        <img className="CNflag" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-china_1f1e8-1f1f3.png'/></h3>
                </Col>
            </Row>
            <Row >
            <Col className="" md={6}>
                <Ashr ashr={ashr}/>
            </Col>
            <Col className="" md={6}>
                <Fxi fxi={fxi}/>
            </Col>
        </Row>
        </div>

    );
}

export default China;
