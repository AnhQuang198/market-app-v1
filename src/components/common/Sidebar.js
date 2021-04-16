import React, { Component } from 'react';

import SimpleBar from "simplebar-react";

import SidebarContent from "./SidebarContent";

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        {this.props.type !== "condensed" ? (
                            <SimpleBar style={{ maxHeight: "100%" }}>
                                <SidebarContent />
                            </SimpleBar>
                        ) : <SidebarContent />}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;