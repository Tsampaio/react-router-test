import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const [checkLogin, setCheckLogin] = useState({
        userEmail: "",
        userPass: "",
    });

    const currentLogin = (e) => {
        setCheckLogin({...checkLogin, [e.target.name]: e.target.value});
    }

    const logUser = (event) => {
        event.preventDefault();
        console.log(props);
        const allUsers = props.details.filter( user => {
            return user.email === checkLogin.userEmail && user.password === checkLogin.userPass;
        });

        if( allUsers.length > 0 ) {
            props.setAuth(true);
            
        }

    }

    return (
        <div>
            { props.auth ? <Redirect to="/dashboard" /> : <h1>Login Page</h1> }
            
            <form>
                <label htmlFor="userEmail">User Email</label>
                <input onChange={currentLogin} name="userEmail" type="email" /><br />
                <label htmlFor="userPass">User Password</label>
                <input onChange={currentLogin} name="userPass" type="password" /><br />
                <input onClick={logUser} type="submit" value="Login" />
            </form>
            
        </div>
    )
}

export default Login
