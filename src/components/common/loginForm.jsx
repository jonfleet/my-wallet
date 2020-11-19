import React from 'react';

// Libraries
import _ from "lodash"
import Joi from "joi"

// Components
import Input from "./input"
import NewUser from '../newUser'
import auth from "../../services/authService"
import Form from "../helper_functions/form"

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWallet} from "@fortawesome/free-solid-svg-icons"

class Login extends Form {
  state = {
    data: {username: "", password: ""},
    errors: {},
    schema: Joi.object({
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),  
    }),
    entry: {username: "", password: ""}
  };

handleSubmit = (e) => {
    e.preventDefault();
    const {data} = this.state
    const errors = this.validateProperty()
    
    this.setState({errors: errors})
  
    if (_.isEmpty(errors)){
      this.doSubmit(auth.login(data.username, data.password))
    }
}

render() { 
  const {data, errors} = this.state
  
  return (
    <form onSubmit={this.handleSubmit} className="container w-25 mt-5 form-signin">
        <div className="text-center mb-4">
            <FontAwesomeIcon 
              className="fa-5x"
              icon={faWallet}
            />
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        </div>
        <Input 
          label="Username"
          name="username"
          value={data.username}
          onChange={this.handleChange}
          errors={errors}
          type="text"
        />
        <Input 
          label="Password"
          name="password"
          value={data.password}
          onChange={this.handleChange}
          errors={errors}
          type="password"
        />
        <button 
          className="btn btn-lg btn-primary btn-block mt-4" 
          type="submit"
        >Sign In
        </button>
        <NewUser />
        <p className="mt-3 mb-3 text-muted text-center">&copy; My Wallet Inc 2020</p>
    </form>
    );
  }
}
 
export default Login;
