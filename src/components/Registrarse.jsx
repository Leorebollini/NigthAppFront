import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Registrarse extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surename: '',
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
            hasAgreed: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    handleInputChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        function handleClick(e){
            e.preventDefault();
            document.querySelector("#terminosycondiciones").disabled = false;
            document.querySelector("#enviar").disabled = false;
            window.open("/Condiciones", "_blank");
        }
        return (
            <div className="Registro">
                <div className="container">
                    <section className="row m-4">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <form onSubmit={this.handleSubmit} >
                                <div className="form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label className="form_text">Nombre</label>
                                        <label className="text-danger"> *</label>
                                        <br></br>
                                        <input className="form-control " type="text" ref="name" name="name" required pattern="[a-z]{3,15}" title="De 3 a 15 caracteres, no esta permitido mayusculas, numeros y simbolos." onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label className="form_text">Apellido</label>
                                        <label className="text-danger"> *</label>
                                        <br></br>
                                        <input className="form-control " type="text" name="surename" required pattern="[a-z]{3,}" onChange={this.handleInputChange}></input>
                                    </div>   
                                </div>
                                <div className="form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label className="form_text">Nombre de usuario</label>
                                        <label className="text-danger"> *</label>
                                        <br></br>
                                        <input className="form-control " type="text" name="username" title="Letras y números. Tamaño de 5 a 20 caracteres." required pattern="[A-Za-z0-9]{5,20}" onChange={this.handleInputChange}></input>
                                    </div>   
                                </div>
                                <div className=" form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label className="form_text">Contraseña</label>
                                        <label className="text-danger"> *</label>
                                        <br></br>
                                        <input className="form-control check-seguridad" type="password" required name="password" pattern=".{10,}" onChange={this.handleInputChange}></input>
                                        <p class="help-text">Minimo 8 caracteres.</p>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                    <label className="form_text">Confirmar contraseña</label>
                                    <label className="text-danger"> *</label>
                                    <br></br>
                                    <input className="form-control check-seguridad" type="password" required name="confirmPassword" pattern=".{10,}" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className=" form-group row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label className="form_text">E-mail</label>
                                    <label className="text-danger"> *</label>
                                    <br></br>
                                    <input className="form-control " type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" onChange={this.handleInputChange}></input>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label className="form_text">Teléfono</label>
                                    <label className="text-danger"> *</label>
                                    <br></br>
                                    <input className="form-control " type="tel" name="phone" required pattern="[1-9]{6,}" onChange={this.handleInputChange}></input>
                                </div>
                            </div>
                            <div className=" form-group row">
                                <div className="col">
                                    <label for="Contraseña" className="form_text">Acepto los 
                                        <a href="#" target="_blank" onClick={handleClick}> términos y condiciones.</a></label>
                                    <input type="checkbox" id="terminosycondiciones" required disabled></input>
                                </div>
                            </div>
                            <div className=" form-group  row">
                                <div className="col">
                                    <button className="btn  btn-dark" id="enviar" type="submit" disabled>Enviar</button>
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
                <div className="container bg-dark text-light p-2">
                    <p>Wed creada para aprobar Proyecto</p>
                </div>
          </footer>
        </div> 
        )
    }
}

export default Registrarse;