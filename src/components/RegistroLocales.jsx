import React, { Component } from 'react';
import Select from 'react-select';

const optionlugar = [
    { value: 'caba', label: 'CABA'},
    { value: 'florenciovarela', label: 'Florencio Varela'},
    { value: 'laplata', label: 'La Plata'},
    { value: 'quilmes', label: 'Quilmes'}
];

class RegistroLocales extends Component {
    render() {
        return (
            <div className="RegistroLocales">
            <div className="container">
            <section className="main row">
                <div className="col-xs-12 col-sm-8 col-md-9">
                    <h3>Registra tu local</h3>
                    <hr></hr>
                    <form action="#">
                        <div className="form-group row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <label>Nombre del local</label>
                                    <br></br><input className="form-control " type="text" id="nombre_local"></input>
                            </div>            
                            <div className="col-xs-12 col-sm-12 col-md-12"> <hr></hr>
                                <label>Localidad</label>
                                <br></br>
                                <Select name="lugar" options ={optionLugar}  className="form-control" id="lugar" placeholder= 'Ubicación del local'></Select>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12"> 
                                <label>Dirección del local</label>
                                    <br></br><input className="form-control " type="text" id="direccion_local" placeholder="123 e/ 59 y 52"></input>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12"><hr></hr>
                                <label> Fotos del local</label><br></br>
                                <input name="uploadedfile" type="file" /><br></br>     
                            </div>
                           <div className="col-xs-12 col-sm-12 col-md-12">
                                <label>Descripción del local</label>
                                <br></br><textarea className="form-control " name="descripcion" maxlength="1000" placeholder="Escribe la descripción del local aqui." cols= "50"></textarea>
                           </div>
                           
                            <div className="col-md-12">
                                <p>Categorías</p>
                            </div>
                            
                            <div className="col-xs-12 col-sm-12 col-md-4"> <br></br>
                                <div className="form-check-label">
                                    <label className="form-check-label"></label>
                                    <input className="form-control " type="checkbox" name="categoria_bar" id="categoria_bar" className="form-check-input mr-2">Bares</input>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">  <br></br>   
                                <div className="form-check-label">
                                    <label  className="form-check-label"></label> 
                                    <input className="form-control " type="checkbox" name="categoria_restaurante" id="categoria_restaurante" className="form-check-input mr-2">Restaurantes</input>
                                                         
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4"> <br></br>
                                <div className="form-check-label">
                                    <label  className="form-check-label"></label>
                                    <input className="form-control " type="checkbox" name="categoria_balialble" id="categoria_bar" className="form-check-input mr-2">Bailables</input>                     
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <button className="btn  btn-dark" type="submit">Cargar local</button>
                    </form>
                </div>
            </section>
        </div>
        <br></br>
            <footer>
                <div className="container bg-dark text-light text-center p-2">
                    <p>Wed creada para aprobar Proyecto</p>
                </div>
            </footer>
        </div>
        )
    }
}

export default RegistroLocales;