import React, {Component} from 'react';

class RecuperarC extends Component{
    render(){
        return(
            <div className="RecuperarC">
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
                                <input type="text" className="form-control" placeholder="Ingresa tu email" name="email"/>
                            </div>
                            <button type="submit" className="btn  btn-dark"><i className="fas fa-sign-in-alt"></i>  Enviar correo </button>
                        </form>   
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

export default RecuperarC;