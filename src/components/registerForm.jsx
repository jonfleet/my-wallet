import React from 'react';
import Form from "./helper_functions/form"
import Input from "./common/input"
import config from "../config.json"

// Services
import User from "../services/userService"

// 3rd Party Modules
import _ from "lodash"
import Joi from "joi"

// Graphics
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClipboardList} from "@fortawesome/free-solid-svg-icons"
// import auth from '../../../my-wallet-api/middleware/auth';

class RegisterForm extends Form {
  state = {  
    data: {username: "", password: "", confirmPassword: ""},
    errors: {},
    schema:Joi.object({
      username: Joi.string().required().label("Username").messages({
        "string.empty" : "Username is required"
      }),
      password: Joi.string().required().label("Password").messages({
        "string.empty" : "Password is required"
      }),
      // Add When Statements to Validation String 
      confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        "any.only": "Passwords do not match",
        "string.empty": "Field is required"
      })
      
    })  
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validateProperty() 
    // console.log('Result Object: ', errors)

    this.setState({errors})
    // console.log("Errors: ", errors)
    if(_.isEmpty(errors)){
        this.doSubmit(User.createUser(this.state.data))
    }
  }

  render() { 
    const {data, errors } = this.state
    console.log("Render Errors: ", errors)
    return (  
      <form onSubmit={this.handleSubmit} className="container w-25 mt-5">
          <div className="text-center mb-4">
            <FontAwesomeIcon className="fa-5x" icon={faClipboardList} />
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
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
          <Input
              label="Confirm Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleChange}
              errors={errors}
              type="password"
          />
          <button className="btn btn-primary btn-block mt-3">
              Register
          </button>
          <p className="mt-3 mb-3 text-muted text-center">&copy; My Wallet Inc 2020</p>
        </form>
    );
  }
}

export default RegisterForm;
