import React from 'react';
import CalendarColumnComponent from "./CalendarColumnComponent";

function CalendarComponent(props) {
    const { } = props;

    return (
        <div>
            <CalendarColumnComponent dayName={'Monday'}/>
            <CalendarColumnComponent dayName={'Tuesday'}/>
        </div>
    )
}

export default CalendarComponent;