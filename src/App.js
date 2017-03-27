import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import axios from "axios"
import Dashboard from "./Dashboard"
import Search from "./Search"
import About from "./About"
import Stock from "./Stock"
import "./App.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      hasTracked: false
    }
    this.handleTrackedState = this.handleTrackedState.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3000/stocks").then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }
  handleTrackedState(newStock){
    let tempArray = this.state.stocks
    tempArray.push(newStock)
    this.setState({
      stocks: tempArray,
      hasTracked: true
    })
  }
  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>

          <div className="main">
            <Route exact path="/" render={() => <Dashboard stocks={this.state.stocks} />} />
            <Route path="/search" render={() => {
              if(this.state.hasTracked){
                return <Redirect to="/stocks" />
              }
              return <Search handleTrackedState={this.handleTrackedState} />
            }} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" component={Stock} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
