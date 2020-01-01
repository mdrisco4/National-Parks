import React, { Component } from 'react';
import Parks from './data/parks.json';
import "./ParksList.css"
import { Route, Link } from "react-router-dom";
import ParkPage from "./ParkPage.js"
import './App.css';
// import ParksList from "./ParksList.js"
// import ParkPage from "./ParkPage.js"




class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          description: null,
          directions: null,
          name: null
      };
      this.setDescription = this.setDescription.bind(this)
      this.setDirections = this.setDirections.bind(this)
      this.setName = this.setName.bind(this)
  }
      setDescription(description) {
          this.setState({ description: description });
      }
      setDirections(directions) {
          this.setState({ directions: directions });
      }
      setName(name) {
          this.setState({ name: name })
  }
  render() {
      let list = Parks.map(item => {
          return (
              <Link to={"/parkpage/" + item.parkcode} className="parkName" key={item.name} style ={ { backgroundImage: `url(${item.images[0].url})` } } >
                  {item.parkcode}
                  <p className="title" >{item.name}</p>
              </Link>
          )
      });
      return (
        <div>
          <h3 className="header">National Parks List</h3>
          <main>
            <div className="grid-cont">
              {list}
            <Route 
              path="/parkpages/:park"
              render={routerProps => (
                  <ParkPage
                  {...routerProps}
                  {...this.state}
                  setDescription={this.setDescription}
                  setDirections={this.setDirections}
                  setName={this.setName}
                  />
              )}
              />
            </div>
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
