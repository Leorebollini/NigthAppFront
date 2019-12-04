import React, { Component } from 'react';
import Select from 'react-select';

const optionlugar = [
    { value: 'caba', label: 'CABA'},
    { value: 'florenciovarela', label: 'Florencio Varela'},
    { value: 'laplata', label: 'La Plata'},
    { value: 'quilmes', label: 'Quilmes'}
];

class RegistroLocales extends Component {

    getMenus() {
        fetch('http://localhost:55555/app'+'/menus')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({menus: data })
          })    
      }
      getServicios() {
        fetch('http://localhost:55555/app'+'/servicios')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({servicios: data })
          })    
      }
      getCategorias() {
        fetch('http://localhost:55555/app'+'/categorias')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.setState({categorias: data })
          })    
      }

    constructor(props) {
        super(props);
        this.state = {loading:true}
        this.getCategorias()
        this.getServicios()
        this.getMenus()
        
    }
    
    refreshStatus(){
        if(this.state.categorias && this.state.servicios && this.state.menus){
            this.setState({loading:false})
        }
    }
    

    render() {
        if(this.state.loading){
            this.refreshStatus()
            return (<div><div class="d-flex justify-content-center"><div class="loader"></div></div>
            <div class="d-flex justify-content-center"><div class="loader-text"><h4>Cargando!</h4></div></div></div>)
        }else
        return (
            <div className="RegistroLocales">
                <div class="container">
            <section class="main row">
                <h3>Registra tu local</h3>
                <hr></hr>
                <form action="" class="">
                    <div class="form-group row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="nombre_local">Nombre</label>
                                <label class="text-danger"> *</label>
                                <input type="text" class="form-control" required id="nombre_local"></input> 
                            </div>  
                        </div>            
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="lugar">Localidad</label>
                                <label class="text-danger"> *</label>
                                <Select name="lugar" options = {optionlugar} className="" id="lugar" required placeholder= 'Ubicación del local'></Select>
                            </div> 
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="lugar">Ciudad</label>
                                <label class="text-danger"> *</label>
                                <Select name="lugar" options = {optionlugar} className="" id="lugar" required placeholder= 'Ubicación del local'></Select>
                            </div> 
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12"> 
                            <div class="form-group">
                                <label for="direccion_local">Dirección</label>
                                <label class="text-danger"> *</label>
                                <label for="direccion_local" class="sr-only">Ej: 123 e/ 59 y 52</label>
                                <input type="text" class="form-control" id="direccion_local" required placeholder="123 e/ 59 y 52"></input>  
                            </div>    
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="fotos_local"> Fotos del local</label>
                                <label class="text-danger"> *</label>
                                <input name="uploadedfile" class="form-control" required id="fotos_local" type="file" />
                                <p class="help-block">Maximo 50 MB</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="descripcion_local">Descripción</label>
                                <label class="text-danger"> *</label>
                                <textarea name="descripcion" class="form-control" id="descripcion_local" required maxlength="1000" placeholder="Escribe la descripción del local aqui." cols= "50"></textarea>
                            </div>
                        </div>
                            <div class="form-group col-12">
                                <p class="form_text">Categorías</p>
                                <label class="text-danger"> *</label>
                                <div class="form-group row px-4">
                                    {this.state.categorias.map(categoria=>{
                                        return (<div class="col-xs-12 col-sm-4 col-md-3">
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id={"cat-"+categoria.Id}></input>
                                            <label class="custom-control-label" for={"cat-"+categoria.Id}>{categoria.Nombre}</label>
                                        </div>
                                    </div>)
                                    })}
                        </div>
                            </div>
                            <div class="form-group col-12">
                                <p class="form_text">Servicios</p>
                                <label class="text-danger"> *</label>
                                <div class="form-group row px-4">
                                    {this.state.servicios.map(servicio=>{
                                        return (<div class="col-xs-12 col-sm-4 col-md-3">
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id={"ser-"+servicio.Id}></input>
                                            <label class="custom-control-label" for={"ser-"+servicio.Id}>{servicio.Nombre}</label>
                                        </div>
                                    </div>)
                                    })}
                        </div>
                            </div>
                            <div class="form-group col-12">
                                <p class="form_text">Menus</p>
                                <label class="text-danger"> *</label>
                                <div class="form-group row px-4">
                                    {this.state.menus.map(menu=>{
                                        return (<div class="col-xs-12 col-sm-4 col-md-3">
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" class="custom-control-input" id={"men-"+menu.Id}></input>
                                            <label class="custom-control-label" for={"men-"+menu.Id}>{menu.Nombre}</label>
                                        </div>
                                    </div>)
                                    })}
                        </div>
                            </div>
                               
                    </div>
                    <div class="form-group">
                        <div class="col-12 px-4">
                            <button class="btn btn-primary">Cargar local</button>
                         </div>
                    </div>
                    
                </form>
            </section>
        </div>
            <br></br>
                <footer>
                    <div className="container bg-dark text-light text-center p-2">
                        <p>Wed creada para aprobar Proyecto</p>
                    </div>
                </footer>
        </div>
        )
    }
}

export default RegistroLocales;