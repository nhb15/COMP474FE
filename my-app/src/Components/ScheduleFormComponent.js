import React from 'react'
import TextBoxComponent from "./TextBoxComponent";

function ScheduleFormComponent(props) {
    const { professorId } = props;
    console.log(professorId);
    return (
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
                <TextBoxComponent label={'Day of the Week'} id={'weekDay'} preValue={'Monday(s)'}/>
            </div>
            <div>
                <TextBoxComponent label={'Month'} id={'month'} preValue={'May'}/>
            </div>
            <div>
                <TextBoxComponent label={'Number of Students Allowed'} id={'numStudents'} preValue={'3'}/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    );
}

export default ScheduleFormComponent;