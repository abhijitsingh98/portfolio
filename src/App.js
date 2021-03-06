import React from 'react';
import { Header } from "./components/Header"
import { createBrowserHistory } from "history";

export default class App extends React.Component {

    history = createBrowserHistory();

    constructor(props) {
        super(props);
        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("body").style.visibility = "hidden";
                document.querySelector("#loader").style.visibility = "visible";
            } else {
                document.querySelector("#loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible";
            }
        };
    }

    render() {
        return ( 
        <div className = "container-fluid p-0" >
            <Header history={this.history}/>
            <div id = "loader" className = "bg-primary position-absolute" > Loading..... </div> 
        </div>)
    }
}