import React, {Component} from 'react';

class UsuarioP extends Component{
    render(){
        return(
            <div classNameName = "UsuarioP">
                <div className="container">
                    <section className="row m-4">
                        <div className="col-xs-12 col-sm-8 col-md-9">

                        
                        <div className="row">
                            <div className="col-xs-12"><h2>Perfil de Usuario</h2></div>
                        </div>
                    <br />

                    <form className="form-horizontal">

                            <div className="form-group">
                                    <label className=" control-label" for="formGroup">Nombre de Usuario</label>
                                    <div className="col-6">
                                    <input className="form-control" type="text" id="formGroup" value="Usuario" disabled />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Nombre</label>
                                    <div className="col-6">
                                    <input className="form-control" type="text" id="formGroup" placeholder="Tu nombre"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Apellidos</label>
                                    <div className="col-6">
                                    <input className="form-control" type="text" id="formGroup" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup" id="tel">Teléfono</label>

                                    <div className="input-group col-6">
                                    <span className="input-group-addon"><span className="glyphicon glyphicon-phone"></span></span>
                                    <input className="form-control" type="text" id="formGroup" />
                                    
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup" id="tel">Correo electrónico</label>
                                    <div className="input-group col-6">
                                    <input className="form-control" type="email" id="formGroup" placeholder="example@hotmail.com"/>
                                    
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Información biográfica</label>
                                    <div className="col-6">
                                    
                                    <textarea className="form-control" rows="4"></textarea>
                                    
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Estado</label>
                                    <div className="col-6">
                                    
                                    <select className="form-control">
                                        <option>En línea</option>
                                        <option>Ocupado</option>
                                        <option>Ausente</option>
                                        <option>Desconectado</option>
                                        
                                    </select>
                                    
                                    </div>
                                </div>
                            
                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Alias</label>
                                    <div className="col-6">
                                    <input className="form-control" type="text" id="formGroup"/>
                                    <span className="help-block">Este nombre sera mostrado a los usuarios, ocultando el verdadero nombre.</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Cuenta</label>
                                    <div className="col-sm-4">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="activar" name="radioOption" checked/>
                                            <label className="custom-control-label" for="activar">Activar</label>
                                        </div>

                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="desactivar" name="radioOption"/>
                                            <label className="custom-control-label" for="desactivar">Desactivar</label>
                                        </div>                                      
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col control-label" for="formGroup">Mostrar Información</label>
                                    <div className="col-sm-4">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="Nombre" checked disabled/>
                                            <label className="custom-control-label" for="Nombre">Nombre</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="Biografia"></input>
                                            <label className="custom-control-label" for="Biografia">Biografía</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="Telefono"></input>
                                            <label className="custom-control-label" for="Telefono">Teléfono</label>
                                        </div>
                                    </div>
                                </div>
                                    <br />

                                    <div className="form-group">
                                    <label className="col control-label" for="formGroup"></label>
                                    <div className="col-12">
                                    
                                        <button type="submit" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-floppy-saved"></span> Guardar</button>
                                        <br/>
                                        
                                        <button type="button" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-remove-circle"></span> Cancelar</button>


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
                
                <footer>
                    <div className="container bg-dark text-light text-center p-2">
                        <p>Wed creada para aprobar Proyecto</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default UsuarioP;