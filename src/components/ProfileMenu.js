import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { authorizedGET, isLogout } from '../Base';
import avatar2 from '../assets/images/users/avatar-2.jpg';

class ProfileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            name: ''
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        try {
            const reqUrl = "/v1/users/_me";
            const result = await authorizedGET(reqUrl);
            if (result.status === 200) {
                let name = result.data.name;
                this.setState({name: name})
            }
        } catch (e) {
            console.log(e);
        }
    }

    logout = async () => {
        try {
            await isLogout();
            window.location.href = "login";
            // this.props.history.push("/login");
        } catch (e) {
            console.log(e);
        }
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block user-dropdown">
                    <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
                        <img className="rounded-circle header-profile-user mr-1" src={avatar2} alt="Header Avatar" />
                        <span className="d-none d-xl-inline-block ml-1 text-transform">{this.state.name}</span>
                        <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="#"><i className="ri-user-line align-middle mr-1"></i> Profile</DropdownItem>
                        <DropdownItem href="#"><i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet</DropdownItem>
                        <DropdownItem className="d-block" href="#"><span className="badge badge-success float-right mt-1">11</span><i className="ri-settings-2-line align-middle mr-1"></i> Setting</DropdownItem>
                        <DropdownItem href="#"><i className="ri-lock-unlock-line align-middle mr-1"></i> Lock Screen</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="text-danger" onClick={this.logout}><i className="ri-shut-down-line align-middle mr-1 text-danger"></i> Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default ProfileMenu;