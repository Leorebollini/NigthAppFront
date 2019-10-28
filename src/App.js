import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import Select from 'react-select';
import Navegador from './components/Navegador.jsx';
import Registrarse from './components/Registrarse.jsx';
import { directive } from '@babel/types';
=======
import Navbar from './components/Navbar.jsx'
=======
import Navbar from './components/Navbar.jsx';
>>>>>>> f97acde88d14daff2b8430dba3901cc270537b83
import Main from './components/Main.jsx';
import Registro from './components/Registrarse.jsx';
import About from './components/About.jsx';
import Sesion from './components/Sesion.jsx'
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from 'react-router-dom';
>>>>>>> 814d92860242157dc2a250af6a6ca93ab9cc803e

class App extends Component {
  render() {
<<<<<<< HEAD
    return (// formulario de registro 
      <div className="Registro">
        <div className="container">

        
        <Navegador/>
        <section className="row m-4">
              <div className="col-xs-12 col-sm-8 col-md-9">
              <form action="#">
                  <div className="form-group row">
                      <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                          <label for="Nombre" className="form_text">Nombre</label><br></br>
                          <input className="form-control " type="text"></input>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                          <label for="Apellido" className="form_text">Apellido</label><br></br>
                          <input className="form-control " type="text"></input>
                      </div>   
                  </div>
                  <div className="form-group row">
                      <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                          <label for="usermane" className="form_text">Nombre de usuario</label><br></br>
                          <input className="form-control " type="text"></input>
                      </div>   
                  </div>
                  <div className=" form-group row">
                      <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                      <label for="Contraseña" className="form_text">Contraseña</label><br></br>
                          <input className="form-control " type="password"></input>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                      <label for="Contraseña_conf" className="form_text">Confirmar contraseña</label><br></br>
                          <input className="form-control " type="password"></input>
                      </div>
                      </div>
                      <div className=" form-group row">
                      <div className="col-xs-12 col-sm-12 col-md-6">
                      <label for="email" className="form_text">E-mail</label><br></br>
                          <input className="form-control " type="email"></input>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6">
                      <label for="tel" className="form_text">Teléfono</label><br></br>
                          <input class="form-control " type="tel"></input>
                      </div>
                      </div>
                      <div className=" form-group row">
                      <div className="col">
                      <label for="Contraseña" className="form_text">Acepto los <a href="#">términos y condiciones.</a> </label>
                          <input type="checkbox"></input>
                      </div>
                      </div>
                      <div className=" form-group  row">
                      <div className="col">
                              <button className="btn  btn-dark" type="submit">Enviar</button>
                          </div>
                      
                  </div>                
                  </form>
              </div>

              <aside className="col-xs-12 col-sm-4 col-md-3 p-2">
                <div className="card  p-3">
                        <img src="img/beer.jpg" className="card-img-top img-fluid" alt=""></img>
                        <div className="card-block">
                            <h3 className="card-title">Beer</h3>
                            <p className="card-text">Cervecería artesanal. </p>
                    </div>
                </div>
               <br></br>
              <div className="card  p-3">
                      <img src="img/Dj.jpg" className="card-img-top img-fluid" alt=""></img>
                      <div className="card-block">
                          <h3 className="card-title">Phoenix</h3>
                          <p className="card-text">Techno - Dance - Electrónica. </p>
                      </div>
                  </div>
              </aside>
          </section>
          </div>
      </div>
      
      
      
      
      
    )
  }
}

export default App;

/*
      <div className="App">
        
        <Navegador/>
        <div className="container">
          <br></br>
          <div className="col-xs-12 col-sm-8 col-md-9" style={{marginLeft: "8em"}}>
            <h3>¡Buscá tu lugar!</h3>
            <br></br>
            <form action="consulta.html">
              <div className="form-group row">
                <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                  <label for="Lugar" className="form_text">Ubicación</label>
                  <Select name="lugar" options = {optionsLugar}  className="form-control" id="lugar" placeholder= 'Seleccione la ubicación' onChange="mostrar_bloque(this)"></Select>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 mb-3"  id="distancia_maxima" >                                
                  <label for="distancia" className="form_text">Distancia máxima</label>
                  <Select name="distancia" options = {optionsDistacia}  className="form-control" id="distancia" placeholder= 'Seleccione una distancia'></Select>
                </div>    
              </div>
            </form>
          </div>
          <div className = "Categorias">  
            <div className="row">
              <div className="col-12">
                  <p className="form_text">Categorías</p>
              </div>
            </div>
            <div className=" form-group row  px-4">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="form-check-label">
                  <label className="block-check">
                    <img className="img-fluid" src="img/boton_bar.jpg"></img>
                    <input type="checkbox" name="categoria_bar" id="categoria_bar"/>Bares
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">                    
                <div className="form-check-label">
                  <label className="block-check">
                    <img className="img-fluid" src="img/boton_restaurante.jpg"></img>
                    <input type="checkbox" name="categoria_restaurante" id="categoria_restaurante"/>Restaurantes
                    <span className="checkmark"></span>
                  </label>                      
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="form-check-label">
                  <label className="block-check">
                    <img className="img-fluid" src="img/boton_discoteca.jpg"></img>
                    <input type="checkbox" name="categoria_boliche" id="categoria_boliche"/>Boliches
                    <span className="checkmark"></span>
                  </label>                      
                </div>
              </div>
            </div>
          </div>
          <div className = "BtnBuscar">  
            <div className="form-group  row  px-4">
              <div className="col">
                <button className="btn btn-dark" type="submit" onClick={<Navegador/>}>Buscar</button>
              </div>
            </div>
          </div> 
        </div>
      </div>*/
=======
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
>>>>>>> 814d92860242157dc2a250af6a6ca93ab9cc803e
