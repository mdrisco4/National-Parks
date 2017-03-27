import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.stock.name} ({this.state.stock.symbol})</h2>
        <ul>
          <li>Current Price: {this.state.stock.lastPrice}</li>
          <li>Change: {this.state.stock.change}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
