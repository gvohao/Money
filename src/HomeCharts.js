import React from 'react';
import {Row} from "react-bootstrap";
import American from "./Indice/American";
import China from "./Indice/China";
import Crypto from "./Indice/Crypto";

function HomeCharts({ spy, qqq, btcusd, fxi, ashr }) {
    return (
            <Row className='px-2 mt-5 '>
                <h1 className='px-3'>Indexes</h1>
                <American
                    spy={spy}
                    qqq={qqq}
                />

                <China
                    ashr={ashr}
                    fxi={fxi}
               />

                <Crypto
                    btcusd={btcusd}
               />

            </Row>
    );
}

export default HomeCharts;
