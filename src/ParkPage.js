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
            <div className="park-page">
                <div className='headerImage' style={{backgroundImage: `url(${this.state.images[0]})`}}>
					<h1 className='parkName'>{this.state.parkName}</h1>
                    </div>
                <p className='park-description'>{this.state.description}</p>
                <h3 className='section-title'>Address</h3>
                <p className='address'>{this.state.addresses.line1}</p>
                <p className='address'>{this.state.addresses.city}, {this.state.addresses.stateCode}, {this.state.addresses.postalCode}</p>
                <h3 className='section-title'>Directions</h3>
                <p className='directions'>{this.state.directions}</p>

                <div className='button'>
						<h4>Read More</h4>
					</div>

                <h3 className='section-title'>Images</h3>
                <div className='parkImages'>
						<div className='parkImage' style={{backgroundImage: `url(${this.state.images[0]})`}}></div>
						<div className='parkImage' style={{backgroundImage: `url(${this.state.images[1]})`}}></div>
						<div className='parkImage' style={{backgroundImage: `url(${this.state.images[2]})`}}></div>
						<div className='parkImage' style={{backgroundImage: `url(${this.state.images[3]})`}}></div>
						<div className='parkImage' style={{backgroundImage: `url(${this.state.images[4]})`}}></div>
					</div>

                    <Link className='home-link' to='/'>
                    <div className='button'>
						<h4 className='home-link'>Home Page</h4>
                        </div>
					</Link>
            </div>
        );
    }
}

export default ParkPage;