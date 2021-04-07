import React from 'react'
import TextBoxComponent from "./TextBoxComponent";

function LoginFormComponent(props) {
    const { onChangeFunction } = props;

    return (
        <form>
            <div>
                <TextBoxComponent label={'Email'} id={'username'} preValue={'Username'}/>
            </div>
            <div>
                <TextBoxComponent label={'Password'} id={'password'} preValue={'Password'}/>
            </div>
            <input type="submit" value="Login" onChange={onChangeFunction}/>
        </form>
    );
}

export default LoginFormComponent;