import React, {Component} from 'react';
import ProtectedRoute from "./components/common/protectedRoute"
import './App.css';

import {Switch, Route, Redirect} from "react-router-dom"
import auth from "./services/authService"

import Welcome from "./components/welcome"
import Heading from "./components/heading"
import Main from "./components/main"
import Login from "./components/common/loginForm"
import Register from "./components/registerForm"
import Profile from "./components/profile"
import Logout from "./components/logout"

class App extends Component {
 
  componentDidMount () {
    const user = auth.getCurrentUser()
    this.setState({user})  
  }

  render() { 
    const {user} = this.state
    return ( 
    <div>
      <Heading user={user}/>
      
      <Switch>
        {/* <Route path="/" render={ () => <Welcome/>}
        /> */}
        <Route path="/login" component={Login}/>
        <Route path="/sign-up" component={Register} />
        <ProtectedRoute path="/main/:element" exact component={Main}/>    
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/logout" component={Logout} />
        <Route path="/welcome" component={Welcome} />
        {/* <Redirect to="/main/dashboard"/> */}
        <Redirect to="/main/report" />
      </Switch>
    </div>
    );
  }
}
 
export default App;
