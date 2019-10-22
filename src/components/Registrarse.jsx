import React, { Component } from 'react';

class Registrarse extends Component {
    render() {
        return (
            <div className="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal-login" aria-hidden="true">
              <div className="modal-dialog modal-sm">
                 <div className="modal-content">
                     <div className="modal-body">
                         <div className="row">
                            <div className="col">
                                <button className="close" data-dismiss="modal" aria-label="Cerrar">
                             <span aria-hidden="true">&times;</span>
                         </button>
                            </div>
                             
                         </div>
                        <div className="row">
                        <div className="col text-center p-4">
                           <form  action="" method="">
                                <div className="form-group" id="user-group">
                                    <input type="text" className="form-control" placeholder="Nombre de usuario" name="username"/>
                                </div>
                                <div className="form-group" id="contrasena-group">
                                    <input type="password" className="form-control" placeholder="Contrasena" name="password"/>
                                </div>
                                <button type="submit" className="btn  btn-dark"><i className="fas fa-sign-in-alt"></i>  Ingresar </button>
                            </form>
                            
                        </div>
                         
                     </div>
                        <div className="row">
                            <div className="col text-center p-1">
						        <a href="recuperar_contraseña">Olvidé la contraseña</a>
					        </div>
                        </div>
                        <div className="row">
                            <div className="col text-center p-1">
						        <a href="registro.html">Registrarte</a>
					        </div>
                        </div>
                         
                     </div>
                     
                 </div>                  
              </div>
           </div>
        )
    }
}

export default Registrarse;