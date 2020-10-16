import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWallet} from "@fortawesome/free-solid-svg-icons"
import Login from "./common/login"

class heading extends Component {
    signOut = () => {
        localStorage.removeItem('jwt')

        window.location = '/main/dashboard'
        // this.props.history.push('/main/dashboard')
    }
    
    render() { 
        return ( 
        <div>
            <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap px-0 shawdow">
                {/* <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Expense Tracker</a> */}
                
                <NavLink className="navbar-brand" to="/main/dashboard">
                    <div className="ml-3">
                        <span className="m-2"><FontAwesomeIcon className="fa" icon={faWallet}/></span>
                        <span className="w-auto"><h3 className="navbar-brand">My Wallet</h3></span>
                    </div>
                </NavLink>
                <NavLink className="navbar-brand ml-auto" to="/login"><h6>Login</h6></NavLink>
                <NavLink className="navbar-brand" to="/main/dashboard"><h6><a onClick={this.signOut}>Sign Out</a></h6></NavLink>
            </nav>
        </div> 
    );
    }
}
 
export default heading;