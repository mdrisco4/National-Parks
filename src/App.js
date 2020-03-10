import React, { Component } from "react";
// import "./ParksList.css";
import { Route, Link } from "react-router-dom";
import ParkPage from "./ParkPage.js";
import "./App.css";
import ParksList from "./ParksList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
    this.setName = this.setName.bind(this);
  }

  setName(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <Link className="home" to="/">
        <h3 className="header">National Parks List</h3>
        </Link>
        <div className="grid-cont">
          <main className="main">
            <Route path="/" exact component={ParksList} />
            <Route
              path="/parkPage/:parkCode"
              render={props => <ParkPage {...props} />}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
