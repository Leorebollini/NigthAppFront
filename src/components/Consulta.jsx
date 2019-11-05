import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Consulta extends Component{

    getMenus(props) {
        fetch('http://localhost:55555/app'+'/menus')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.filter.Menus = data.map(x=>x.Nombre)
            this.setState({ menus: data })
          }) 
      }

    getServicios(props) {
        fetch('http://localhost:55555/app'+'/servicios')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.filter.Servicios = data.map(x=>x.Nombre)
            this.setState({ servicios: data })
          })    
      }
      

    getCategorias(props) {
        fetch('http://localhost:55555/app'+'/categorias')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            if(!this.filter.Categorias.length>0){
                this.filter.Categorias = data.map(x=>x.Nombre)
            }
            this.setState({ categorias: data })
          })    
      }
      
    getFiltered(props){
            fetch('http://localhost:55555/app/establecimientos/filtrados', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.filter)})
            .then((response)=>{
                return response.json()
            }).then((est)=>{
                this.setState({establecimientos: est})
            });
    }

    getEstablecimientos(props) {
            this.getFiltered(props)
      }
      orderChanged(event){
          this.filter.Orden = event.target.value
          this.getEstablecimientos()
      }
      handleKeyUp(event){
          this.filter.Nombre = event.target.value
          this.getEstablecimientos()

      }
      handleChecked (event) {
            if(this.filter[event.target.name].includes(event.target.value) && this.filter[event.target.name].length>1){
                let index = this.filter[event.target.name].indexOf(event.target.value)
                  if (index > -1) {
                      this.filter[event.target.name].splice(index, 1)
                  }
            }
            else{
                this.filter[event.target.name].push(event.target.value)
            }
            this.getEstablecimientos()
          
          
      }

      componentDidMount(props){
          this.getAll(props)
      }

      getAll(props){
          //Promise.join(this.getCategorias(), this.getServicios(),this.getMenus(),()=>{
           // this.getEstablecimientos(props)            
        //});
        this.getMenus()
        this.getServicios()
        this.getCategorias()
        }

      
      
    constructor(props) {
        super(props);
        this.initialization = true
        this.handleChecked = this.handleChecked.bind(this); 
        this.orderChanged = this.orderChanged.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.state = {
          establecimientos: [],
          categorias: [],
          servicios: [],
          menus: []
        }
        let categorias = props.location.initialFilter?props.location.initialFilter.Categorias:[]
        this.filter = {
            Nombre:"",
            Servicios:[],
            Menus:[],
            Categorias:categorias,
            Orden: "NOMBRE"
        }
        
    }
    
    render(props){
        if(!this.state.establecimientos.length>0 && this.initialization){
            this.getEstablecimientos(props)
            return (<div><div class="d-flex justify-content-center"><div class="loader"></div></div>
            <div class="d-flex justify-content-center"><div class="loader-text"><h4>Buscando los mejores lugares!</h4></div></div></div>)
        }else
        this.initialization = false
        return(
            <div className="Consulta">
                <div className="container">
                    <section className="row mt-3">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <div className="row">
                            <div className="col-3">
                                
                            <article className="card-group-item card mt-3">
                                        <header className="card-header">
                                            <h6 className="title"> Nombre </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body">
                                            <div className="input-group">
                                                        <input className="form-control" placeholder="Ej: Antares" type="text" onKeyUp={this.handleKeyUp}></input>
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                <i className="fa fa-search"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                            </div>
                                        </div>
                                    </article>

                                    <article className="card-group-item card mt-3">
                                        <header className="card-header">
                                        <h6 className="title">Ubicacion</h6>
                                        </header>
                                        <div className="filter-content collapse show" id="collapse22">
                                            <div className="card-body">
                                                <form className="pb-3">
                                                    <div className="input-group">
                                                        <input className="form-control" placeholder="Ciudad/Localidad" type="text"></input>
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                <i className="fa fa-search"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <ul className="list-unstyled list-lg">
                                                    <li><a href="#">Quilmes <span
                                                    className="float-right badge badge-light round">142</span> </a></li>
                                                    <li><a href="#">Lanus <span
                                                    className="float-right badge badge-light round">55</span> </a></li>
                                                    <li><a href="#">Avellaneda <span
                                                    className="float-right badge badge-light round">32</span> </a></li>
                                                    <li><a href="#">Don Bosco <span
                                                    className="float-right badge badge-light round">12</span> </a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </article>
                                    <article className="card-group-item card mt-3">
                                        <header className="card-header">
                                            <h6 className="title"> Tipo </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body">
                                                    {this.state.categorias.map(categoria =>{
                                            return (
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name = "Categorias" checked={this.filter.Categorias.includes(categoria.Nombre)} value={categoria.Nombre} onChange={ this.handleChecked } className="custom-control-input" id={"Categorias-"+categoria.Id}  />
                                                    <label className="custom-control-label" htmlFor={"Categorias-"+categoria.Id}>{categoria.Nombre}</label>
                                                </div>
                                            )
                                        })}

                                            </div>
                                        </div>
                                    </article>
                                    <article className="card-group-item card mt-3">
                                        <header className="card-header">
                                            <h6 className="title"> Servicios </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body">
                                                {this.state.servicios.map(servicio =>{
                                            return (
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name = "Servicios"className="custom-control-input" checked={this.filter.Servicios.includes(servicio.Nombre)} value={servicio.Nombre} onChange={ this.handleChecked } id={"servicio-"+servicio.Id}/>
                                                    <label className="custom-control-label" htmlFor={"servicio-"+servicio.Id}>{servicio.Nombre}</label>
                                                </div>
                                            )
                                        })}

                                            </div>
                                        </div>
                                    </article>

                                    <article className="card-group-item card mt-3">
                                        <header className="card-header">
                                            <h6 className="title"> Menu </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body">
                                                {this.state.menus.map(menu =>{
                                            return (
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name = "Menus"className="custom-control-input" checked={this.filter.Menus.includes(menu.Nombre)} value={menu.Nombre} onChange={ this.handleChecked } id={"menu-"+menu.Id}/>
                                                    <label className="custom-control-label" htmlFor={"menu-"+menu.Id}>{menu.Nombre}</label>
                                                </div>
                                            )
                                        })}

                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-9 columna_consultas p-1" id="mainSection">
                                    <select onChange={this.orderChanged}>
                                        <option value="NOMBRE">Ordenar por nombre</option>
                                        <option value="DISTANCIA">Ordenar por cercanía</option>
                                        <option value="RATING">Ordenar por calificación</option>
                                    </select>
                                    <div id="establecimientos">
                                        {this.state.establecimientos.map(establecimiento =>{
                                            return (
                                                <Link to={{pathname:"/local", establecimientoId :establecimiento.Id}} style={{ textDecoration: 'none', color: 'black' }} className="row caja_consulta rounded m-1 p-1">
                                                    <div className="col-xs-12 col-md-6">
                                                        <img className = "img-fluid" src={"img/bar"+ establecimiento.Id + ".jpg"}></img>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <img src={"img/estrellas-"+ establecimiento.Rating + ".png"}></img>
                                                        <h5>{establecimiento.Nombre}</h5>
                                                        <p>{establecimiento.Descripcion}</p>

                                                        </div>
                                            </Link>)
                                        })}
                                    </div>
                                    <nav className="mt-3">
                                        <ul className="pagination d-flex justify-content-center">
                                            <li className="page-item "><a href="#" className="page-link"><span aria-hidden="true">&laquo;
                                            Anterior</span></a></li>
                                            <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                            <li className="page-item "><a href="#" className="page-link">2</a></li>
                                            <li className="page-item "><a href="#" className="page-link">3</a></li>
                                            <li className="page-item "><a href="#" className="page-link">4</a></li>
                                            <li className="page-item "><a href="#" className="page-link"><span aria-hidden="true">Siguiente
                                            &raquo;</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
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
            </div>
        )
    }
}

export default Consulta;