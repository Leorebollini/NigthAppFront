import React, {Component} from 'react';

class Consulta extends Component{
    render(){
        return(
            <div className="Consulta">
                <div class="container col-8">
                    <section class="row mt-3">
                        <div class="col-xs-12 col-sm-8 col-md-9">
                            <div class="row">
                                <div class="card col-3" style="padding:0">
                                    <article class="card-group-item">
                                        <header class="card-header">
                                            <h6 class="title">Ubicacion</h6>
                                        </header>
                                        <div class="filter-content collapse show" id="collapse22">
                                            <div class="card-body">
                                                <form class="pb-3">
                                                    <div class="input-group">
                                                        <input class="form-control" placeholder="Ciudad/Localidad" type="text"></input>
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary" type="button"><i
                                                            class="fa fa-search"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <ul class="list-unstyled list-lg">
                                                    <li><a href="#">Quilmes <span
                                                    class="float-right badge badge-light round">142</span> </a></li>
                                                    <li><a href="#">Lanus <span
                                                    class="float-right badge badge-light round">55</span> </a></li>
                                                    <li><a href="#">Avellaneda <span
                                                    class="float-right badge badge-light round">32</span> </a></li>
                                                    <li><a href="#">Don Bosco <span
                                                    class="float-right badge badge-light round">12</span> </a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </article>
                                    <article class="card-group-item card">
                                        <header class="card-header">
                                            <h6 class="title"> Tipo </h6>
                                        </header>
                                        <div class="filter-content">
                                            <div class="card-body" id="filtro_Categorias" />
                                        </div>
                                    </article>
                                    <article class="card-group-item card">
                                        <header class="card-header">
                                            <h6 class="title"> Servicios </h6>
                                        </header>
                                        <div class="filter-content">
                                            <div class="card-body" id="filtro_Servicios" />
                                         </div>
                                    </article>
                                    <article class="card-group-item card">
                                        <header class="card-header">
                                            <h6 class="title"> Menu </h6>
                                        </header>
                                        <div class="filter-content">
                                            <div class="card-body" id="filtro_Menus" />
                                        </div>
                                    </article>
                                </div>
                                <div class="col-9 columna_consultas p-1" id="mainSection">
                                    <select>
                                        <option value="nombre">Ordenar por nombre</option>
                                        <option value="cercania">Ordenar por cercanía</option>
                                        <option value="calificacion">Ordenar por calificación</option>
                                    </select>
                                    <div id="establecimientos"></div>
                                    <nav class="mt-3">
                                        <ul class="pagination d-flex justify-content-center">
                                            <li class="page-item "><a href="#" class="page-link"><span aria-hidden="true">&laquo;
                                            Anterior</span></a></li>
                                            <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                            <li class="page-item "><a href="#" class="page-link">2</a></li>
                                            <li class="page-item "><a href="#" class="page-link">3</a></li>
                                            <li class="page-item "><a href="#" class="page-link">4</a></li>
                                            <li class="page-item "><a href="#" class="page-link"><span aria-hidden="true">Siguiente
                                            &raquo;</span></a></li>
                                        </ul>
                                    </nav>
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

export default Consulta;