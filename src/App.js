import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Registro from './components/Registrarse.jsx';
import About from './components/About.jsx';
import Sesion from './components/Sesion.jsx';
import RegistroLocales from './components/RegistroLocales.jsx';
import Consulta from './components/Consulta.jsx';
import LocalP from './components/LocalP.jsx';
import UsuarioP from './components/UsuarioP.jsx';
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
          <Route path='/RegistroLocales' component={RegistroLocales}/>
          <Route path='/LocalP' component={LocalP}/>
          <Route path='/Consulta' component={Consulta}/>
          <Route path='/UsuarioP' component={UsuarioP}/>
        </div>
      </Router>
    )
  }
}

export default App;