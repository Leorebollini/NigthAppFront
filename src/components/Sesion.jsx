import React, { Component } from 'react';

class Sesion extends Component {
    render() {
        return (
            <div className="Sesion">
                <div className="row">
                    <div className="col">
                        <button className="close" data-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>    
                </div>
                <div className="row col-4 offset-4">
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
						<a href="/recuperarcontraseña">Olvidé la contraseña</a>
					</div>
                </div>
                <div className="row">
                    <div className="col text-center p-1">
						<a href="/registro">Registrarte</a>
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

export default Sesion;