import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import logo from './assets/rc-dev.png';
import './App.css'
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import Data from './data/Data'
const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="App">
            <Router>
                <Navbar color="dark" dark expand="md">
                    <Link className="mr-auto" to="/"><img src={logo} alt="Logo"
                                                          width="auto"
                                                          height="70"/></Link>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!collapsed} navbar className="d-md-inline-flex justify-content-center mr-md-5">
                        <Nav navbar>
                            <NavItem>
                                <Link className="link ml-0 ml-md-3" to="/users">Users</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="link ml-0 ml-md-3" to="/posts">Posts</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path="/posts">
                        <h1 className="mt-5">Posts</h1>
                        <Data page="posts"/>
                    </Route>
                    <Route path="/users">
                        <h1 className="mt-5">Users</h1>
                        <Data page="users"/>
                    </Route>
                    <Route path="/">
                        <h1 className="mt-5">Posts</h1>
                        <Data page="posts"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
