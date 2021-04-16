import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from "reactstrap";
import ProfileMenu from "../ProfileMenu";
import Notification from "../Notification";

import { Link } from "react-router-dom";
import logosmdark from "../../assets/images/logo-sm-dark.png";
import logodark from "../../assets/images/logo-dark.png";
import logosmlight from "../../assets/images/logo-sm-light.png";
import logolight from "../../assets/images/logo-light.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.props.toggleMenuCallback();
    }

    render() {
        return (
            <React.Fragment>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <Link to="#" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src={logosmdark} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logodark} alt="" height="20" />
                                    </span>
                                </Link>
                                <Link to="#" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src={logosmlight} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logolight} alt="" height="20" />
                                    </span>
                                </Link>
                            </div>
                            {/* <Button size="sm" color="none" type="button" className="px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                                <i className="ri-menu-2-line align-middle"></i>
                            </Button> */}
                            <Form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <Input type="text" className="form-control" placeholder="placeholder" />
                                    <span className="ri-search-line"></span>
                                </div>
                            </Form>
                        </div>

                        <div className="d-flex">
                            <div className="dropdown d-inline-block d-lg-none ml-2">
                                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown">
                                    <i className="ri-search-line"></i>
                                </button>
                                <div
                                    aria-labelledby="page-header-search-dropdown">
                                    <Form className="p-3">
                                        <FormGroup className="m-0">
                                            <InputGroup>
                                                <Input type="text" className="form-control" placeholder="aaaa" />
                                                <InputGroupAddon addonType="append">
                                                    <Button color="primary" type="submit"><i className="ri-search-line"></i></Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                            <Notification />

                            <ProfileMenu />
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;