import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBTooltip
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
class Appbar extends Component {
  state = {
    isOpen: false,
    isLoggedIn: true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let publiclinks = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Login">
            <MDBNavLink to="/login">
              <MDBIcon icon="sign-in-alt" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Register">
            <MDBNavLink to="/register">
              <MDBIcon icon="user-plus" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Developers">
            <MDBNavLink to="/developers">
              <MDBIcon icon="users" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>

        {/* <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <span className="mr-2">Dropdown</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="#!">Action</MDBDropdownItem>
              <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
              <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem> */}
      </MDBNavbarNav>
    );
    let privatelinks = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Home">
            <MDBNavLink to="/Dashboard">
              <MDBIcon icon="newspaper" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <span className="mr-2">
                <MDBIcon icon="user-circle" />
              </span>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
              <MDBDropdownItem href="/logout">Logout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Friends">
            <MDBNavLink to="/friends">
              <MDBIcon icon="user-friends" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
        <MDBNavItem>
          <MDBTooltip
            placement="bottom"
            tag="div"
            tooltipContent="Notification"
          >
            <MDBNavLink to="/notification">
              <MDBIcon icon="bell" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
        <MDBNavItem>
          <MDBTooltip placement="bottom" tag="div" tooltipContent="Messages">
            <MDBNavLink to="/chats">
              <MDBIcon icon="comment" />
            </MDBNavLink>
          </MDBTooltip>
        </MDBNavItem>
      </MDBNavbarNav>
    );
    return (
      <Router>
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {this.state.isLoggedIn ? privatelinks : publiclinks}
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Appbar;
