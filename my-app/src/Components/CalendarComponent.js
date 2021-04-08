import React from 'react';
import GridSquareCalendarComponent from "./GridSquareCalendarComponent";
import { Column, Row } from 'simple-flexbox'

function CalendarComponent(props) {
    const { } = props;

    return (
        <Column style={{width:100, height:100}}>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
        </Column>
    )
}

export default CalendarComponent;