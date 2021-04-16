import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavComponent from './Components/NavComponent.js'
import HeaderComponent from './Components/HeaderComponent';
import Helmet from 'react-helmet';
import LoginFormComponent from "./Components/LoginForm";
import ScheduleFormComponent from "./Components/ScheduleFormComponent";
import ScheduleButtonComponent from "./Components/ScheduleButtonComponent";
import CalendarComponent from "./Components/CalendarComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <NavComponent/>
                <Router>
                    <Route exact path='/' component={LoginFormComponent}/>
                    <Route path='/login' component={LoginFormComponent}/>
                    <Route path='/calendar' component={CalendarComponent}/>
                    <Route path='/schedule/create' component={ScheduleFormComponent}/>
                    {/*<Route path='/schedule' component={Schedule}/>*/}
                </Router>
        </div>
    );
}
export default App;
