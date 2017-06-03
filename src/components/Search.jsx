var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onInput={(e) => props.onSearch(document.getElementsByClassName('form-control')[0].value)}/>
    <button className="btn hidden-sm-down" onClick={(e) => props.onSearch(document.getElementsByClassName('form-control')[0].value)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
