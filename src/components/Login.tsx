import React, {useState} from 'react';
import {BsWhatsapp, BsTwitter, BsGithub, BsCloudSunFill, BsFillCloudMoonFill} from 'react-icons/bs'
import {FaGoogle} from 'react-icons/fa'
import {GrFacebook} from 'react-icons/gr'
import {MdEmail} from 'react-icons/md'
import {IoIosLock} from 'react-icons/io'
import './login.css'

const Login = ():JSX.Element => {
const [isLight, setIsLight] = useState(true)

const setlightMode = ()=>{
    setIsLight(!isLight)
    return document.body.classList.toggle("dark-mode")
}

  return <div className="box-container">
       {!isLight && <BsCloudSunFill className="sun fillsun" onClick={setlightMode} />}
      {isLight && <BsFillCloudMoonFill className="sun fillmoon" onClick={setlightMode} />}
      <div className="logo-head">
          <BsWhatsapp/>
          <h4>Whatsapp</h4> 
      </div>
      <h2>Login</h2>
      <div className="form">
          <div className="format-box">
              <MdEmail className="email-icon"/>
              <input type="text" placeholder="Email" />
          </div>
          <div className="format-box">
              <IoIosLock className="lock-pass"/>
              <input type="text" placeholder="Password" />
          </div>
          <button> Login </button>
      </div>
      <p>or continue with these social profile</p>
      <div className="social-login">
          <div className="socials-circle">
              <div>
              <FaGoogle/>
              </div>
          </div>
          <div className="socials-circle">
              <div>
              <GrFacebook/>
              </div>
          </div>
          <div className="socials-circle">
              <div>
              <BsTwitter/>
              </div>
          </div>
          <div className="socials-circle">
             <div>
             <BsGithub/>
             </div>
          </div>
      </div>
      <p>Don't have an account yet? <a href="/signup">Register</a></p>
      <p><a href="/forgotpassword">forgot password</a></p>
  </div>;
};

export default Login;
