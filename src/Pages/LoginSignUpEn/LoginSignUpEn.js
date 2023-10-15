import React from "react";
import style from './LoginSignUpEn.module.css'
import Logo from '../../assets/2.png'


function LoginSignUpE() {
    return (
        
        <div className={style["parent clearfix"]}>
        <div className={style["bg-illustration"]}>
          <div className={style["burger-btn"]}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={style["login"]}>
          <img src={Logo} alt="logo" />
          <div className={style["container"]}>
            <h1>Welcome Back!</h1>
            <p>You don't have account? <span>Sign Up</span> Now</p>
            <div className={style["login-form"]}>
              <form>
                <input type="email" placeholder="E-mail Address" />
                <input type="password" placeholder="Password" />
                <div className={style["remember-form"]}>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className={style["forget-pass"]}>
                  <a href="#">Forgot Password ?</a>
                </div>
                <button type="submit">LOG-IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginSignUpE;