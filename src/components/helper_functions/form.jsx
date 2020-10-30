import { Component } from 'react';
import config from "../../config.json"
import auth from "../../services/authService"

class Form extends Component {

    validateProperty = () => {
        const options = {abortEarly: false}
        const {schema, data} = this.state
        console.log("Validate Property: ", schema)
        console.log("Valdiate Data, ", data)
        const result = schema.validate(data, options)
        // const errors = {...result.error.details};
        // console.log("Result Object, ", result)
        const errors = {} 
        if(!result.error) return {};
        result.error.details.map(item => (
          // console.log(item.path[0])
          errors[item.path[0]] = item.message
        ))
        // console.log("Errors object: ", errors)
        
        return errors
    }
    
 
    doSubmit = async (apiCall) => {
        // Call Server
        // console.log("Waiting for login call")
        try{
          const response = await apiCall
          console.log("Create User Response: ", response)
          auth.loginWithJWT(response.headers["x-auth-token"])
          window.location = config.homepage
          // this.props.history.push("/")
    
        } catch(ex){
          // console.log("Exception: ", ex)
          const errors = {...this.state.errors}
    
          if(ex.response && ex.response.status === 400){  
            errors.username = ex.response.data;
            // console.log("Errors Object: ", this.state.errors)
          }
          if(ex.response && ex.response.status === 401){
            errors.password = ex.response.data
          }
          this.setState( { errors });
    
        }    
      }
    
      handleChange = ({currentTarget: input}) =>  {
        // console.log("State: ", this.state)
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data})
        // console.log(this.state.data)
      }
}

export default Form;