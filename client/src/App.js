import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NewArtist from './components/NewArtist'
import GlobalNav from './components/GlobalNav.js';
import { setAxiosDefaults } from './util';

class App extends Component {
  componentWillMount(){
    setAxiosDefaults()
  }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/newartist" component={NewArtist} />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/artist/:id" component={Artist}/>
        </div>
      </Router>
    );
  }
}

export default App;