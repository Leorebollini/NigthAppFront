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
        </div>
    </div>
    )
  }
}

export default Navegador;