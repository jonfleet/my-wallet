import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import "../css/sidebar.css";

class Sidebar extends Component {
  state = {
    items: [
      // {_id: 1, name: "Dashboard", path: "/main/dashboard", icon: faChartBar},
      { _id: 2, name: "Reports", path: "/main/report", icon: faTable },
      { _id: 3, name: "New Expense", path: "/main/expense", icon: faReceipt },
      { _id: 4, name: "Budgets", path: "/main/budget", icon: faChartPie },
    ],
    showMenu: true,
  };

  toggleList = () => {
    let showMenu = this.state.showMenu;
    showMenu = !showMenu;
    this.setState({ showMenu });
  };

  resizeWindow = () => {
    this.setState({ showMenu: true });
  };

  render() {
    const { items, showMenu } = this.state;

    window.addEventListener("resize", this.resizeWindow);

    let className = "";
    className += !showMenu ? "sidebar-menu-disabled" : "sidebar-menu-enabled";
    return (
      <div className="bg-light mw-25 border-radius">
        <nav className="d-md-block bg-light">
          <div className="sidebar-sticky pt-0">
            <ul className="nav flex-column">
              <div className="text-center chevron-size">
                <div
                  onClick={this.toggleList}
                  className="sidebar-menu-responsive text-left pl-2"
                >
                  {showMenu ? (
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronCircleUp} />
                  )}
                </div>
              </div>
              <div className={className}>
                {items.map((item) => (
                  <li key={item._id} className="nav-item">
                    <NavLink
                      className="sidebar nav-link text-secondary"
                      to={item.path}
                    >
                      <div className="row pl-0">
                        <div className="col-1">
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div className="col" style={{ fontWeight: 600 }}>
                          {item.name}
                        </div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </div>
              <div className=""></div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
