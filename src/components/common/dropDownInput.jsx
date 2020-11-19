import React from 'react';

const DropDownInput = (props) => {
    const {
        label, 
        name, 
        value, 
        options, 
        optionLabel, 
        onChange,
         errors
    } = props

    return (
        <div>
           <label htmlFor={name}>{label}</label> 
           <select 
                className="custom-select" 
                name={name}
                value={value}
                onChange={onChange}
                >
                    <option key={"_id"} value={null} >{optionLabel}</option>
                    {options.map(item => 
                        <option key={item.name} value={item.name} >{item.label}</option>    
                    )}
            </select>
            {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
        </div>
      );
}
 
export default DropDownInput;