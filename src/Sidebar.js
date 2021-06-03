import React from 'react';
import {Card} from "react-bootstrap";
import ReactPlayer from "react-player";
import News from "./News";
import Brokerages from "./brokerages";

function Sidebar(props) {

    return (
        <>
        <News />
        <Brokerages/>
        </>
    );
}

export default Sidebar;
