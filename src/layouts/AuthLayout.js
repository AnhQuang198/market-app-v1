import React, { Component } from 'react';

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Sidebar from "../components/common/Sidebar";
import Loading from "../components/common/Loading";

class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        };
        this.toggleMenuCallback = this.toggleMenuCallback.bind(this);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
    }

    toggleRightSidebar() {
        this.props.toggleRightSidebar();
    }

    capitalizeFirstLetter = string => {
        return string.charAt(1).toUpperCase() + string.slice(2);
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.isPreloader === true) {
                document.getElementById('preloader').style.display = "block";
                document.getElementById('status').style.display = "block";

                setTimeout(function () {

                    document.getElementById('preloader').style.display = "none";
                    document.getElementById('status').style.display = "none";

                }, 2500);
            }
            else {
                document.getElementById('preloader').style.display = "none";
                document.getElementById('status').style.display = "none";
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.leftSideBarTheme) {
            this.props.changeSidebarTheme(this.props.leftSideBarTheme);
        }

        if (this.props.layoutWidth) {
            this.props.changeLayoutWidth(this.props.layoutWidth);
        }

        if (this.props.leftSideBarType) {
            this.props.changeSidebarType(this.props.leftSideBarType);
        }
        if (this.props.topbarTheme) {
            this.props.changeTopbarTheme(this.props.topbarTheme);
        }

        if (this.props.showRightSidebar) {
            this.toggleRightSidebar();
        }
    }
    toggleMenuCallback = () => {
        if (this.props.leftSideBarType === "default") {
            this.props.changeSidebarType("condensed", this.state.isMobile);
        } else if (this.props.leftSideBarType === "condensed") {
            this.props.changeSidebarType("default", this.state.isMobile);
        }
    };

    render() {
        return (
            <React.Fragment>
                <Loading isLoading={false}/>
                <div id="layout-wrapper">
                    <Header toggleMenuCallback={this.toggleMenuCallback} toggleRightSidebar={this.toggleRightSidebar} />
                    <Sidebar
                        theme={this.props.leftSideBarTheme}
                        type={this.props.leftSideBarType}
                        isMobile={this.state.isMobile}
                    />
                    <div className="main-content">
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AuthLayout;