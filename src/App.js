import React from 'react';
import './App.css';
import { BusinessList } from './components/business/business.js'
import SearchBar from'./components/searchbar/searchbar.js'


class App extends React.Component {
  render() {
    return (
      <div class="App">
  <h1>ravenous</h1>
  
  <BusinessList />
</div>
    )
  }
}

export default App;
