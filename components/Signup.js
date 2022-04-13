import React from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";
function Signup()
{
  let Navigate=useNavigate();
return(
  <>
  <head>
    <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width,intial-scale=1.0"></meta>
      </head>
<div class="container">
    <h1>Sign Up</h1>
<div class="email">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
</div>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="Repeatpassword" placeholder="Repeat Password" name="psw-repeat" required />
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{mb:"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="button">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="signup" class="signupbtn" onClick={()=>{
      Navigate("/login");
      }}>Sign Up</button>
    </div>
  </div>
  </>
)
}
export default Signup