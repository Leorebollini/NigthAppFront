import React, {Component} from 'react'
import Select from 'react-select';

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
                    <label for="Lugar" className="form_text">Ubicación</label>
                    <Select name="lugar" options = {optionsLugar}  className="form-control" id="lugar" placeholder= 'Seleccione la ubicación' onChange={this.handleChange}></Select>
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
                  <button className="btn btn-dark" type="submit">Buscar</button>
                </div>
              </div>
            </div> 
          </div>
          <footer>
            <div class="container bg-dark text-light p-2">
              <p>Wed creada para aprobar Proyecto</p>
            </div>
          </footer>
        </div>
      )
    }
  }

export default Main