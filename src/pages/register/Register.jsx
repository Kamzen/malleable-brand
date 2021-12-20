import React from "react";
import { useHistory } from "react-router-dom";

import image from '../../assets/image.jpg';
import Fetch from '../../Fetch';

import './Register.css';


const Register = () => {

    let history = useHistory();

    let submit = (e) => {

        e.preventDefault();

        Fetch("http://127.0.0.1:8000/api/register", "POST", {
            "org_name" : e.target.elements.org_name.value,
            "username" : e.target.elements.username.value,
            "email" : e.target.elements.email.value,
            "password" : e.target.elements.password.value,
            "home_address" : e.target.elements.home_address.value,
            "type" : e.target.elements.type.value,
            "reg_number" : e.target.elements.reg_number.value

        },(data) => {


            if (data.error === false) {

                history.push('/login');
                
            }else{

                console.log("Registering Failed");

            }

        });

        

    }
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

            <form className="register-form bd" method="POST" onSubmit={(e) => {submit(e)}}>

                <input type="text" name="org_name" placeholder="Organization Name" />
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="text" name="home_address" placeholder="Home Address" />
                <select name="type">
                    <option>Register as</option>
                    <option>Organization</option>
                </select>

                <input type={'text'} name="reg_number" placeholder="NPO Registration Number" />

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