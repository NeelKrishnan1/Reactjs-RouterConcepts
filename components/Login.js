import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
function Login()
{
  let Navigate=useNavigate();
return(
  <>
  <head>
    <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width,intial-scale=1.0"></meta>
      </head>
<div class="container">
    <h1>Login</h1>
<div class="email">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
</div>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{mb:"15px"}}/> Remember me
    </label>
    
    <div class="button">
      <button type="submit" class="signupbtn" onClick={()=>{
      Navigate("/home");
      }}>Login</button>
    </div>
  </div>
  </>
)
}
export default Login;