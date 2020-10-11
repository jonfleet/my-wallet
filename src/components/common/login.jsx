import React from 'react';
import Joi from "joi"
import Form from "./form"

// Fix the disabled Button
// Add Username and Password length and complexity requirements requirement 
// Add a Create new Account Option

// Components

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
    })
  };

  validate = () => {
    const {data} = this.state  
    const errors = {}
    if(data.username === "")
      errors.username = "Username is required";
    if(data.password === "")
      errors.password = "Password is required";
     
    return errors
  }

  doSubmit = () => {
    // Call Server
    console.log("Server Called")
  }

  handleChange = ({currentTarget: input}) =>  {
    // console.log("State: ", this.state)
    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data})
    // console.log(this.state.data)
  } 

  disableBtn (){
    const result = this.validateProperty() == {} ? false : true
    console.log(this.validateProperty())
    console.log(this.state.errors === {} )
    console.log("disable result: ", result)
    return false
  }


  render() { 

    return (
      <form onSubmit={this.handleSubmit} className="container w-25 mt-5 form-signin">
          <div className="text-center mb-4">
              <FontAwesomeIcon className="fa-5x"icon={faWallet}/>
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          </div>

          {this.renderInput("Username", "username", "text")}
          {this.renderInput("Password", "password", "password")}

          <div className="checkbox mb-3 mt-3">
            <input type="checkbox" value="remember-me"></input>
            <label className="ml-1">
              Remember me
            </label>
          </div>
          {this.renderButton("Sign In")}
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
      </form>
      );
  }
}
 
export default Login;
