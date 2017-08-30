import React from 'react';
import './App.css';
import businesslist from 'src/components/business/business.js'
import searchbar from'src/components/searchbar/searchbar.js'


class App extends Component {
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
