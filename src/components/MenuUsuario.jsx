import React, { Component } from 'react'

class MenuUsuario extends Component {
  render() {
    return (
    <div className="MenuUsuario">
        <div className="container">
            <div className="form-group">
              <div className="menu text-center">
                  <span><a href="/inicio">Home</a></span>
              </div>
              <div className="menu text-center">
                  <span><a href="#">Mi perfil</a></span>
              </div>
              <div className="menu text-center">
                  <span><a href="/about">Ayuda</a></span>
              </div>
              <div className="menu text-center">
                  <span><a href="/inicio">Cerrar sesión</a></span>
              </div>         
          </div>
        </div>
    </div>
    )
  }
}
export default MenuUsuario;