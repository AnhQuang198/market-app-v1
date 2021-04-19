import React, { Component } from 'react';
import { Row, Col, Button, Alert, Container, Label, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import { nonAuthorizedPOST } from '../../Base';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            regState: true,
            msgError: '',
            isLoading: false
        }
    }

    componentDidMount() {
        document.body.classList.add("auth-body-bg");
    }

    register = async () => {
        try {
            this.setState({ isLoading: true })
            const data = {
                "name": this.state.name,
                "username": this.state.username,
                "password": this.state.password
            }
            const requestUrl = "/v1/auth/register";
            const result = await nonAuthorizedPOST(requestUrl, data);
            if (result.status === 200) {
                this.setState({ regState: true, isLoading: false })
            } else {
                this.setState({ regState: false, msgError: result.message, isLoading: false })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
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

                                                    {!this.state.regState ? <Alert color="danger">{this.state.msgError}</Alert> : null}

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
                                                                    value={this.state.name}
                                                                    onChange={this.handleChangeName}
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
                                                                    value={this.state.username}
                                                                    onChange={this.handleChangeUsername}
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
                                                                    value={this.state.password}
                                                                    onChange={this.handleChangePassword}
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 50 }
                                                                    }}
                                                                    id="validationPassword"
                                                                />
                                                            </FormGroup>

                                                            <div className="text-center">
                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={this.register} disabled={this.state.isLoading}>{this.state.isLoading ? "Loading ..." : "Register"}</Button>
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <p className="mb-0">By registering you agree to the Nazox <Link to="#" className="text-primary">Terms of Use</Link></p>
                                                            </div>
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Already have an account ? <Link to="/login" className="font-weight-medium text-primary"> Login</Link> </p>
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