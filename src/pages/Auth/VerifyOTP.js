import React, { Component } from 'react';
import { Row, Col, Alert, Button, Container, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { nonAuthorizedPOST } from '../../Base';

class VerifyOTP extends Component {
    constructor(props){
        super(props);
        this.state = {
            otp : '',
            type : this.props.otpType
        }
    }

    verifyOtp = () => {
        const requestUrl = "/v1/auth/verify-otp";
        const data = {
            email: this.props.email,
            otp: this.state.otp
        }
        const result = nonAuthorizedPOST(requestUrl, data);
        if (result.status === 200) {
            this.setState({ isRedirect: true })
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
                                                        <h4 className="font-size-18 mt-4">Reset Password</h4>
                                                        <p className="text-muted">Reset your password to Nazox.</p>
                                                    </div>
                                                    <div className="p-2 mt-5">
                                                        {!this.state.forgetState ? <Alert color="danger" className="mb-4">Email chưa đăng ký tài khoản!.</Alert> : null}

                                                        <AvForm className="form-horizontal">
                                                            <FormGroup>
                                                                <Label htmlFor="validationUsername">Email:</Label>
                                                                <AvField
                                                                    name="Email"
                                                                    placeholder="Enter email"
                                                                    type="text"
                                                                    errorMessage="Email không đúng định dạng!"
                                                                    className="form-control"
                                                                    value={this.state.otp}
                                                                    onChange={this.handleChangeUsername}
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 50 }
                                                                    }}
                                                                    id="validationUsername"
                                                                />
                                                            </FormGroup>

                                                            <div className="mt-4 text-center">
                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={this.verifyOtp}>{this.state.isLoading ? "Loading..." : "Reset"}</Button>
                                                            </div>
                                                        </AvForm>
                                                    </div>
                                                    <div className="mt-5 text-center">
                                                        <p>Don't have an account ? <Link to="/login" className="font-weight-medium text-primary"> Log in </Link> </p>
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

export default VerifyOTP;