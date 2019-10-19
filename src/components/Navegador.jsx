import React, { Component } from 'react';

class Navegador extends Component {
  render() {
    return (
    //  barra de navegación 
    <div className = "Navegador">   
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                        <a class="navbar-brand" href="#">NigthApp</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav bg-inverse">
                            <li class="nav-item">
                                <a href="index.html" class="nav-link active">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link">Ayuda</a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="modal" href="#modal-login"><span class="fas fa-user"></span>Ingresar</a>
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