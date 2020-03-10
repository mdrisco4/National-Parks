import React, { Component } from 'react';
import Parks from './data/parks.json';
import "./ParksList.css"
import { Route, Link } from 'react-router-dom'
import ParkPage from "./ParkPage.js"

const url = 'https://developer.nps.gov/api/v1/parks?fields=images&api_key=JpeRLD88Kje4QzduiQe1faC6SKfFZkpm12YsXH75'

class ParksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: [],
            parkcodes: [],
            images: []
        };
    }
    componentDidMount() {
        fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res.data })
				this.state.data.map(code => {
					this.setState({ parkCodes: [...this.state.parkCodes, code.parkCode] })
                    this.setState({ images: [...this.state.images, code.images[0].url] })
                    console.log(res.data)
				})
			})
    }
    }
    render() {
        let list = this.state.data.map(item => {
            return (
                <div key={item.parkCode}>
                <Link to={'/parkPage/' + item.parkCode} className='parkName'>
                    <div className='park' style={{backgroundImage: `url(${item.images[0].url})`}}>
                        <h4 className='title'>{item.name}</h4>
                    </div>
                </Link>
            </div>






                // <Link to={"/parkpage/:" + item.parkcode} className="parkName" key={item.name} style ={ { backgroundImage: `url(${item.images[0].url})` } } >
                //     {item.parkcode}
                //     <p className="title" >{item.name}</p>
                // </Link>
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