import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeadingProfile from "./common/headingProfile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import "../css/heading.css";

class Heading extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = () => {
    let showMenu = this.state.showMenu;
    showMenu = !showMenu;
    console.log(showMenu);
    this.setState({ showMenu });
  };

  resizeWindow = () => {
    this.setState({ showMenu: false });
  };

  render() {
    window.addEventListener("resize", this.resizeWindow);

    const { user } = this.props;
    const { showMenu } = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap px-0 shawdow">
          <NavLink className="navbar-brand" to="/main/report">
            <div className="ml-3">
              <span className="m-2">
                <FontAwesomeIcon className="fa" icon={faWallet} />
              </span>
              <span className="w-auto">
                <h3 className="navbar-brand">My Wallet</h3>
              </span>
            </div>
          </NavLink>

          <button
            onClick={this.toggleMenu}
            className="heading-menu-icon navbar-toggler m-2"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span className="heading-menu-content">
            <HeadingProfile user={user} />
          </span>
        </nav>

        <div
          className={showMenu ? "enabled bg-primary" : "disabled bg-primary"}
          id="responsive_menu"
        >
          <div className="center-right">
            <HeadingProfile user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
