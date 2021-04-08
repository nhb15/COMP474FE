import logo from './logo.svg';
import './App.css';
import React from 'react'
import HeaderComponent from './Components/HeaderComponent';
import Helmet from 'react-helmet';
import LoginFormComponent from "./Components/LoginForm";
import ScheduleFormComponent from "./Components/ScheduleFormComponent";
import ScheduleButtonComponent from "./Components/ScheduleButtonComponent";
import CalendarComponent from "./Components/CalendarComponent";

class App extends React.Component {

  render()
  {
    return (
        <div className="App">
            <Helmet bodyAttributes={{style: 'background-color : #16D2CB'}}/>
            <HeaderComponent userAuthority={'test'}/>
            <LoginFormComponent/>
            <ScheduleFormComponent/>
            <CalendarComponent/>
        </div>
    );
  }
}

export default App;
