import React, { Component } from 'react';

class BtnBuscar extends Component {
  render() {
    return (
        <div className = "BtnBuscar">  
            <div className="form-group  row  px-4">
                <div className="col">
                <button className="btn  btn-dark" type="submit">Buscar</button>
                </div>
            </div>
        </div> 
    )
  }
}
export default BtnBuscar;