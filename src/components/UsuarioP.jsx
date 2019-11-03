import React, {Component} from 'react';

class UsuarioP extends Component{
    render(){
        return(
            <div className = "UsuarioP">
                <div class="container">
                    <section class="row m-4">
                        <div class="col-xs-12 col-sm-8 col-md-9">

                        
                        <div class="row">
                            <div class="col-xs-12"><h2>Perfil de Usuario</h2></div>
                        </div>
                    <br />

                    <form class="form-horizontal">

                            <div class="form-group">
                                    <label class=" control-label" for="formGroup">Nombre de Usuario</label>
                                    <div class="col-6">
                                    <input class="form-control" type="text" id="formGroup" value="Usuario" disabled />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Nombre</label>
                                    <div class="col-6">
                                    <input class="form-control" type="text" id="formGroup" placeholder="Tu nombre"/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Apellidos</label>
                                    <div class="col-6">
                                    <input class="form-control" type="text" id="formGroup" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup" id="tel">Teléfono</label>

                                    <div class="input-group col-6">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
                                    <input class="form-control" type="text" id="formGroup" />
                                    
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup" id="tel">Correo electrónico</label>
                                    <div class="input-group col-6">
                                    <input class="form-control" type="email" id="formGroup" placeholder="example@hotmail.com"/>
                                    
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Información biográfica</label>
                                    <div class="col-6">
                                    
                                    <textarea class="form-control" rows="4"></textarea>
                                    
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Estado</label>
                                    <div class="col-6">
                                    
                                    <select class="form-control">
                                        <option>En línea</option>
                                        <option>Ocupado</option>
                                        <option>Ausente</option>
                                        <option>Desconectado</option>
                                        
                                    </select>
                                    
                                    </div>
                                </div>
                            
                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Alias</label>
                                    <div class="col-6">
                                    <input class="form-control" type="text" id="formGroup"/>
                                    <span class="help-block">Este nombre sera mostrado a los usuarios, ocultando el verdadero nombre.</span>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Cuenta</label>
                                    <div class="col-sm-4">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="activar" name="radioOption" checked/>
                                            <label class="custom-control-label" for="activar">Activar</label>
                                        </div>

                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="desactivar" name="radioOption"/>
                                            <label class="custom-control-label" for="desactivar">Desactivar</label>
                                        </div>                                      
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col control-label" for="formGroup">Mostrar Información</label>
                                    <div class="col-sm-4">
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id="Nombre" checked disabled/>
                                            <label class="custom-control-label" for="Nombre">Nombre</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id="Biografia"></input>
                                            <label class="custom-control-label" for="Biografia">Biografía</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id="Telefono"></input>
                                            <label class="custom-control-label" for="Telefono">Teléfono</label>
                                        </div>
                                    </div>
                                </div>
                                    <br />

                                    <div class="form-group">
                                    <label class="col control-label" for="formGroup"></label>
                                    <div class="col-12">
                                    
                                        <button type="submit" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-floppy-saved"></span> Guardar</button>
                                        <br/>
                                        
                                        <button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>


                                    </div>
                                </div>



                    </form>	

                      </div>

                        <aside class="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div class="card  p-3">
                                <img src="img/beer.jpg" class="card-img-top img-fluid" alt=""></img>
                                <div class="card-block">
                                    <h3 class="card-title">Beer</h3>
                                    <p class="card-text">Cervecería artesanal. </p>
                            </div>
                            </div>
                        <br></br>
                        <div class="card  p-3">
                                <img src="img/Dj.jpg" class="card-img-top img-fluid" alt=""></img>
                                <div class="card-block">
                                    <h3 class="card-title">Phoenix</h3>
                                    <p class="card-text">Techno - Dance - Electrónica. </p>
                            </div>
                            </div>
                        </aside>
                    </section>
                    
                </div>
                
                <footer>
                    <div class="container bg-dark text-light text-center p-2">
                        <p>Wed creada para aprobar Proyecto</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default UsuarioP;