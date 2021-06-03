import React from 'react';
import {Row, Col} from "react-bootstrap";
import Spy from "./Spy";
import Qqq from "./QQQ";

function American({spy, qqq}) {
    return (
        <div>
        <Row>
            <Col>
                <h3 className="text-center header mb-0">United States
                <img className="USflag" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-united-states_1f1fa-1f1f8.png'/></h3>
            </Col>
        </Row>
    <Row >

        <Col className="" md={6}>
        <Spy spy={spy}/>
        </Col>
        <Col className="" md={6}>
            {/*<h4 className='d-flex justify-content-center'>United States</h4>*/}
            <Qqq qqq={qqq}/>
        </Col>

    </Row>
        </div>
    );
}

export default American;
