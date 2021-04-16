import React, {Component} from 'react';
import {Navbar,FormControl, Button, Nav, Form, NavLink} from 'react-bootstrap';

class NavComponent extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">COMP474 Calendar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                </Nav>
                <Form inline>
                    {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                    <Button href="/login" variant="outline-info">Login</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavComponent;