import React from 'react';
import {Row, Col} from "react-bootstrap";
import Btcusd from "./Btcusd";

function Crypto({ btcusd }) {
    return (
        <div>
            <Row>
                <Col>
                    <h3 className="text-center header mt-3 mb-0">Cryptocurrency
                        <img className="BTCflag" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/coin_1fa99.png' alt="BTC"/></h3>
                </Col>
            </Row>
            <Row >
                <Col className="" md={6}>
                    <Btcusd btcusd={btcusd}/>
                </Col>
            </Row>
        </div>
    );
}

export default Crypto;
