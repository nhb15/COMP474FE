import React, {useState, useEffect} from 'react';
import CalendarColumnComponent from "./CalendarColumnComponent";
import GridSquareCalendarComponent from "./GridSquareCalendarComponent";
import { Column, Row } from 'simple-flexbox';
import {useHistory} from 'react-router-dom';


function CalendarComponent(props) {
    // const {calendar} = props;
    const [events, setEvents] = useState(null);
    console.log(props);
    console.log(window.sessionStorage);
    useEffect(() => {
        const email = window.sessionStorage.getItem('email');
        console.log(email);

        const requestOptions = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };

        // fetch('http://localhost:8800/events/byEmail?email=' + email, requestOptions)
        //     .then(response=> response.text())
        //     .then(result => {
        //         console.log(result);
        //         if (result) {
        //             setEvents(result);
        //         } else {
        //             console.log('failed to fetch calendar test');
        //         }
        //     })
        //     .catch(error => alert(error));


    });

    const history = useHistory();

    const calendarArray = [];

    for (let index = 0; index < 20; index++) {
        calendarArray[index] = [];
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const times = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5]

    for (let xInd = 0; xInd < 20; xInd++) {
        for (let yInd = 0; yInd < 7; yInd++) {
            calendarArray[xInd][yInd] =
                {
                    time: times[xInd],
                    name: 'testName',
                    day: days[yInd],
                };
        }
    }

    console.log(calendarArray);

    return (
        <div style={{position: 'relative', left:'10%', marginTop: '100px'}}>
            <h2 style={{justifyContent: 'space-evenly', textAlign: 'left', wordSpacing: '80px'}}>Sunday Monday Tuesday Wednesday Thursday Friday Saturday</h2>
            {calendarArray.map((innerArray) => {
                return (
                    <Row>
                        {innerArray.map((timeSlot) => {
                            return (
                                <Column>
                                    <GridSquareCalendarComponent appointmentId={''}/>
                                </Column>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    );

//     return (
//         <div>
//             <CalendarColumnComponent dayName={'Monday'}/>
//             <CalendarColumnComponent dayName={'Tuesday'}/>
//         </div>
//     )
// }
}
export default CalendarComponent;