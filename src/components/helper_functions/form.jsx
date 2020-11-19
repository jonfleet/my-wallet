import { Component } from 'react';
import config from "../../config.json"
import auth from "../../services/authService"

class Form extends Component {

    validateProperty = () => {
        const {
          schema, 
          data
        } = this.state  
        
        const options = {abortEarly: false}
        const result = schema.validate(data, options)
        
        const errors = {} 
        if(!result.error) return {};
        result.error.details.map(item => (
          errors[item.path[0]] = item.message
        ))
        
        return errors
    }
    
 
    doSubmit = async (apiCall) => {
        // Call Server
        try{
          const response = await apiCall
          console.log("Create User Response: ", response)
          auth.loginWithJWT(response.headers["x-auth-token"])
          window.location = config.homepage
    
        } catch(ex){
          
          const errors = {...this.state.errors}
    
          if(ex.response && ex.response.status === 400){  
            errors.username = ex.response.data;
          }

          if(ex.response && ex.response.status === 401){
            errors.password = ex.response.data
          }
          this.setState( { errors });
    
        }    
      }
    
      handleChange = ({currentTarget: input}) =>  {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data})
      }
}

export default Form;