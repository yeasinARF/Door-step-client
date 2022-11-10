import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='py-4'>
            <h1 className='pb-4 fw-bold text-center text-white'>Get Some Knowledge</h1>
            <Accordion className="mt-5" defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                    <Accordion.Body>
                        SQL is the programming language used to interface with relational
                        databases. (Relational databases model data as records in rows and
                        tables with logical links between them). NoSQL is a class of DBMs
                        that are non-relational and generally do not use SQL.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        What is JWT, and how does it work?
                    </Accordion.Header>
                    <Accordion.Body>
                        What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                        standard (RFC 7519) for securely transmitting information between
                        parties as JSON object. It is compact, readable and digitally signed
                        using a private key/ or a public key pair by the Identity
                        Provider(IdP)
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a simple programming language that can be used with
                        any browser that has the JavaScript Engine installed. Node. js, on
                        the other hand, is an interpreter or execution environment for the
                        JavaScript programming language
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Header>
                    <Accordion.Body>
                        How NodeJS handle multiple client requests? NodeJS receives multiple
                        client requests and places them into EventQueue. NodeJS is built
                        with the concept of event-driven architecture. NodeJS has its own
                        EventLoop which is an infinite loop that receives requests and
                        processes them.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;