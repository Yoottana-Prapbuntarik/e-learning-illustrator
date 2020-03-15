import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    render() {

        return (
            <React.Fragment>
                <div className={this.state.isOpen ? 'topnav responsive ' : 'topnav'}>
                    <div className="container-body">
                        <div className="menu-grid">
                            <div>
                                <a href className="btn-toggle icon" onClick={this.toggle}>
                                    <FontAwesomeIcon icon={faBars} />
                                </a>
                            </div>
                            <div className="nav-item-link">
                                <NavLink to="/Home" onClick={this.closeNav}>หน้าหลัก</NavLink>
                                <NavLink to="/About" onClick={this.closeNav}>เกี่ยวกับเรา</NavLink>
                                <NavLink to="/Tutorial" onClick={this.closeNav}>วีดีโอสอน</NavLink>
                                <NavLink to="/Quiz" onClick={this.closeNav}>แบบทดสอบหลังเรียน</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default (NavigationBar);