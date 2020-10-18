import React, {Component} from 'react';
import './App.css';
import Heading from "./components/heading"
import Main from "./components/main"
import {Switch, Route, Redirect} from "react-router-dom"
import auth from "./services/authService"
import Login from "./components/common/loginForm"
import Register from "./components/registerForm"
import Profile from "./components/profile"
import Logout from "./components/logout"



class App extends Component {
  state = {  }

  componentDidMount () {
    const user = auth.getCurrentUser()
    console.log(auth.getJwt())
    this.setState({user})  
  }

  render() { 
    return ( 
    <div>
      <Heading user={this.state.user}/>
      
      <Switch>
        <Route path="/main/:element" exact component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/sign-up" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/main/dashboard"/>
      </Switch>
      
      {/* <Heading/>
      <Main /> */}
    </div>
    );
  }
}
 
export default App;
