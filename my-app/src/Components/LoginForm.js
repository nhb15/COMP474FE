import React from 'react'
import TextBoxComponent from "./TextBoxComponent";

function LoginFormComponent(props) {
    const { onChangeFunction } = props;

    return (
        <form>
            <div>
                <TextBoxComponent label={'Email'} id={'username'}/>
            </div>
            <div>
                <TextBoxComponent label={'Password'} id={'password'}/>
            </div>
            <input type="submit" value="Login" onChange={onChangeFunction}/>
        </form>
    );
}

export default LoginFormComponent;