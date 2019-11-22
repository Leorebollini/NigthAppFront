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
                    <h1>Terminos y condiciones</h1>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo cumque placeat possimus ipsa, excepturi dolores. Cupiditate animi possimus obcaecati tenetur? Molestiae sint repellat quaerat mollitia quis facere eaque voluptate?</p>
                    <button className="btn btn-dark" type="button" onClick={handleClick}>Ya he leido los terminos y condiciones</button>
                </div>
            </div>        
        )
    }
}

export default Condiciones;