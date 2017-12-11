import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Dashboard.css"

class Dashboard extends Component {
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return (
        <li className="stocks-stock" key={i}>
           {stock.name} <Link to={pathname}>{stock.symbol}</Link>
         </li>
      )
    })
    return (
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          {stocks}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
