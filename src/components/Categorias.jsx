import React, { Component } from 'react';

class Categorias extends Component {
  render() {
    return (
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
    )
  }
}

export default Categorias;