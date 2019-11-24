import React, { Component } from 'react'
import Select from 'react-select';
import {Link} from 'react-router-dom';

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
  class Main extends Component {

    handleChecked (event) {
      
      if(this.filter.Categorias.includes(event.target.value) && this.filter.Categorias.length>1){
          let index = this.filter.Categorias.indexOf(event.target.value)
            if (index > -1) {
              this.filter.Categorias.splice(index, 1)
            }
      }
      else{
        this.filter.Categorias.push(event.target.value)
      }
      console.dir(this.filter.Categorias)
      this.setState({update:"true"})
}

    constructor(props) {
      super(props);
      this.handleChecked = this.handleChecked.bind(this); 
      this.handleSelect = this.handleSelect.bind(this);
      this.filter = {
        Categorias: ["Bar","Restaurant","Boliche"]
      }
      
  }
  handleSelect(e){
    let distancia = document.querySelector("#distancia_maxima");
    if(e.value == 'ubicacion'){
      distancia.style.display = 'none'; 
    }else{
      distancia.style.display = 'block';
    }
  }

    render() {
      return (
        <div className="Main">
          <div className="container">
            <br></br>
            <div className="col-xs-12 col-sm-8 col-md-9" style={{marginLeft: "8em"}}>
              <h3>¡Buscá tu lugar!</h3>
              <br></br>
              <form action="consulta.html">
                <div className="form-group row">
                  
                  <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                    <label htmlFor="Lugar" className="form_text">Ubicación</label>
                    <Select name="lugar" options = {optionsLugar} id="lugar" placeholder= 'Seleccione la ubicación' onChange={this.handleSelect}></Select>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 mb-3"  id="distancia_maxima" >                                
                    <label htmlFor="distancia" className="form_text">Distancia máxima</label>
                    <Select name="distancia" options = {optionsDistacia} id="distancia" placeholder= 'Seleccione una distancia'></Select>
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
                      <input type="checkbox" checked={this.filter.Categorias.includes("Bar")} name="categoria_bar" id="categoria_bar" onChange={ this.handleChecked } value="Bar"/>Bares
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">                    
                  <div className="form-check-label">
                    <label className="block-check">
                      <img className="img-fluid" src="img/boton_restaurante.jpg"></img>
                      <input type="checkbox" checked={this.filter.Categorias.includes("Restaurant")} name="categoria_restaurante" id="categoria_restaurante" value = "Restaurant" onChange={ this.handleChecked }/>Restaurantes
                      <span className="checkmark"></span>
                    </label>                      
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                  <div className="form-check-label">
                    <label className="block-check">
                      <img className="img-fluid" src="img/boton_discoteca.jpg"></img>
                      <input type="checkbox"  checked={this.filter.Categorias.includes("Boliche")} name="categoria_boliche" id="categoria_boliche" value = "Boliche" onChange={ this.handleChecked }/>Boliches
                      <span className="checkmark"></span>
                    </label>                      
                  </div>
                </div>
              </div>
            </div>
            <div className = "BtnBuscar">  
              <div className="form-group  row  px-4">
                <div className="col">
                  <Link to={{
                    pathname:"/Consulta",
                    initialFilter :this.filter
                  }}>
                    <button className="btn btn-dark" type="submit">Buscar</button>
                  </Link>
                </div>
              </div>
            </div> 
          </div>
          <footer>
            <div className="container bg-dark text-light p-2">
              <p>Wed creada para aprobar Proyecto</p>
            </div>
          </footer>
        </div>
      )
    }
  }

export default Main;