import React, { Component } from 'react';

class Registrarse extends Component {
    render() {
        return (
            <div className="Registro">
                <div className="container">
                    <section className="row m-4">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <form action="#">
                                <div className="form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label for="Nombre" className="form_text">Nombre</label><br></br>
                                        <input className="form-control " type="text"></input>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label for="Apellido" className="form_text">Apellido</label><br></br>
                                        <input className="form-control " type="text"></input>
                                    </div>   
                                </div>
                                <div className="form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label for="usermane" className="form_text">Nombre de usuario</label><br></br>
                                        <input className="form-control " type="text"></input>
                                    </div>   
                                </div>
                                <div className=" form-group row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                        <label for="Contraseña" className="form_text">Contraseña</label><br></br>
                                        <input className="form-control " type="password"></input>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 mb-3">
                                    <label for="Contraseña_conf" className="form_text">Confirmar contraseña</label><br></br>
                                    <input className="form-control " type="password"></input>
                                </div>
                            </div>
                            <div className=" form-group row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label for="email" className="form_text">E-mail</label><br></br>
                                    <input className="form-control " type="email"></input>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label for="tel" className="form_text">Teléfono</label><br></br>
                                    <input class="form-control " type="tel"></input>
                                </div>
                            </div>
                            <div className=" form-group row">
                                <div className="col">
                                    <label for="Contraseña" className="form_text">Acepto los <a href="#">términos y condiciones.</a> </label>
                                    <input type="checkbox"></input>
                                </div>
                            </div>
                            <div className=" form-group  row">
                                <div className="col">
                                    <button className="btn  btn-dark" type="submit">Enviar</button>
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
                <div class="container bg-dark text-light p-2">
                    <p>Wed creada para aprobar Proyecto</p>
                </div>
          </footer>
        </div> 
        )
    }
}

export default Registrarse;