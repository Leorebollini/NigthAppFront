import React, { Component } from 'react';
import './App.css';

import Navegador from './components/Navegador.jsx';
import Registrarse from './components/Registrarse.jsx';
import Header from './components/Header.jsx';
import FormLugar from './components/FormLugar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navegador/>
        <Header/>
        <FormLugar/>
      
      </div>
    )
  }
}

export default App;