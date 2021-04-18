import React, {useState} from 'react'
import TextBoxComponent from "./TextBoxComponent";

function LoginFormComponent(props) {
    const {  } = props;

    const cookie = 'JSESSIONID=C20A782873A99217EA2EF680CB2CD1E5'

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    function onSubmitFunction(e) {
        e.preventDefault();
        console.log(e);
        const email = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log(email, password);

        const payload = {
            emailId: email,
            password: password,
            JSESSIONID: 'C20A782873A99217EA2EF680CB2CD1E5',
        };

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'cookie': cookie,
            },
            body: JSON.stringify(payload),
            credentials: 'include',
        };

        fetch('http://localhost:8080/login', requestOptions)
            .then(response=> response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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