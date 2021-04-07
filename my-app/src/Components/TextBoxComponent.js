import React from 'react'

function TextBoxComponent(props) {
    const { label, id, preValue } = props;

    return (
        <label>
            {label}
            <input type="text" id={id} placeholder={preValue}/>
        </label>
    );
}

export default TextBoxComponent;