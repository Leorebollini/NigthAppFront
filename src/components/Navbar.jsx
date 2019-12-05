import React, {Component} from 'react';
import Usuario from './Usuario';
import bootstrap from "bootstrap"; // para el menu desplegable

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : null
        }
        this.state.user = Usuario.getCurrent()
    }
    render(){
        let titulo = this.state.user? this.state.user.Nombre : "Ingresar"
        let goTo = this.state.user? "" : "/iniciosesion"
        let createAllowed = (this.state.user && (this.state.user.Rol=='OWNER'||this.state.user.Rol=='ADMIN')) 
        return(
            <div className="Navbar">
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
                                        <a href="/inicio" className="nav-link active">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/consulta" className="nav-link">Lugares</a>
                                    </li>
                                    
                                    {
                                        createAllowed?
                                        (<li className="nav-item">
                                        <a href="/RegistroLocales" className="nav-link">Registrar Local</a>
                                        </li>):(<></>)
                                    }
                                    <li className="nav-item">
                                        <a href="/about" className="nav-link">Ayuda</a>
                                    </li>                                    
                                </ul>
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item">
                                        
                                        <a className="nav-link" data-toggle="modal" href={goTo}><span className="fas fa-user"></span>
        {titulo}
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-primary dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        type="button"
                                    >
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/inicio">Home</a>
                                        <a class="dropdown-item" href="#">Mi perfil</a>
                                        <a class="dropdown-item" href="/about">Ayuda</a>
                                        <a class="dropdown-item" href="/inicio">Cerrar sesión</a>
                                     </div>  
                                </div>
                            </div>
                        </nav>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;