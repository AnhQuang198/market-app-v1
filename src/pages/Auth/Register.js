import React, { Component } from 'react';
import { Row, Col, Button, Alert, Container, Label, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        document.body.classList.add("auth-body-bg");
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Container fluid className="p-0">
                        <Row className="no-gutters">
                            <Col lg={4}>
                                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={9}>
                                                <div>
                                                    <div className="text-center">
                                                        <h4 className="font-size-18 mt-4">Register account</h4>
                                                        <p className="text-muted">Get your free Nazox account now.</p>
                                                    </div>

                                                    {this.props.user && <Alert color="success">Registration Done Successfully.</Alert>}

                                                    {this.props.registrationError && <Alert color="danger">{this.props.registrationError}</Alert>}

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal" >

                                                            <FormGroup>
                                                                <Label htmlFor="validationName">Name:</Label>
                                                                <AvField
                                                                    name="Name"
                                                                    placeholder="Enter name"
                                                                    type="text"
                                                                    errorMessage="Tên không đúng định dạng!"
                                                                    className="form-control"
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 50 }
                                                                    }}
                                                                    id="validationName"
                                                                />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <Label htmlFor="validationUsername">Email:</Label>
                                                                <AvField
                                                                    name="Email"
                                                                    placeholder="Enter email"
                                                                    type="text"
                                                                    errorMessage="Email không đúng định dạng!"
                                                                    className="form-control"
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 50 }
                                                                    }}
                                                                    id="validationUsername"
                                                                />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <Label htmlFor="validationPassword">Password:</Label>
                                                                <AvField
                                                                    name="Password"
                                                                    placeholder="Enter password"
                                                                    type="password"
                                                                    errorMessage="Password không đúng định dạng!"
                                                                    className="form-control"
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 50 }
                                                                    }}
                                                                    id="validationPassword"
                                                                />
                                                            </FormGroup>

                                                            <div className="text-center">
                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit">{this.props.loading ? "Loading ..." : "Register"}</Button>
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <p className="mb-0">By registering you agree to the Nazox <Link to="#" className="text-primary">Terms of Use</Link></p>
                                                            </div>
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Already have an account ? <Link to="/login" className="font-weight-medium text-primary"> Login</Link> </p>
                                                        <p>© 2020 Nazox. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="authentication-bg">
                                    <div className="bg-overlay"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;