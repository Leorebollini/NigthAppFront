import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx';
import Registro from './components/Registrarse.jsx'
import About from './components/About.jsx'
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from 'react-router-dom';


const optionsLugar = [
  { value: 'ubicacion', label: 'Ubicación actual'},
  { value: 'caba', label: 'CABA'},
  { value: 'florenciovarela', label: 'Florencio Varela'},
  { value: 'laplata', label: 'La Plata'},
  { value: 'quilmes', label: 'Quilmes'}
];
const optionsDistacia = [
  { value: '5km', label: '5 km'},
  { value: '10km', label: '10 km'},
  { value: '15km', label: '15 km'},
  { value: '20km', label: '20 km'},
  { value: '50km', label: '50 km'}
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path='/inicio' component={Main}/>
          <Route path='/registro' component={Registro}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;