import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import logo from './assets/rc-dev.png';
import './Header.css'
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import Posts from "../posts/Posts";
import Users from "../users/Users";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Router>
                <Navbar color="dark" dark expand="md">
                    <Link className="mr-auto" to="/"><img src={logo} alt="Logo"
                                                                            width="auto"
                                                                            height="70"/></Link>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!collapsed} navbar className="d-md-inline-flex justify-content-center mr-md-5">
                        <Nav navbar>
                            <NavItem>
                                <Link className="link" to="/users">Users</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="link" to="/posts">Posts</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Posts />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Header;
