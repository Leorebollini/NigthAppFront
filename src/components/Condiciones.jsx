import React, {Component} from 'react';

class Condiciones extends Component{
    render(){
        function handleClick(e){
            e.preventDefault();
            window.close();
        }
        return(
            <div className="Condiciones">
                <div className="container">
                    <h1>Términos y condiciones</h1>
                    
                    <p>La empresa NightApp no se hará cargo de ningún tipo de accidente o robo que el usuario sufra dentro los establecimientos promocionados.</p>
                    <button className="btn btn-dark" type="button" onClick={handleClick}>Ya he leido los terminos y condiciones</button>
                </div>
            </div>        
        )
    }
}

export default Condiciones;