import React, { Component } from 'react';
import Parks from './data/parks.json';

class ParkPage extends Component {
    render() {
        return (
            <div>
                <img src=""/>
                <p>{this.props.description}</p>
                <h3>Address</h3>
                <p>{this.props.address}</p>
                <h3>Directions</h3>
                <p>{this.props.directions}</p>
            </div>
        );
    }
}

export default ParkPage;