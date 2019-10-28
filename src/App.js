import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Registro from './components/Registrarse.jsx';
import About from './components/About.jsx';
import Sesion from './components/Sesion.jsx'
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path='/inicio' component={Main}/>
          <Route path='/registro' component={Registro}/>
          <Route path='/about' component={About}/>
          <Route path='/iniciosesion' component={Sesion}/>
        </div>
      </Router>
    )
  }
}

export default App;