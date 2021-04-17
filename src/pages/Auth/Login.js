import React, { Component } from 'react';
import { Row, Col, Input, Button, Alert, Container, Label, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { nonAuthorizedPOST, saveTokenAuth } from '../../Base';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginState: true,
            msgError: ''
        }
    }

    componentDidMount() {
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    login = async () => {
        try {
            const data = {
                username: this.state.email,
                password: this.state.password
            }
            const reqUrl = "/v1/auth/login";
            const result = await nonAuthorizedPOST(reqUrl, data);
            if (result.status === 200) {
                saveTokenAuth(result.data.token, result.data.refreshToken);
            }else {
                this.setState({
                    loginState: false,
                    msgError: result.message
                })
            }
        } catch (e) {
            console.log(e);
        }
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
                                                        <h4 className="font-size-18 mt-4">Welcome Back !</h4>
                                                        <p className="text-muted">Sign in to continue to Nazox.</p>
                                                    </div>

                                                    {!this.state.loginState ? <Alert color="danger">{this.state.msgError}</Alert> : null}

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal">
                                                            <FormGroup>
                                                                <Label htmlFor="validationUsername">Email:</Label>
                                                                <AvField
                                                                    name="Email"
                                                                    placeholder="Enter email"
                                                                    type="text"
                                                                    errorMessage="Email không đúng định dạng!"
                                                                    className="form-control"
                                                                    value={this.state.username}
                                                                    onChange={this.handleChangeEmail}
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
                                                                    errorMessage="Mật khẩu không đúng định dạng!"
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

                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                                <Label className="custom-control-label" htmlFor="customControlInline">Remember me</Label>
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={this.login}>Log In</Button>
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
                                                            </div>
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Don't have an account ? <Link to="/register" className="font-weight-medium text-primary"> Register </Link> </p>
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

export default Login;