import React from 'react'
import TextBoxComponent from "./TextBoxComponent";
import ScheduleButtonComponent from "./ScheduleButtonComponent";

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
                <label>Day(s)</label>
            </div>
            <div>
                <ScheduleButtonComponent label={"Sunday"}/>
                <ScheduleButtonComponent label={"Monday"}/>
                <ScheduleButtonComponent label={"Tuesday"}/>
                <ScheduleButtonComponent label={"Wednesday"}/>
                <ScheduleButtonComponent label={"Thursday"}/>
                <ScheduleButtonComponent label={"Friday"}/>
                <ScheduleButtonComponent label={"Saturday"}/>
            </div>
            <div>
                <label>Month(s)</label>
            </div>
            <div>
                <ScheduleButtonComponent label={"January"}/>
                <ScheduleButtonComponent label={"February"}/>
                <ScheduleButtonComponent label={"March"}/>
                <ScheduleButtonComponent label={"April"}/>
                <ScheduleButtonComponent label={"May"}/>
                <ScheduleButtonComponent label={"June"}/>
            </div>
            <div>
                <ScheduleButtonComponent label={"July"}/>
                <ScheduleButtonComponent label={"August"}/>
                <ScheduleButtonComponent label={"September"}/>
                <ScheduleButtonComponent label={"October"}/>
                <ScheduleButtonComponent label={"November"}/>
                <ScheduleButtonComponent label={"December"}/>
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