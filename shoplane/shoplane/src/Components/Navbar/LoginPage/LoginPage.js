import React from "react";
import './LoginPage.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LoginPage() {
    return(

 <div className="card">
 <div className="card-body" >
 <h1 className="card-title">Login</h1></div>
 <div className="form-input">
    <input type="email" id="email" placeholder="Email-address"></input>
 </div>
 <div>
    <input type="password" id="password" placeholder="Password"></input>
 </div>
 <p className="account">Don't have an account? Sign up <a href="">here</a></p>

 <Popup trigger={<button>Login</button>} position="right center">
    <div>Login Successful</div>
  </Popup>

 </div>

    )
    
}

export default LoginPage;