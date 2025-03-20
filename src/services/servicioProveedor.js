export async function consultarProovedores() {

    //1 . construir el endpoint

    const URL="http://localhost/proveedor"
    
    //2. activar la peticion a enviar
    let peticion={
       method:"GET"
    }

    //3. activo el consumo de la peticion 
    let repsuesta=await fetch(URL,peticion)
    let proveedoresConsultados=await respuesta.json()

    return prveedoresConsultados
}