import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react'
import NavComponent from './Components/NavComponent.js'
import HeaderComponent from './Components/HeaderComponent';
import Helmet from 'react-helmet';
import LoginFormComponent from "./Components/LoginForm";
import RegisterFormComponent from "./Components/RegisterForm";
import ScheduleFormComponent from "./Components/ScheduleFormComponent";
import LogoutPage from "./Components/LogoutPage";
import ScheduleButtonComponent from "./Components/ScheduleButtonComponent";
import CalendarComponent from "./Components/CalendarComponent";
import {BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import RouterContext from "react-router/modules/RouterContext";

function App(props) {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      setLoggedIn(loggedIn);
    });

    return (
        <div>
            <Router history={useHistory()} forceRefresh={true}>
                <NavComponent history={props.history}/>

                <Route exact path='/' component={LoginFormComponent}/>
                <Route path='/login' component={LoginFormComponent}/>
                <Route path='/logout' component={LogoutPage}/>
                <Route path='/register' component={RegisterFormComponent}/>
                <Route path='/calendar' component={CalendarComponent}/>
                <Route path='/schedule' component={ScheduleFormComponent}/>
            </Router>
        </div>
    );
}
export default App;
