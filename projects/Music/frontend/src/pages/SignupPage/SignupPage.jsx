import React, { useState } from 'react'
import "./SignupPage.css"
import loginImg from "../../images/loginImg.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      if (response.status === 200) {
        // Signup was successful, handle accordingly
        console.log('Signup successful!');
      } else {
        // Handle errors or display error messages to the user
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };


  return (
    <>
      <form noValidate onSubmit={handleSignup} className='signupPage'>
        <div className="login-content">
          <div className="login-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="login-right">
            <div className="login-logo">Logo</div>
            <div className="google-login">
              <div>
                <span>Signup your account</span>
                <span>See what is going on with your business</span>
              </div>
              <div className="google-login-button">
                <button>
                  <FcGoogle className="google-icon" /> Continue with google
                </button>
              </div>
            </div>
            <div className="or">
              <span>------- or sign in with Email --------</span>
            </div>
            <div className="login-inputs">
              <div className="email">
                <label htmlFor="email">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="User123" />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="mail@abc.com" />
              </div>
              <div className="password">
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} name='password' type="text" placeholder="Password@11" />
              </div>
              <div className="confirm-password">
                <label>Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} name='confirmPassword' type="password" placeholder="**********" />
              </div>
              <input type='submit' className="login-btn" value="SignUp" />
              <div className="new-account">
                <span>Already have account?</span>
                <Link to="/loginPage" style={{ fontWeight: 600 }}>Login Your Account</Link>
              </div>
            </div>
          </div>
        </div>
      </form >
    </>
  )
}
export default SignupPage;