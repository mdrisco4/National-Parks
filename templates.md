You are welcome to use the following as starter HTML templates for your components...

#### Navigation

```html
<div className="nav">
  <div className="nav-item"><span className="nav-logo">iStocks</span></div>
  <div className="nav-item"><Link to="/">Home</Link></div>
  <div className="nav-item"><Link to="/search">Search</Link></div>
  <div className="nav-item"><Link to="/about">About</Link></div>
</div>
```

#### Dashboard

```html
<div className="stocks">
  <h2>Stocks</h2>
  <ul className="stocks-list">
    <li>This is a stock.</li>
  </ul>
</div>
```

#### Stock

```html
<div>
  <h2>Stock Name (Stock Symbol)</h2>
  <ul>
    <li>Current Price: </li>
    <li>Change: </li>
    <li>High: </li>
    <li>Low: </li>
  </ul>
</div>
```

#### Search

```html
<div className="search">
  <h2>Search</h2>
  <form>
    <input type="text" />
    <input type="submit" value="Search" />
  </form>
  <div className="search-results">
    Search result(s) goes here.
  </div>
</div>
```
