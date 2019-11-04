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
            return (<div><div class="d-flex justify-content-center"><div class="loader"></div></div>
            <div class="d-flex justify-content-center"><div class="loader-text"><h4>Cargando!</h4></div></div></div>)
        }
        else
        return(
            <div className="LocalPerfil">
                <div class="container">
                    <section class="row m-4">
                        <div class="col-xs-12 col-sm-8 col-md-9">
                            <div class="container py-4 my-2">
                                <div class="row p-3">
                                    <div class="col">
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="img/Floreria_atlantico01.jpg" alt="First slide"></img>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="img/Floreria_atlantico02.jpg" alt="Second slide"></img>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="img/Floreria_atlantico03.jpg" alt="Third slide"></img>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-4 pr-md-5 ">
                                        <img class="w-100 rounded border" src={"img/bar"+this.establecimiento.Id    +".jpg"} />
                                        <div class="pt-4 mt-2 ">
                                            <section class="mb-4 pb-1 ">
                                                <div class="work-experience pt-2 ">
                                                    <div class="work mb-4 ">
                                                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">Calificación</strong>
                                                        <img src={"img/estrellas-"+this.establecimiento.Rating+".png"}></img>
                                                    </div>
                                                    <div class="work mb-4 ">
                                                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">Ubicación</strong>
                                                        <p class="text-secondary">{this.establecimiento.Direccion +", " + this.establecimiento.Ciudad}</p>
                                                    </div>
                                                    <div class="work mb-4 ">
                                                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">Servicios</strong>
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
                                    <div class="col-md-8 ">
                                        <div class="d-flex align-items-center ">
                                            <h2 class="font-weight-bold m-0">
                                                {this.establecimiento.Nombre}
                                            </h2>
                                        </div>
                                        <p class="h5 text-primary mt-2 d-block font-weight-light">
                                            {this.establecimiento.Categorias.map(categoria=>{
                                                return (categoria.Nombre + " ")
                                            })}
                                        </p>
                                        <p class="lead mt-4">{this.establecimiento.Descripcion}</p>
                                        <section>
                                            <div class=" p-2 " >
                                                <h6 class="text-uppercase font-weight-light text-secondary p-2">
                                                    Información de contacto
                                                </h6>
                                                <dl class="row mt-4 mb-4 pb-3 ">
                                                    <dt class="col-sm-3">Teléfono</dt>
                                                    <dd class="col-sm-9">011 555 5555</dd>
                                                    <dt class="col-sm-3">Dirección</dt>
                                                    <dd class="col-sm-9">
                                                        {this.establecimiento.Direccion + ", " + this.establecimiento.Ciudad}
                                                    </dd>
                                                    <dt class="col-sm-3">Email</dt>
                                                    <dd class="col-sm-9">
                                                        <a href="mailto:#">{this.establecimiento.Nombre.replace(/ /g,'')}@gmail.com.ar</a>
                                                    </dd>
                                                </dl>   
                                            </div>
                                        </section>
                                        <section class="mt-4 "></section>
                                    </div>
                                </div>
                                <div class="row p-2 form-group ">
                                    <div class="col">
                                        <hr></hr>
                                        <p> Comentarios</p>
                                        <form action="" class="comentarios">
                                            <textarea class="form-control" name="" id="" placeholder="Comentario"></textarea>
                                            <br></br>
                                            <button type="button" class="btn btn-dark form-group">Enviar</button>  
                                        </form>
                                        {this.establecimiento.Comentarios.map(comentario=>{
                                            return (<div class="media">
                                            <img src="img/avatar2.jpg" width="64" height="64"></img>
                                            <div class="media-body">
                                                <strong class="nombre ml-2 row">  {comentario.Titulo}</strong>
                                                <i class="comentario ml-2 row"> {comentario.Descripcion}</i>
                                            </div>
                                        </div>)
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside class="col-xs-12 col-sm-4 col-md-3 p-2">
                            <div class="card  p-3">
					            <img src="img/beer.jpg" class="card-img-top img-fluid" alt=""></img>
					            <div class="card-block">
						            <h3 class="card-title">Beer</h3>
						            <p class="card-text">Cervecería artesanal. </p>
                                </div>
				            </div>
                            <br></br>
                            <div class="card  p-3">
					            <img src="img/Dj.jpg" class="card-img-top img-fluid" alt=""></img>
					            <div class="card-block">
						            <h3 class="card-title">Phoenix</h3>
						            <p class="card-text">Techno - Dance - Electrónica. </p>
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