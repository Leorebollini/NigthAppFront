import React, {Component} from 'react';

class About extends Component{

    render(){
        function handleClick(e){
            e.preventDefault();
            document.querySelector("#ayuda").style.display= 'block';
        }
        function handleCheck(e){
            e.preventDefault();
            alert("Problema enviado");
            window.location.href = "/inicio";
        }
        return(
            <div className="container">
                <h1>Ayuda</h1>
                <hr/>
                <h3>Clientes</h3>
                <hr/>
                <h4>Buscar Local</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus at perferendis unde accusantium, praesentium autem numquam temporibus neque pariatur consectetur, recusandae accusamus quaerat eius facere vero, debitis voluptas magni est.</p>
                <h4>Registrarme</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat a nulla ratione facere atque, quidem totam explicabo commodi deserunt, dolorem corporis dolor soluta necessitatibus! Dolor illum odit aliquid quam. Sint.</p>
                <h4>Registrar mi local</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo voluptate quia inventore deserunt nobis voluptatem optio veniam a molestiae, velit minima suscipit. Debitis alias, suscipit nobis quidem doloribus aliquam.</p>
                <h4>Problemas con la cuenta</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis, obcaecati ad ea repudiandae laudantium voluptatum perspiciatis magnam dolorem ipsa, neque vel rem, aliquam porro ab illum placeat et saepe!</p>
                <h4>Perfil del usuario</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci voluptate perspiciatis eveniet placeat, nisi at aperiam, voluptatibus quidem molestiae blanditiis vitae delectus in harum sequi itaque labore beatae quas!</p>
                <h4>Perfil del local</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci voluptate perspiciatis eveniet placeat, nisi at aperiam, voluptatibus quidem molestiae blanditiis vitae delectus in harum sequi itaque labore beatae quas!</p>
                <button type="button" className="btn btn-dark" onClick={handleClick}>No esta mi problema, quisiera consultar un administrador.</button>
                    <div className="form-group pt-4" id="ayuda" style={{display: 'none'}}>
                        <form>
                            <label className="form_text">E-mail</label>
                            <br></br>
                            <input className="form-control col-md-5" type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"></input>
                            <label className="form_text" for="descripcion_local">Descripción del problema</label>
                            <textarea name="descripcion" className="form-control" id="descripcion_local" required maxLength="1000" placeholder="Escribe la descripción del problema aqui." cols= "50" />   
                            <br></br>
                            <button className="btn btn-dark" type="submit" onClick={handleCheck}>Enviar problema</button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default About;