import React, {Component} from 'react';
import './App.css';
import Heading from "./components/heading"
import Main from "./components/main"
import {Switch, Route, Redirect} from "react-router-dom"

import Login from "./components/common/login"
import SignUp from "./components/signUp"


class App extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <Heading/>
      
      <Switch>
        <Route path="/main/:element" exact component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/sign-up" component={SignUp} />
        <Redirect to="/main/dashboard"/>
      </Switch>
      
      {/* <Heading/>
      <Main /> */}
    </div>
    );
  }
}
 
export default App;
