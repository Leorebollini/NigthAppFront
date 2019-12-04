import React, { Component } from 'react';
import { setHeaders, getHeaders, setCredentials } from '../helper/HeaderUtil';

class Sesion extends Component {

    login(e){
        e.preventDefault()
        let UserName = document.querySelector("#username").value
        let Password = document.querySelector("#password").value

        let headers_ = getHeaders()
        headers_.set('Authorization', 'Basic ' + btoa(UserName + ":" + Password))
        fetch('http://localhost:55555/app/usuarios/login', {
            method: 'POST',
            headers: headers_,
            body: ""})
            .then((response)=>{
                return response.json()
            }).then((usr)=>{
                if(usr.Rol){
                    sessionStorage.setItem("user",JSON.stringify(usr))
                    sessionStorage.setItem('cr','Basic ' + btoa(UserName + ":" + Password))
                    this.setState({UserName:UserName,Password:Password})
                    window.location = "inicio"
                }else{
                    alert("Error, Intente nuevamente")
                }
               
            });


    }

    constructor(props){
        super(props)
        this.state={
            UserName:"",
            Password:""
        }
        this.login = this.login.bind(this);
    }

    


    getAuthHeader(){
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        headers.set('Authorization', 'Basic ' + Buffer.from(this.state.UserName + ":" + this.state.Password).toString('base64'));
        return headers;
    }
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
                        
                            <div className="form-group" id="user-group">
                                <input type="text" className="form-control" placeholder="Nombre de usuario" name="username" id="username"/>
                            </div>
                            <div className="form-group" id="contrasena-group">
                                <input type="password" className="form-control" placeholder="Contrasena" name="password" id="password"/>
                            </div>
                            <button type="submit" className="btn  btn-dark" onClick={this.login} ><i className="fas fa-sign-in-alt"></i>  Ingresar </button>
                         
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center p-1">
						<a href="/Recuperar">Olvidé la contraseña</a>
					</div>
                </div>
                <div className="row">
                    <div className="col text-center p-1">
						<a href="/registro">Registrarte</a>
					</div>
                </div>
                <footer>
                    <div className="container bg-dark text-light p-2">
                        <p>Wed creada para aprobar Proyecto</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Sesion;