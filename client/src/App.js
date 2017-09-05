import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Artist from './components/Artist'
import AllArtists from './components/AllArtists'
import SignUp from './components/SignUp'
import GlobalNav from './components/GlobalNav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists} />
          <Route path="/artist/:id" component={Artist} />
          <Route exact path="/signup" component={SignUp} />

        </div>
      </Router>
    );
  }
}

export default App;
