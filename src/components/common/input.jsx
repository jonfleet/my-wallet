import React from 'react';

const Input = (props) => {
    const {label, name, value, onChange, errors, type} = props
    return ( 
        <div className="form-label-group">
            <label htmlFor={`input${label}`}></label>
            <input className="form-control" label={label} name={name} value={value} onChange={onChange} type={type} placeholder={label}/>
            {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
        </div>
    );
}

export default Input;