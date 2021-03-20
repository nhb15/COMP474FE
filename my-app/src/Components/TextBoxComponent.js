import React from 'react'

function TextBoxComponent(props) {
    const { label, id } = props;

    return (
        <label>
            {label}
            <input type="text" id={id}/>
        </label>
    );
}

export default TextBoxComponent;