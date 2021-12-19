import React from "react";
import { Component } from "react/cjs/react.production.min";
import {Link} from 'react-router-dom'

import FormInput from '../../components/form-input/FormInput';
import './Login.css';

import Fetch from '../../Fetch';

export default class Login extends Component {

    constructor(){

        super();

        this.state = {

            isLoggedIn : false,
            userInfo : []

        }

    }

    submit = (e) =>{

        e.preventDefault();

        Fetch("http://127.0.0.1:8000/api/login", "POST", {
            "email" : e.target.elements.email.value,
            "password" : e.target.elements.password.value
        },(data) => {

            this.setState({

                isLoggedIn : data.isLoggedIn,
                userInfo : data.user

            });

        });
    }

    handleChange(e){

    }

    render(){

        console.log(this.props);

        return(

            
            <div className="login-bg-image bd">

                <div className="login">


                                        
                    <form className="login-form" onSubmit={(e) => this.submit(e)} method="POST">

                        <span> {this.state.onError} </span>

                        <h3>SIGN IN</h3>

                        <label>Email</label>
                        <FormInput type="email" name="email" placeholder="user@gmail.com" handleChange={this.handleChange} />

                        <label>Password</label>
                        <FormInput type="password" name="password" placeholder="********" handleChange={this.handleChange} />
                        <button className="show-btn" type="button">SHOW</button>

                        <div className="forgot">

                            <input type="checkbox" />Remember me
                            <span>Forgot Password</span>
                            
                        </div>

                        <button className="sign-btn"  type="submit">SIGN IN</button>

                        <div className="third-btn">

                            <button className="facebook">Facebook</button>
                            <button className="twitter">Twitter</button>

                        </div>
                        <br />
                        <div className="new-acc bd"><Link to={'/register'} className="app-bold-text bd">Don't Have An Account? Create One Here</Link></div>


                    </form>
                            
                    
                </div>

            </div>



            
    
        );

    }

}
