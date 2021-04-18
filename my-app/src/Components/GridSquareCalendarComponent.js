import React from 'react';


function GridSquareCalendarComponent(props) {
    const { appointmentId } = props;
    let fill = "white"

    if (appointmentId) {
        fill = "blue"
    }

    return (
        <svg width="200" height="100">
            <rect width="200" height="100" style={{fill: fill, stroke:'#000000'}} />
        </svg>
    )
}

export default GridSquareCalendarComponent;