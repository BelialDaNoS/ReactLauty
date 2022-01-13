
function DeIdAPrecio({id}) {

    const idparseado = parseInt(id);
    switch(true){

    case (idparseado<=100):
            return ("100");

    case (idparseado>100 && idparseado<=200 ):
            return ("200");

    case (idparseado>200 && idparseado<=300 ):
            return ("300");

    case (idparseado>300):
        return ("500" );
        
    default:
        return("Nada")
    }
}
  
  export default DeIdAPrecio;
  