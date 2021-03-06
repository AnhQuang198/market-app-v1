import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media } from "reactstrap";
import SimpleBar from "simplebar-react";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }
    
    render() {
        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block">
                    <DropdownToggle tag="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown">
                        <i className="ri-notification-3-line"></i>
                        <span className="noti-dot"></span>
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-menu-lg p-0"
                        aria-labelledby="page-header-notifications-dropdown">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0"> Notifications </h6>
                                </Col>
                                <div className="col-auto">
                                    <Link to="#" className="small"> View All</Link>
                                </div>
                            </Row>
                        </div>
                        <SimpleBar style={{ maxHeight: "230px" }}>
                            <Link to="#" className="text-reset notification-item">
                                <Media>
                                    <div className="avatar-xs mr-3">
                                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                                            <i className="ri-shopping-cart-line"></i>
                                        </span>
                                    </div>
                                    <Media body>
                                        <h6 className="mt-0 mb-1">Your order is placed</h6>
                                        <div className="font-size-12 text-muted">
                                            <p className="mb-1">If several languages coalesce the grammar</p>
                                            <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                        </div>
                                    </Media>
                                </Media>
                            </Link>
                        </SimpleBar>
                        <div className="p-2 border-top">
                            <Link to="#" className="btn btn-sm btn-link font-size-14 btn-block text-center">
                                <i className="mdi mdi-arrow-right-circle mr-1"></i>View More
                            </Link>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default Notification;