import React, {useState} from 'react';
import {Nav, Navbar, Form, NavDropdown, Button} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";

function Navigation({ id }) {
    const [search, setSearch] = useState('');
    let history = useHistory()

    const clickHandler = (e) => {
        history.push(`/chart/${search}`)
    }

    const textHandler = (e) => {
        setSearch(e.target.value)
    }

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            history.push(`/chart/${search}`)
        }
    }
    console.log(search)

    function handleSubmit(e) {
        if (e.target.value !== {id})
            e.preventDefault();
        // console.log(e.target.value);}
    }
let pitbull = 'sk for money, get advice. /n Ask for advice, get money twice.'
    return (
        <div className="">
            <Navbar  bg="dark" variant="dark">
                <Nav className="nav-item mr-auto text-white">
                    <NavLink  className="nav-link text-white" to="/">Home
                        {/*<img  id='home' src="./img/pitbull.png"/>*/}
                       {/* <p>Ask for money, get advice. </p>*/}
                       {/*   <p> Ask for advice, get money twice.</p>*/}
                       {/*</div>*/}
                       {/* /!*Home*!/m/711/2591711-middle.png"/>
                       {/*<div id='pitbull'>*/}
                    </NavLink>
                    <NavLink className="nav-link text-white" to="/Chart">Markets</NavLink>
                    <NavLink className="nav-link text-white" to="/Brokerages">Brokerages</NavLink>
                    <NavLink className="nav-link text-white" to="/ng">Ideas</NavLink>
                    <NavLink className="nav-link text-white" to="/sa">News</NavLink>
                    <Form className='px-2'>
                        <Form.Control className='' type='text' placeholder='Enter Ticker/ Symbol.' onKeyPress={keyPressHandler} onChange={textHandler} onSubmit={handleSubmit}/>
                        {/*type='text' placeholder='Enter Ticker/ Symbol.' onChange={textHandler}*/}
                    </Form>
                    <Button className='px-2' variant='success' type='button' onClick={clickHandler} >Submit</Button>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Politics</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Entertainment</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Lifestyle</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Health</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Others...</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex justify-content-end"  inline> // how to move
                    {/*<Button variant="outline-info">Search</Button>*/}
                </Form>
            </Navbar>
        </div>
    );
}

export default Navigation;
