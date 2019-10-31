import React, {Component} from 'react';

class Consulta extends Component{
    render(){
        return(
            <div className="Consulta">
                <div className="container col-8">
                    <section className="row mt-3">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <div className="row">
                            <div className="card col-3" style="padding:0">
                                    <article className="card-group-item">
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
                                    <article className="card-group-item card">
                                        <header className="card-header">
                                            <h6 className="title"> Tipo </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body" id="filtro_Categorias" />
                                        </div>
                                    </article>
                                    <article className="card-group-item card">
                                        <header className="card-header">
                                            <h6 className="title"> Servicios </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body" id="filtro_Servicios" />
                                         </div>
                                    </article>
                                    <article className="card-group-item card">
                                        <header className="card-header">
                                            <h6 className="title"> Menu </h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body" id="filtro_Menus" />
                                        </div>
                                    </article>
                                </div>
                                <div className="col-9 columna_consultas p-1" id="mainSection">
                                    <select>
                                        <option value="nombre">Ordenar por nombre</option>
                                        <option value="cercania">Ordenar por cercanía</option>
                                        <option value="calificacion">Ordenar por calificación</option>
                                    </select>
                                    <div id="establecimientos"></div>
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