import React, { useEffect, useState } from 'react'

function ScheduleButtonComponent(props) {
    const {label, onClick} = props;

    const [clickStatus, toggleClickStatus] = useState(false);

    const buttonClick = (e) => {
        toggleClickStatus(!clickStatus);
        onClick(e, clickStatus, label);
    }

    // function handleClick(e) {
    //     clickStatus = !clickStatus
    //     console.log(e);
    //     console.log(clickStatus);
    // }

    return (
        <input type="button" value={label} id={label} onClick={(e, label) => buttonClick(e, label)} style={{ backgroundColor: clickStatus ? '#0A4628' : '#0CF37F' }}/>
    );
}

export default ScheduleButtonComponent;