import React, { Component } from 'react';
import { Row, Col, Alert, Button, Container, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { nonAuthorizedPOST } from '../../Base';

class VerifyOTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            type: this.props.otpType,
            isLoading: false,
            count: 0,
            isShow: false,
            verifyState: true
        }
    }

    handleChangeOtp = (event) => {
        this.setState({ otp: event.target.value });
    }

    verifyOtp = () => {
        try {
            this.setState({ isLoading: true })
            const requestUrl = "/v1/auth/verify-otp";
            const data = {
                email: this.props.location.state.email,
                otp: this.state.otp
            }
            console.log(data);
            const result = nonAuthorizedPOST(requestUrl, data);
            if (result.status === 200) {
                this.setState({ isLoading: false })
            } else {
                this.setState({ isLoading: false, verifyState: false })
            }
        } catch (e) {
            console.log(e);
        }
    }

    reSendOTP = () => {
        var counter = 15;
        this.sendOtpSever();
        const countDown = setInterval(() => {
            counter--
            this.setState({ count: counter, isShow: true })
            if (counter === 0) {
                clearInterval(countDown)
                this.setState({ isShow: false })
            }
        }, 1000)
    }

    sendOtpSever() {
        const requestUrl = "/v1/auth/send-otp";
        const otpDTO = {
            email: this.props.location.state.email,
            type: this.props.location.state.type
        }
        nonAuthorizedPOST(requestUrl, otpDTO);
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
                                                        {this.state.verifyState ? <Alert color="success" className="mb-4">M?? x??c minh v???a ???????c g???i ?????n email {this.props.location.state.email}. Vui l??ng nh???p v??o ?? d?????i ????y!.</Alert> : 
                                                        <Alert color="danger" className="mb-4">OTP kh??ng ch??nh x??c!.</Alert>}
                                                        <AvForm className="form-horizontal">
                                                            <FormGroup>
                                                                <Label htmlFor="validationOtp">M?? x??c minh:</Label>
                                                                <AvField
                                                                    name="Otp"
                                                                    placeholder="Nh???p m?? x??c minh"
                                                                    type="text"
                                                                    errorMessage="Otp kh??ng ????ng ?????nh d???ng!"
                                                                    className="form-control"
                                                                    value={this.state.otp}
                                                                    onChange={this.handleChangeOtp}
                                                                    validate={{
                                                                        required: { value: true },
                                                                        minLength: { value: 6 },
                                                                        maxLength: { value: 7 }
                                                                    }}
                                                                    id="validationOtp"
                                                                />
                                                            </FormGroup>

                                                            <div className="mt-4 text-center">
                                                                <Button color="primary" className="w-md waves-effect waves-light mr-3" type="submit" onClick={this.reSendOTP} disabled={this.state.isShow}>{this.state.isShow ? "Loading..." : "Send OTP"}{this.state.count > 0 && <span> ({this.state.count})</span>}</Button>
                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={this.verifyOtp}>{this.state.isLoading ? "Loading..." : "Verify"}</Button>
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