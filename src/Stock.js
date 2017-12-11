import React, { Component } from 'react'

class Stock extends Component {
  render() {
    let stock = this.props.stocks.find((stock) => stock.symbol === this.props.match.params.symbol)
    return (
      <div>
        <h2>{stock.name} ({stock.symbol})</h2>
        <ul>
          <li>Current Price: {stock.lastPrice}</li>
          <li>Change: {stock.change}</li>
          <li>High: {stock.high}</li>
          <li>Low: {stock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
