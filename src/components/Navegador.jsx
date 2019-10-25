import React, { Component } from 'react';

class Navegador extends Component {
  render() {
    return (
    //  barra de navegación 
    <div className = "Navegador">   
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <a className="navbar-brand" href="#">NigthApp</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav bg-inverse">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link active">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">Ayuda</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modal-login"><span className="fas fa-user"></span>Ingresar</a>
                            </li>
                            </ul>
                        </div>
                    </nav>   
                </div>
            </div>
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
        </div>
    </div>
    )
  }
}

export default Navegador;