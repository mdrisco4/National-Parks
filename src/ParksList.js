import React, { Component } from "react";
import "./ParksList.css";
import { Link } from "react-router-dom";

const url =
  "https://developer.nps.gov/api/v1/parks?fields=images&api_key=VmbEdcKlJcXq26ymElH8scgVWbRSSvvsiEXkt6Qv";

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
        this.setState({ data: res.data });
        this.state.data.map(code => {
          this.setState({
            parkCodes: [...this.state.parkCodes, code.parkCode]
          });
          this.setState({ images: [...this.state.images, code.images[0].url] });
        });
        console.log(res.data);
      });
  }

  render() {
    let list = this.state.description.map(item => {
      return (
        <div key={item.parkCode}>
          <Link to={"/parkPage/" + item.parkCode} className="parkName">
            <div
              className="park"
              style={{ backgroundImage: `url(${item.images[0].url})` }}
            >
              <h4 className="title">{item.name}</h4>
            </div>
          </Link>
        </div>
      );
    });
    return <div className="parkList">{list}</div>;
  }
}

export default ParksList;
