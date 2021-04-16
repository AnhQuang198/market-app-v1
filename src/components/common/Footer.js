import React, { Component } from 'react';
import { Row, Col, Container } from "reactstrap";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <Container fluid>
                        <Row>
                            <Col sm={6}>
                                {new Date().getFullYear()} © Anh Quang.
                            </Col>
                            <Col sm={6}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;