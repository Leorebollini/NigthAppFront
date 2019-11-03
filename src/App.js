import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Registro from './components/Registrarse.jsx';
import About from './components/About.jsx';
import Sesion from './components/Sesion.jsx';
import RegistroLocales from './components/RegistroLocales.jsx';
import LocalP from './components/LocalP.jsx';
import Consulta from './components/Consulta.jsx';
import Recuperar from './components/RecuperarC.jsx'
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
          {/* <Route path='/about' component={LocalP}/> */}
          <Route path='/Consulta' component={Consulta}/>
          <Route path='/recuperarcontraseña' component={Recuperar}/>
        </div>
      </Router>
    )
  }
}

export default App;