import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";

const Head = ({NameManagement, RateManagement}) => {
    return (
        <Navbar className="navbar navbar-light Head navbar-fixed-top" style={{backgroundColor: "#424242"}}>
            <Container>
                <Navbar.Brand style={{color: "whitesmoke"}}> <span className="logo"> The Plateform </span> </Navbar.Brand>
                
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" onChange={(e) => NameManagement(e)} className="me-2" aria-label="Search" />
                </Form>
            </Container>
        </Navbar>
    );
};

export default Head;