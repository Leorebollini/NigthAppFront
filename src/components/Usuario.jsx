class Usuario{
    constructor(){

    }
    
    static getCurrent(){
        return JSON.parse(sessionStorage.getItem("user"))
    }
}

export default Usuario