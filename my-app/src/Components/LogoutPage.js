import React, {useState, useEffect} from 'react'
import TextBoxComponent from "./TextBoxComponent";
import { withRouter } from "react-router";

function LogoutPage(props) {
    const { history } = props;

    window.sessionStorage.clear();
    console.log(window.sessionStorage);

    return (
        <text>
            You have been logged out.
        </text>
    );
}

export default LogoutPage;