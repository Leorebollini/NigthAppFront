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
        
        function handleClick(e){ /* Cerrar sesión */
            sessionStorage.clear();
        }

        /* Funcion para ver o no el menu */ 
        function handleChecked(e){
            console.log(createAllowed + "hola");
            let menu = document.querySelector(".dropdown");
            if(createAllowed != true){
                menu.style.display = 'none'; 
                window.location.href = "/iniciosesion";          
              }else{
                menu.style.display = 'block';
            }
        }
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
                                        
                                        <a className="nav-link" data-toggle="modal" href={goTo} onClick={handleChecked}><span className="fas fa-user"></span>
        {titulo}
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown" id="menu">
                                    <button
                                        className="btn btn-primary dropdown-toggle mr-1"
                                        data-toggle="dropdown"
                                        type="button"
                                    >
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/inicio">Home</a>
                                        <a className="dropdown-item" href="#">Mi perfil</a>
                                        <a className="dropdown-item" href="/about">Ayuda</a>
                                        <a className="dropdown-item" href="/inicio" onClick={handleClick}>Cerrar sesión</a>
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