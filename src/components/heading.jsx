import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWallet} from "@fortawesome/free-solid-svg-icons"


class Heading extends Component {
    
    render() { 
        const {user} = this.props
        return ( 
        <div>
            <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap px-0 shawdow">
                
                <NavLink className="navbar-brand" to="/main/report">
                    <div className="ml-3">
                        <span className="m-2">
                            <FontAwesomeIcon 
                                className="fa" 
                                icon={faWallet}
                            />
                        </span>
                        <span className="w-auto">
                            <h3 className="navbar-brand">My Wallet</h3>
                        </span>
                    </div>
                </NavLink>
                {!user && (               
                    <React.Fragment>
                        <NavLink 
                            className="navbar-brand ml-auto" 
                            to="/login"
                            >
                            <h6>Login</h6>
                        </NavLink>
                        <NavLink 
                            className="navbar-brand" 
                            to="/sign-up"
                            >
                            <h6>Register</h6>
                        </NavLink>
                    </React.Fragment>
                )}
                {user && (               
                    <React.Fragment>
                        <NavLink 
                            className="navbar-brand ml-auto" 
                            to="/main/report"
                            >
                            <h6>{user.username}</h6>
                        </NavLink>
                        <NavLink 
                            className="navbar-brand" 
                            to="/logout"
                            onClick={this.signOut}
                            ><h6>Sign Out</h6>
                        </NavLink>
                    </React.Fragment>
                )}
            </nav>
        </div> 
        );
    }
}

export default Heading;
