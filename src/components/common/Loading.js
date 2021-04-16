import React, { Component } from 'react';

class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : this.props.isLoading
        }
    }
    render() {
        return (
            this.state.isLoading === true ? 
            <React.Fragment>
                <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <i className="ri-loader-line spin-icon"></i>
                        </div>
                    </div>
                </div>
            </React.Fragment> : <div></div>
        );
    }
}

export default Loading;