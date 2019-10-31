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
                <div class="container">
            <section class="main row">
                <h3>Registra tu local</h3>
                <hr></hr>
                <form action="" class="">
                    <div class="form-group row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="nombre_local">Nombre del local</label>
                                <input type="text" class="form-control" id="nombre_local"></input> 
                            </div>  
                        </div>            
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="lugar">Localidad</label>
                                <Select name="lugar" options = {optionlugar} className="form-control" id="lugar" placeholder= 'Ubicación del local'></Select>
                            </div> 
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12"> 
                            <div class="form-group">
                                <label for="direccion_local">Dirección del local</label>
                                <label for="direccion_local" class="sr-only">Ej: 123 e/ 59 y 52</label>
                                <input type="text" class="form-control" id="direccion_local" placeholder="123 e/ 59 y 52"></input>  
                            </div>    
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="fotos_local"> Fotos del local</label>
                                <input name="uploadedfile" class="form-control" id="fotos_local" type="file" />
                                <p class="help-block">Maximo 50 MB</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="descripcion_local">Descripción del local</label>
                                <textarea name="descripcion" class="form-control" id="descripcion_local" maxlength="1000" placeholder="Escribe la descripción del local aqui." cols= "50"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <p class="form_text">Categorías</p>
                            </div>
                        </div> 
                        <div class="form-group row px-4">
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="defaultInline1"></input>
                                    <label class="custom-control-label" for="defaultInline1">Bares</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="defaultInline2"></input>
                                    <label class="custom-control-label" for="defaultInline2">Restaurantes</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4">  
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="defaultInline3"></input>
                                    <label class="custom-control-label" for="defaultInline3">Bailables</label>
                                </div>
                            </div> 
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <p class="form_text">Servicios</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="aire"></input>
                                    <label class="custom-control-label" for="aire">Aire acondicionado</label>
                                </div>
                            </div>
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="cerveza_artesanal"></input>
                                    <label class="custom-control-label" for="cerveza_artesanal">Cerveza artesanal</label>
                                </div>
                            </div>
                            <div class="form-group px-4">  
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="entrada_gratis"></input>
                                    <label class="custom-control-label" for="entrada_gratis">Entrada gratis</label>
                                </div>
                            </div> 

                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="estacionamiento"></input>
                                    <label class="custom-control-label" for="estacionamiento">Estacionamiento</label>
                                </div>
                            </div>
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="guardarropa"></input>
                                    <label class="custom-control-label" for="guardarropa">Guardarropa</label>
                                </div>
                            </div>
                            <div class="form-group px-4">  
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="happy_hour"></input>
                                    <label class="custom-control-label" for="happy_hour">Happy Hour</label>
                                </div>
                            </div> 

                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="jenga"></input>
                                    <label class="custom-control-label" for="jenga">Jenga</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="juegos_mesa"></input>
                                    <label class="custom-control-label" for="juegos_mesa">Juegos de mesa</label>
                                </div>
                            </div>
                            <div class="form-group px-4">  
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="pool"></input>
                                    <label class="custom-control-label" for="pool">Pool</label>
                                </div>
                            </div> 
                        
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="sector_fumador"></input>
                                    <label class="custom-control-label" for="sector_fumador">Sector fumador</label>
                                </div>
                            </div>
                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="show"></input>
                                    <label class="custom-control-label" for="show">Show</label>
                                </div>
                            </div>
                            <div class="form-group px-4">  
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="television"></input>
                                    <label class="custom-control-label" for="television">Televisión</label>
                                </div>
                            </div> 

                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="tenedor_libre"></input>
                                    <label class="custom-control-label" for="tenedor_libre">Tenedor libre</label>
                                </div>
                            </div>

                            <div class="form-group px-4">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="wifi"></input>
                                    <label class="custom-control-label" for="wifi">Wifi</label>
                                </div>
                            </div>
                        </div>         
                    </div>
                    <div class="form-group">
                        <div class="col-12 px-4">
                            <button class="btn btn-primary">Cargar local</button>
                         </div>
                    </div>
                    
                </form>
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