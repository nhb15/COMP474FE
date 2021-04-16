import React from 'react';
import GridSquareCalendarComponent from "./GridSquareCalendarComponent";
import { Column } from 'simple-flexbox'

function CalendarComponent(props) {
    const { dayName } = props;

    return (
        <Column title={dayName}>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
            <GridSquareCalendarComponent/>
        </Column>
    )
}

export default CalendarComponent;