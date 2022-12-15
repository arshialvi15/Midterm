import React from "react";
import './SignupPage.css'


function SignupPage(){
    return(
    <div className="form-container">
        <h1 className="form-title">Sign Up</h1>
            <div>
                <input type="text" id="first-name" placeholder="First Name"></input>
            </div><br/>
            <div>
                <input type="text" id="last-name" placeholder="Last Name"></input>
            </div><br/>
            <div>
                <input type="email" id="email" placeholder="email"></input>
            </div><br/>
            <div>
                <input type="password" id="password" placeholder="Password"></input>
            </div><br/>
            <div>
                <input type="password" id="password" placeholder="Password Confirm"></input>
            </div><br/>
                <p>Already have an account? Please Login <a href="#">here</a></p>
        
                <button className="signup-btn">Sign Up</button>            
        </div>
    
    )
}

export default SignupPage;