export async function consultarLogistica() {

    //1 . construir el endpoint

    const URL="http://localhost/proveedor"
    
    //2. activar la peticion a enviar
    let peticion={
       method:"GET"
    }

    //3. activo el consumo de la peticion 
    let respuesta=await fetch(URL,peticion)
    let logisticaConsultados=await respuesta.json()

    return logisticaConsultados
}