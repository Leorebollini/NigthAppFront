import React, { Component } from 'react';
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


class FormLugar extends Component {
  render() {
    return (
        <div className = "FormLugar">  
            <div className="container">
                <div className="col-xs-12 col-sm-8 col-md-9">
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
            </div>
        </div>
    )
  }
}

export default FormLugar;