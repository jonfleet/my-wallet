import React, { Component } from 'react';
import Input from "./input"
class Form extends Component {
    state = {  }
    
    validateProperty = () => {
        const options = {abortEarly: false}
        const {schema, data} = this.state
        const result = schema.validate(data, options)
        // const errors = {...result.error.details};
        const errors = {} 
        if(!result.error) return {};
        result.error.details.map(item => {
          // console.log(item.path[0])
          errors[item.path[0]] = item.message
        })
        // console.log("Errors object: ", errors)
        
        return errors
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateProperty()
        // console.log(errors)  
        
        // if(!errors){
        this.setState({errors: errors})
        // }
        if (errors) return 
        
        this.doSubmit()
    }
    
    renderButton(label) {
        return (<button disabled={this.disableBtn()} className="btn btn-lg btn-primary btn-block" type="submit">
            {label}
            </button>
        );
    }

    renderInput(label, name, type){
        const {data, errors} = this.state;
        return (
            <Input 
                label={label} 
                name={name} 
                value={data[name]} 
                onChange={this.handleChange} 
                errors={errors} 
                type={type}
            />
        )
    }
}
 
export default Form;