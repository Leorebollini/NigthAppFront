import React, { Component } from 'react';
import './App.css';

import Navegador from './components/Navegador.jsx';
import Registrarse from './components/Registrarse.jsx';
import Header from './components/Header.jsx';
import FormLugar from './components/FormLugar.jsx';
import Categorias from './components/Categorias.jsx';
import BtnBuscar from './components/BtnBuscar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navegador/>
          <Header/>
          <FormLugar/>
          <Categorias/>
          <BtnBuscar/>

        </div>
      </div>
    )
  }
}

export default App;