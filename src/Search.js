import React, { Component } from 'react'
import $ from "jquery"
import "./Search.css"

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      searchedStock: {}
    }
  }

  handleChange(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearch(e){
    e.preventDefault()
    let url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.searchTerm
    $.ajax({
      url,
      method: "GET",
      dataType: "jsonp"
    }).then((response) => {
      this.setState({ searchedStock: response })
    })
  }

  handleTrackStock(e){
    let url = "http://localhost:3000/stocks"
    $.ajax({
      url,
      method: "POST",
      data: {
        stock: {
          name: this.state.searchedStock.Name,
          symbol: this.state.searchedStock.Symbol
        }
      },
      dataType: "json"
    }).then((response) => {
      this.props.handleTrackedState(response)
    })
  }

  render() {
    let searchResult = this.state.searchedStock.Name
                          ? (<div className="search-results-item">
                              {this.state.searchedStock.Name} ({this.state.searchedStock.Symbol})
                              <button onClick={ (e) => this.handleTrackStock(e) } className="search-btn">Track Stock</button>
                            </div>)
                          : null
    return (
      <div className="search">
        {this.state.searchedStock.name}
        <h2>Search</h2>
        <form onSubmit={ (e) => this.handleSearch(e) }>
          <input onChange={ (e) => this.handleChange(e) } type="text" />
          <input className="search-btn" type="submit" value="Search" />
        </form>
        <div className="search-results">
          { searchResult }
        </div>
      </div>
    );
  }
}

export default Search;
