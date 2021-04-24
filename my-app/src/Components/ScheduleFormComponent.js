import React, { useState } from 'react'
import TextBoxComponent from "./TextBoxComponent";
import ScheduleButtonComponent from "./ScheduleButtonComponent";
import {useHistory} from 'react-router-dom';

function ScheduleFormComponent(props) {
    // const { professorId } = props;

    const [days, setDays] = useState([]);
    const [months, setMonths] = useState([]);

    const history = useHistory();
    console.log(window.sessionStorage);

    const onWeekDayClick = (e, clickStatus, label) => {
        if (!clickStatus) {
            days.push(label);
            setDays(days);
            console.log(days);
        } else {
            const removalIndex = days.indexOf(label);
            days.splice(removalIndex,1);
        }
    }
    
    const onMonthClick = (e, clickStatus, label) => {
        if (!clickStatus) {
            months.push(label);
            setMonths(months);
            console.log(months);
        } else {
            const removalIndex = months.indexOf(label);
            months.splice(removalIndex,1);
        }
    }
    

    console.log(props)

    function onSubmitFunction(e) {
        e.preventDefault();
        console.log(e);
        const scheduleName = document.getElementById('scheduleName').value
        const startTime = document.getElementById('startTime').value
        const endTime = document.getElementById('endTime').value
        const numStudents = document.getElementById('numStudents').value
        // const sunday  = document.getElementById('Sunday');
        // const monday  = document.getElementById('Monday');
        // const tuesday  = document.getElementById('Tuesday').value
        // const wednesday  = document.getElementById('Wednesday').value
        // const thursday  = document.getElementById('Thursday').value
        // const friday  = document.getElementById('Friday').value
        // const saturday  = document.getElementById('Saturday').value

        // console.log(scheduleName, startTime, endTime, sunday, monday);

        console.log(months);
        console.log(days);

        const payload = {
            start: startTime,
            end: endTime,
            name: scheduleName,
            weekDay: days.toString(),
            month: months.toString(),
            year: new Date().getFullYear(),
            numStudentsAllowed: numStudents,
            ownerId: window.sessionStorage.getItem('email'),
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Origin": "*"
            },
            body: JSON.stringify(payload),
        };

        console.log(requestOptions.body);

        fetch('http://localhost:8800/schedules/create', requestOptions)
            .then(response=> response.text())
            .then(result => {
                if (result) {
                    alert('Sweet, your schedule was created successfully!')
                    history.push('/calendar');
                }
            })
            .catch(error => {
                alert('Your schedule was not able to be created. Please try again.')
            });
    }

    return (
        <container style={{display: 'flex', justifyContent:'center'}}>
            <form>
                <div>
                    <TextBoxComponent label={'Schedule Name'} id={'scheduleName'} preValue={'test'}/>
                </div>
                <div>
                    <TextBoxComponent label={'Start Time'} id={'startTime'} preValue={'11:00 AM'}/>
                </div>
                <div>
                    <TextBoxComponent label={'End Time'} id={'endTime'} preValue={'12:30 PM'}/>
                </div>
                <div>
                    <label>Day(s)</label>
                </div>
                <div>
                    <ScheduleButtonComponent label={"Monday"} onClick={onWeekDayClick}/>
                    <ScheduleButtonComponent label={"Tuesday"} onClick={onWeekDayClick}/>
                    <ScheduleButtonComponent label={"Wednesday"} onClick={onWeekDayClick}/>
                    <ScheduleButtonComponent label={"Thursday"} onClick={onWeekDayClick}/>
                    <ScheduleButtonComponent label={"Friday"} onClick={onWeekDayClick}/>
                </div>
                <div>
                    <ScheduleButtonComponent label={"Saturday"} onClick={onWeekDayClick}/>
                    <ScheduleButtonComponent label={"Sunday"} onClick={onWeekDayClick}/>
                </div>
                <div>
                    <label>Month(s)</label>
                </div>
                <div>
                    <ScheduleButtonComponent label={"January"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"February"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"March"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"April"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"May"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"June"} onClick={onMonthClick}/>
                </div>
                <div>
                    <ScheduleButtonComponent label={"July"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"August"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"September"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"October"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"November"} onClick={onMonthClick}/>
                    <ScheduleButtonComponent label={"December"} onClick={onMonthClick}/>
                </div>
                <div>
                    <TextBoxComponent label={'Number of Students Allowed'} id={'numStudents'} preValue={'3'}/>
                </div>
                <div>
                    <input type="submit" value="Submit" onClick={(e) => onSubmitFunction(e)}/>
                </div>
            </form>
        </container>
    );
}

export default ScheduleFormComponent;