import React, { useEffect, useState } from 'react'

function ScheduleButtonComponent(props) {
    const {label} = props;

    const [clickStatus, toggleClickStatus] = useState(false);

    // function handleClick(e) {
    //     clickStatus = !clickStatus
    //     console.log(e);
    //     console.log(clickStatus);
    // }

    return (
        <input type="button" value={label} onClick={() => toggleClickStatus(!clickStatus)} style={{ backgroundColor: clickStatus ? '#FF002A' : '#F1FF00' }}/>
    );
}

export default ScheduleButtonComponent;