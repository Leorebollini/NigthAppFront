import React, { Component } from 'react';
import Select from 'react-select';

class FormLugar extends Component {
    constructor(props){
        super(props);
        this.state = {value : 'none'};
        this.optionsState = {value : 'CualquierDistancia'};
    }

  render() {
    return (
        <div className = "FormLugar">  
            <div className="container">
                <div class="col-xs-12 col-sm-8 col-md-9">
                    <h3>¡Buscá tu lugar!</h3>
                    <br></br>
                        <form action="consulta.html">
                        <div class="form-group row">
                            <div class="col-xs-12 col-sm-12 col-md-6 mb-3">
                                <label for="Lugar" class="form_text">Ubicación</label>
                                <Select name="lugar" class="form-control" id="lugar" value={this.state.value} onChange="mostrar_bloque(this)">
                                <option value="none" selected>Selecciona la ubicación</option>
                                <option value="ubicacion" selected>Ubicación actual</option>
                                <option value="caba">CABA</option>
                                <option value="florenciovarela">Florencio Varela</option>
                                <option value="laplata">La Plata</option>
                                <option value="quilmes">Quilmes</option>
                                </Select>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 mb-3"  id="distancia_maxima" >
                                
                                <label for="distancia" class="form_text">Distancia máxima</label>
                            <Select name="distancia" class="form-control" id="distancia" value={this.optionsState.value}>
                                <option value="CualquierDistancia" selected>Cualquier distancia</option>
                                <option value="5km">5 km</option>
                                <option value="5km">10 km</option>
                                <option value="5km">15 km</option>
                                <option value="5km">20 km</option>
                                <option value="5km">50 km</option>
                            </Select>
                            </div>    
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

export default FormLugar;