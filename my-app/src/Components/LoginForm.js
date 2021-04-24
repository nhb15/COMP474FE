import React, {useState, useEffect} from 'react'
import TextBoxComponent from "./TextBoxComponent";
import { withRouter } from "react-router";
import {useHistory} from 'react-router-dom';

function LoginFormComponent(props) {
    const history = useHistory({forceRefresh: true});

    function onSubmitFunction(e) {
        e.preventDefault();

        const email = document.getElementById('username').value
        const password = document.getElementById('password').value

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Origin": "*",
            },
        };

        fetch('http://localhost:8800/login?email=' + email + '&password='+password, requestOptions)
            .then(response=> response.text())
            .then(result => {
                console.log(result);
                if (result == 'prof' || result == 'student') {
                    window.sessionStorage.setItem('role', result);
                    window.sessionStorage.setItem('email', email);
                    history.push('/calendar');
                } else {
                    alert('Your login did not work. Please check your email and password.');
                }
            })
            .catch(error => alert(error));
    }



    return (
        <form>
            <div  style={{position:'relative', left:'40%'}}>
                <TextBoxComponent label={'Email'} id={'username'} preValue={'Username'}/>
            </div>
            <div  style={{position:'relative', left:'40%'}}>
                <TextBoxComponent label={'Password'} id={'password'} preValue={'Password'}/>
            </div>
            <input type="submit" value="Login" onClick={(e) => onSubmitFunction(e)} style={{width: '100%'}}/>
            <a href="/register">Register Instead</a>
        </form>
    );
}

export default LoginFormComponent;