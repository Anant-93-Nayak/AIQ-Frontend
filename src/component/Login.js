import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div id="loginPage">
            <div className="card card-container">
                <img id="profile-img" className="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user img" />
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin">
                    <span id="reauth-email" className="reauth-email"></span>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div id="remember" className="checkbox">
                        <label className="textClassName">
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                </form>
                <Link to="/">
                    <button id="submitLogin" className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
                </Link>
                <a href="/login" className="forgot-password">
                    Forgot the password?
                </a>
                <div id="errorText">Please enter email address*</div>
            </div>
        </div>
    )
}

export default Login
