import React from 'react';
import {Col, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function EndowTroll(props) {
    return (
        <div class='brokerages '>
            <h6 class="endowUs d-flex justify-content-center mt-3 display-4">Getting started</h6>
            <div >
                <h5 class="endowusTextHead text-center " >One simple all-in Access Fee</h5>
                <h6 class="endowusTextBody text-center mt-2"> BASED ON ASSETS UNDER ADVICE (AUA), INCLUSIVE OF GST. </h6>
                <h6 class="endowusTextBody text-center mt-2"> EXCLUDES NET FUND-LEVEL FEES FROM 0.10% </h6>
            </div>
            <Row className="mt-3 ">
                <Col className='text-center ' md={4}>
                    <span class="cpf ">CPF</span> <span className="and">&</span> <span className="cpf">SRS</span>
                </Col>
                <Col className='text-secondary ' md={8}>
                    <span class='fortyP'>0.40%</span> flat fees for any amount
                </Col>
                <Col className='text-center mt-3 ' md={4}>
                    <span class="cpf ml-5">Cash</span> <span class="tiered">Tiered. Not stacked.</span>
                </Col>
                <Col className='text-secondary mt-3 ' md={8}>
                    <p className='mt-0 mb-0'><span class='fortyP'>0.60%</span> flat fees for any amount</p>
                    <p className='mt-0 mb-0'><span className='fortyP'>0.50%</span> flat fees for any amount</p>
                    <p className='mt-0 mb-0'><span className='fortyP'>0.35%</span> flat fees for any amount</p>
                    <p className='mt-0 mb-0'><span className='fortyP'>0.25%</span> flat fees for any amount</p>

                </Col>
                <Col className='text-center mt-3 ' md={4}>
                    <span class="cashSmart">Cash Smart</span>
                </Col>
                <Col className='text-secondary mt-3' md={8}>
                    <p className='mt-0 mb-0'><span class='fortyP'>0.60%</span> flat fees for any amount</p>

                </Col>

                <Col className='text-secondary mt-3 ' md={3}>
                    <p className="transparent d-flex justify-content-center">easter egg!!!</p>
                </Col>
                <Col className='text-secondary mt-3 mb-3' md={6}>
                    <Link to="/Brokerages">
                        <Button variant='success' className='d-flex justify-content-center mt-2 ' md={6}>Click to find out more</Button>
                    </Link>
                </Col>

            </Row>
        </div>

    );
}
export default EndowTroll;;
