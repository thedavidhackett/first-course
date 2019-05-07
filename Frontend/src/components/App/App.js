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

const david = {
  name: 'David Hackett',
  birthDate: '7/7/1990',
  company: 'MediaCross',
  job: 'Programmer',
  avatar: '',
  posts: [
    {id: 1,
    content: 'Test Post'},
    {id: 2,
    content: 'Another Test Post'}
  ]
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: david,
    }
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link to="/">Home</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/social">Social</Link></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
