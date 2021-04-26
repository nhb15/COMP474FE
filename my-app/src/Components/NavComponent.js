import React, { useState, useEffect } from 'react';
import {Navbar,FormControl, Button, Nav, Form, NavLink} from 'react-bootstrap';
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


function NavComponent(props) {
    // const { history } = props;

    const history = useHistory();

    const onSignOut = (e) => {
        e.preventDefault();
        console.log(e);
        window.sessionStorage.clear();
        history.push('/login');
    }

    const role = window.sessionStorage.getItem('role');

    const scheduleButton = (role === 'prof') ? <Nav.Link href='/schedule'>Schedule</Nav.Link> : null;

    const loginButton = window.sessionStorage.getItem('email') ?
        <Button variant="outline-info" onClick={onSignOut}>Logout</Button>:
        <Button variant="outline-info">
            <Nav.Link href='/login'>Login</Nav.Link>
        </Button>;

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">COMP474 Calendar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href='/calendar'>Calendar</Nav.Link>
                {scheduleButton}
            </Nav>
            <Form inline>
                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                {loginButton}
            </Form>
        </Navbar>
    );
}

export default NavComponent;