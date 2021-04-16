import React, { Component } from 'react';
class NonAuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return <React.Fragment>
            {this.props.children}
        </React.Fragment>;
    }
}

export default NonAuthLayout;