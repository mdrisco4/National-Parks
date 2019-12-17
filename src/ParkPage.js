import React, { Component } from 'react';
// import Parks from './data/parks.json';

const apiKey = "VmbEdcKlJcXq26ymElH8scgVWbRSSvvsiEXkt6Qv"
const parkURL = "https://developer.nps.gov/api/v1/parks"


class ParkPage extends Component {
    // constructor (props){
    //     super(props)
    // }
    componentDidMount () {
        // const description = this.props.description;
        // const address = this.props.address;
        // const directions = this.props.directions

        fetch(parkURL + "&api_key=" + apiKey)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        }
        )}
    render() {
        return (
            <div>
                <img src="" alt="familyphoto"/>
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