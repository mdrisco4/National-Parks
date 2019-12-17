import React, { Component } from 'react';
import Parks from './data/parks.json';
import "./ParksList.css"
import { Route, Link } from 'react-router-dom'
import ParkPage from "./ParkPage.js"


class ParksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            directions: '',
            name: ''
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
        )
    }
}


export default ParksList;