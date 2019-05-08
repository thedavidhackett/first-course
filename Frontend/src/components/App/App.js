import React, { Component } from 'react';
import ProfilePage from '../ProfilePage';
import SocialFeedPage from '../SocialFeedPage';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="dark" fixed="top" dark expand="md">
            <NavbarBrand href="/">First Course</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/social">Social</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={ProfilePage} />
          <Route path="/social" component={SocialFeedPage} />
        </div>
      </Router>
    );
  }
}

export default App;
