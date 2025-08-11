// Con freeze creamos un objeto que no se puede modificar
const EndPoints = Object.freeze( {
    nombre: "https://restcountries.com/v3.1/name/NOMBRE",
    idioma: "https://restcountries.com/v3.1/lang/IDIOMA",
    moneda: "https://restcountries.com/v3.1/currency/MONEDA"
});

export function obtenerPaisesPorNombre(nombre, funcionMostrarDatos, funcionMostrarError) {
    fetch(EndPoints.nombre.replace("NOMBRE", nombre))
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error("Error obteniendo los países: " + respuesta.status);
        }
    })
    .then(datos => funcionMostrarDatos(datos))
    .catch(error => funcionMostrarError(error));
}