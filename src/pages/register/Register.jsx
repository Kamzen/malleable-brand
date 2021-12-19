import React from "react";

import image from '../../assets/image.jpg';

import './Register.css';


const Register = () => {

    return(

        <div className="register-bg-image bd">

            <div className="register-img">
                <img src={image} alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <form className="register-form bd">

                <input type="text"name name="" placeholder="Organization Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Home Address" />
                <select>
                    <option>Register as</option>
                    <option>Organization</option>
                </select>

                {/* <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
                </label> */}

                <div className="register-btn bd">

                    <button type="submit">Save & Continue</button>

                </div>

            </form>

        </div>

    )

}

export default Register;