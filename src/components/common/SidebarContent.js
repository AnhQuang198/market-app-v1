import React, { Component } from 'react';
import MetisMenu from "metismenujs";
import { Link } from "react-router-dom";

class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }
        }
    }

    initMenu() {
        new MetisMenu("#side-menu");
    }

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <Link to="/home" className="waves-effect">
                                <i className="ri-dashboard-line"></i><span className="badge badge-pill badge-success float-right">3</span>
                                <span className="ml-1">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/#" className="waves-effect">
                                <i className="ri-eraser-fill"></i>
                                <span className="badge badge-pill badge-danger float-right">6</span>
                                <span className="ml-1">Forms</span>
                            </Link>
                            <ul className="sub-menu">
                                <li><Link to="/#">Elements</Link></li>
                                <li><Link to="/#">Validation</Link></li>
                                <li><Link to="/#">Advanced Plugins</Link></li>
                                <li><Link to="/#">Editors</Link></li>
                                <li><Link to="/#">File Upload</Link></li>
                                <li><Link to="/#">X-editable</Link></li>
                                <li><Link to="/#">Wizard</Link></li>
                                <li><Link to="/#">Mask</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="ri-map-pin-line"></i>
                                <span className="ml-1">Maps</span>
                            </Link>
                            <ul className="sub-menu">
                                <li><Link to="/#">Google Maps</Link></li>
                                <li><Link to="/#">Vector Maps</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="ri-share-line"></i>
                                <span className="ml-1">Multi Level</span>
                            </Link>
                            <ul className="sub-menu">
                                <li><Link to="/#">Level 1.1</Link></li>
                                <li><Link to="/#" className="has-arrow">Level 1.2</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/#">Level 2.1</Link></li>
                                        <li><Link to="/#">Level 2.2'</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default SidebarContent;