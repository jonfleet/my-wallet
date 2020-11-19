import React, { Component } from 'react';
import {NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'




class Sidebar extends Component {
    state = {
        items: [
            // {_id: 1, name: "Dashboard", path: "/main/dashboard", icon: faChartBar},
            {_id: 2, name: "Reports", path: "/main/report", icon: faTable},
            {_id: 3, name: "Add Expenses", path: "/main/expense", icon: faReceipt},
            {_id: 4, name: "Budgets", path: "/main/budget", icon: faChartPie },
        ]
    }
    render() { 
        const {items} = this.state;
        return (   
            <div className="bg-light w-100">
                <nav className="d-md-block bg-light">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            {items.map((item) => (
                                <li key={item._id} className="nav-item">
                                    <NavLink className="sidebar nav-link text-secondary" to={item.path}>
                                        <div className="row">
                                            <div className="col-1">
                                                <FontAwesomeIcon icon={item.icon} />
                                            </div>
                                            <div className="col" style={{"fontWeight" : 600}}>
                                                {item.name}
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>     
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Sidebar;
