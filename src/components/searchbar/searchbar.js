import React from 'react';
import './searchbar.css';

let sortByOptions = {
  'Best Match':'best-match',
  'Highest Rated':'rating',
  'Most Reviewed':'review_count',
}

class SearchBar extends React.Component{
  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          renderSortByOptions()
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
