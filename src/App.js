import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import FooterApp from './Components/FooterApp'
import NavbarApp from './Components/NavbarApp'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Error404 from './Pages/Error404'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarApp />
        <div className="section has-text-centered">
          <div className="container has-fluid">
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/detail/:id" component={ Detail }/>
              <Route component={ Error404 }/>
            </Switch>
            </div>
          </div>
        <FooterApp />
      </div>
    );
  }
}

export default App;
