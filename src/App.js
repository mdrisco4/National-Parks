import React, { Component } from 'react';
import './App.css';
import { Route/*, Link*/ } from "react-router-dom";
import ParksList from "./ParksList.js"
// import ParkPage from "./ParkPage.js"


class App extends Component {
  render() {
    return (
        <div>
          <h3 className="header">National Parks List</h3>
          <main>
          <Route path="/ParksList" component={ParksList} />
          </main>
          <div className="footer">
            <p>National Parks Services</p>
            <h3>U.S. Department of Labor</h3>
          </div>
        </div>
    );
  }
}

export default App;
