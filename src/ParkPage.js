import React, { Component } from 'react';
// import Parks from './data/parks.json';



class ParkPage extends Component {
    componentDidMount () {
        const apiKey = "VmbEdcKlJcXq26ymElH8scgVWbRSSvvsiEXkt6Qv"
        const parkURL = "https://developer.nps.gov/api/v1/parks"
            // const description = this.props.match.params.description
            // const directions = this.props.match.params.directions
            const name = this.props.match.params.name
            
        fetch(parkURL + "?api_key=" + apiKey)
        .then(res => res.json())
        .then(res => {
            // let newDescription = res[description]
            // this.props.setDescription(newDescription)
            // let newDirections = res[directions]
            // this.props.setDirections(newDirections)
            let newName = res[name]
            this.props.setName(newName)
            console.log(res)
        })
       
       
       
        // .catch(err => {
        //     console.error(err)
        // })
    }
    render() {
        return (
            <div className="park">
                <img src="" alt="pics"/>
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