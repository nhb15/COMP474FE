import React, {useState} from 'react'
import TextBoxComponent from "./TextBoxComponent";

function RegisterFormComponent(props) {
    const {  } = props;

    const cookie = 'JSESSIONID=C20A782873A99217EA2EF680CB2CD1E5';

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    function onSubmitFunction(e) {
        e.preventDefault();
        console.log(e);
        const email = document.getElementById('username').value
        const password = document.getElementById('password').value
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        let role = document.getElementById('role').checked

        if (role) {
            role = 'prof'
        } else {
            role = 'student';
        }

        const payload = {
            emailId: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role,
        };

        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'cookie': cookie
            },
            body: JSON.stringify(payload),
            credentials: 'include',
        };

        fetch('http://localhost:8800/login', requestOptions)
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
            <div  style={{position:'relative', left:'40%'}}>
                <TextBoxComponent label={'First Name'} id={'firstName'} preValue={'Jane'}/>
            </div>
            <div  style={{position:'relative', left:'40%'}}>
                <TextBoxComponent label={'Last Name'} id={'lastName'} preValue={'Doe'}/>
            </div>
            <label style={{position:'relative', left:'40%'}}> Check if you are a professor: <input type="checkbox" id="role" /></label>
            <input type="submit" value="Register" onClick={(e) => onSubmitFunction(e)} style={{width: '100%'}}/>
            <a href="/login">Login Instead</a>
        </form>
    );
}

export default RegisterFormComponent;