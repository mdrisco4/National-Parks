import React, { Component } from 'react';
import Parks from './data/parks.json';
import "./ParksList.css"
import { /*Route,*/ Link } from 'react-router-dom'
// import ParkPage from "./ParkPage.js"


class ParksList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         description = Parks.description,
    //         address = Parks.address,
    //         directions = Parks.directions
    //     }
    
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
        <div className="grid-cont">
            {list}
        {/* <Route 
            path="/parkpages/:park"
            render={routerProps => (
                <ParkPage
                {...routerProps}
                {...this.state}
                /> */}
            
        </div>
        )
    }
}


export default ParksList;