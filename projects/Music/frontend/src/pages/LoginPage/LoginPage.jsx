import { React, useEffect, useState } from "react";
import "./LoginPage.css";
import loginImg from "../../images/loginImg.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: email,
        password: password,
      })
      switch (response.status) {

        case 200:
          window.location.href = '/';
          break;
        case 400:
          alert("wrong credentials")
          break;

        default:
          alert("fill all the fields")
      }
    }
    catch (error) {
      console.log('Error:', error.message);
    }
  }
  return (
    <>
      <div className="loginPage">
        <form onSubmit={handleSubmit}>
          <div className="login-content">
            <div className="login-left">
              <img src={loginImg} alt="" />
            </div>
            <div className="login-right">
              <div className="login-logo">Logo</div>
              <div className="google-login">
                <div>
                  <span>Login to your account</span>
                  <span>See what is going on with your business</span>
                </div>
                <div className="google-login-button">
                  <button>
                    <FcGoogle className="google-icon" /> Continue with google
                  </button>
                </div>
              </div>
              <div className="or">
                <span>------- or login in with Email --------</span>
              </div>
              <div className="login-inputs">
                <div className="email">
                  <label>Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="mail@abc.com" />
                </div>
                <div className="password">
                  <label >Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="**********" />
                </div>
                <div className="forgot-password">
                  <div>
                    <input type="checkbox" />
                    <span>Remember Me</span>
                  </div>
                  <span>
                    <Link to="#" style={{ color: "black" }}>
                      Forgot Password ?
                    </Link>
                  </span>
                </div>
                <input className="login-btn" type="submit" />
                <button >Search</button>
                <div className="new-account">
                  <span>Not Regsistered Yet?</span>
                  <Link to="/signupPage" style={{ fontWeight: 600 }}>Create an account</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
