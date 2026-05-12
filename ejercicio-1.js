const obtenerDatos = async() => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const resultados = await respuesta.json();
        console.log(resultados);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }   
}
obtenerDatos();