import React, { Component } from 'react';
import "./ParkPage.css";
import { Link } from 'react-router-dom';



class ParkPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            images: [],
            parkName: null,
            description: null,
            addresses: [],
            directions: null
        }
    }
    componentDidMount() {
        // const apiKey = "VmbEdcKlJcXq26ymElH8scgVWbRSSvvsiEXkt6Qv"
        let parkCode = this.props.match.params.parkCode
        let parkURL = 'https://developer.nps.gov/api/v1/parks?parkCode=' + parkCode + '&fields=addresses,images&api_key=VmbEdcKlJcXq26ymElH8scgVWbRSSvvsiEXkt6Qv'


        fetch(parkURL)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.data })
                this.setState({ parkName: res.data[0].name })
                this.setState({ description: res.data[0].description })
                this.setState({ directions: res.data[0].directionsInfo })
                this.state.data[0].images.map(image => {
                    this.setState({ images: [...this.state.images, image.url] })
                })
                this.setState({ addresses: res.data[0].addresses[0] })
            })
            .catch(err => {
                console.error(err)
            })



        // console.log(res)
    }
    render() {
        return (
            <div className="park">
                <div className='headerImage' style={{backgroundImage: `url(${this.state.images[0]})`}}>
					<h1 className='parkName'>{this.state.parkName}</h1>
                    </div>
                <p>{this.state.description}</p>
                <h3>Address</h3>
                <p>{this.state.addresses.line1}</p>
                <p>{this.state.addresses.city}, {this.state.addresses.stateCode}, {this.state.addresses.postalCode}</p>
                <h3>Directions</h3>
                <p>{this.state.directions}</p>
            </div>
        );
    }
}

export default ParkPage;