import React, { Component } from 'react';
import './App.css';

import Navegador from './components/Navegador.jsx';
import Registrarse from './components/Registrarse.jsx';
import Header from './components/Header.jsx';
import FormLugar from './components/FormLugar.jsx';


// <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>

class App extends Component {
  /*
  componentDidMount( ){
    mostrar_bloque(sel) {  
      if (sel.value=="ubicacion"){
          $("#distancia_maxima").show();
      }else{
          $("#distancia_maxima").hide();
      }
    }
  } */
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