import React from "react";

import './FormInput.css';

const FormInput = ({type,placeholder,name, handleChange}) => {

    return(

        <input className="input" name={name} type={type} placeholder={placeholder} onChange={(e) => handleChange(e)} />

    )

}

export default FormInput;