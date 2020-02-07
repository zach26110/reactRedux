import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import logo from './assets/rc-dev.png';
import './Header.css'

const Header = params => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand onClick={() => params.setLink('/')} className="mr-auto"><img src={logo} alt="Logo"
                                                                                          width="auto"
                                                                                          height="70"/></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                <Collapse isOpen={!collapsed} navbar className="d-md-inline-flex justify-content-center mr-md-5">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="link" onClick={() => params.setLink('users')}>Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" onClick={() => params.setLink('posts')}>Posts</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
