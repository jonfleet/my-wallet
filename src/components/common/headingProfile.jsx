import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../../css/heading.css";

class HeadingProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="heading-menu-responsive">
        {!user && (
          <React.Fragment>
            <NavLink className="navbar-brand ml-auto" to="/login">
              <h6>Login</h6>
            </NavLink>
            <NavLink className="navbar-brand" to="/sign-up">
              <h6>Register</h6>
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <NavLink className="navbar-brand ml-auto" to="/main/report">
              <h6>{user.username}</h6>
            </NavLink>
            <NavLink
              className="navbar-brand"
              to="/logout"
              onClick={this.signOut}
            >
              <h6>Sign Out</h6>
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default HeadingProfile;
