import React, {useState} from 'react'
import TextBoxComponent from "./TextBoxComponent";

function RegisterFormComponent(props) {
    const {  } = props;

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    function onSubmitFunction(e) {
        e.preventDefault();
        console.log(e);
        const email = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log(email, password);
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('', requestOptions)
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
            <input type="submit" value="Register" onClick={(e) => onSubmitFunction(e)} style={{width: '100%'}}/>
            <a href="/login">Login Instead</a>
        </form>
    );
}

export default RegisterFormComponent;