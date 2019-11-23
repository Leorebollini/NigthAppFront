import React, {Component} from 'react';

class LocalP extends Component{

    constructor(props) {
        super(props);
        if (props.location.establecimientoId==null)
            props.location.establecimientoId= 1
        this.state = {
            loading : true
        }
        this.establecimiento = {}
        this.getEstablecimiento(props)
        
    }

    getEstablecimiento(props) {
        fetch('http://localhost:55555/app/establecimientos/'+props.location.establecimientoId)
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            this.establecimiento = data
            this.setState({loading:false})
          })    
      }
    

    render(){
        console.dir(this.state.establecimiento)
        if(this.state.loading){
            return (<div><div className="d-flex justify-content-center"><div className="loader"></div></div>
            <div className="d-flex justify-content-center"><div className="loader-text"><h4>Cargando!</h4></div></div></div>)
        }
        else
        return(
            <div classNameName="LocalPerfil">
                <div className="container">
                    <section className="row m-4">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <div className="container py-4 my-2">
                                <div className="row p-3">
                                    <div className="col">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src="img/Floreria_atlantico01.jpg" alt="First slide"></img>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="img/Floreria_atlantico02.jpg" alt="Second slide"></img>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="img/Floreria_atlantico03.jpg" alt="Third slide"></img>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4 pr-md-5 ">
                                        <img className="w-100 rounded border" src={"img/bar"+this.establecimiento.Id    +".jpg"} />
                                        <div className="pt-4 mt-2 ">
                                            <section className="mb-4 pb-1 ">
                                                <div className="work-experience pt-2 ">
                                                    <div className="work mb-4 ">
                                                        <strong className="h5 d-block text-secondary font-weight-bold mb-1">Calificación</strong>
                                                        <img src={"img/estrellas-"+this.establecimiento.Rating+".png"}></img>
                                                    </div>
                                                    <div className="work mb-4 ">
                                                        <strong className="h5 d-block text-secondary font-weight-bold mb-1">Ubicación</strong>
                                                        <p className="text-secondary">{this.establecimiento.Direccion +", " + this.establecimiento.Ciudad}</p>
                                                    </div>
                                                    <div className="work mb-4 ">
                                                        <strong className="h5 d-block text-secondary font-weight-bold mb-1">Servicios</strong>
                                                        <ul>
                                                            {this.establecimiento.Servicios.map(servicio=>{
                                                                return (<li>{servicio.Nombre}  </li>)
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>    
                                            </section>
                                        </div>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="d-flex align-items-center ">
                                            <h2 className="font-weight-bold m-0">
                                                {this.establecimiento.Nombre}
                                            </h2>
                                        </div>
                                        <p className="h5 text-primary mt-2 d-block font-weight-light">
                                            {this.establecimiento.Categorias.map(categoria=>{
                                                return (categoria.Nombre + " ")
                                            })}
                                        </p>
                                        <p className="lead mt-4">{this.establecimiento.Descripcion}</p>
                                        <section>
                                            <div className=" p-2 " >
                                                <h6 className="text-uppercase font-weight-light text-secondary p-2">
                                                    Información de contacto
                                                </h6>
                                                <dl className="row mt-4 mb-4 pb-3 ">
                                                    <dt className="col-sm-3">Teléfono</dt>
                                                    <dd className="col-sm-9">011 555 5555</dd>
                                                    <dt className="col-sm-3">Dirección</dt>
                                                    <dd className="col-sm-9">
                                                        {this.establecimiento.Direccion + ", " + this.establecimiento.Ciudad}
                                                    </dd>
                                                    <dt className="col-sm-3">Email</dt>
                                                    <dd className="col-sm-9">
                                                        <a href="mailto:#">{this.establecimiento.Nombre.replace(/ /g,'')}@gmail.com.ar</a>
                                                    </dd>
                                                </dl>   
                                            </div>
                                        </section>
                                        <section className="mt-4 "></section>
                                    </div>
                                </div>
                                <div className="row p-2 form-group ">
                                    <div className="col">
                                        <hr></hr>
                                        <p> Comentarios</p>
                                        <form action="" className="comentarios">
                                            <textarea className="form-control" name="" id="" placeholder="Comentario"></textarea>
                                            <br></br>
                                            <button type="button" className="btn btn-dark form-group">Enviar</button>  
                                        </form>
                                        {this.establecimiento.Comentarios.map(comentario=>{
                                            return (<div className="media">
                                            <img src="img/avatar2.jpg" width="64" height="64"></img>
                                            <div className="media-body">
                                                <strong className="nombre ml-2 row">  {comentario.Titulo}</strong>
                                                <i className="comentario ml-2 row"> {comentario.Descripcion}</i>
                                            </div>
                                        </div>)
                                        })}
                                        
                                    </div>
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

export default LocalP;