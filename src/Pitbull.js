import React from 'react';
import {Col, Row} from "react-bootstrap";
import img1 from "./img/pitbull.png";

function Pitbull(props) {
    return (
        <div className="pitbullHover">
            <a href="https://www.youtube.com/watch?v=EblrZsko6z8"  rel="noreferrer nofollow" target='_blank' >
                <Row >
                    <Col>
                        <Row>
                            <Col className="pit" sm={3}>
                                <img className="pitbull" src={img1} alt="Mr. Worldwide!"/>
                            </Col>
                            <Col className="advice" md={8}>
                                <p>"Ask for money, get advice.  Ask for advice, get money twice." <br/> -Pitbull 2013</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </a>
        </div>
    );
}

export default Pitbull;
