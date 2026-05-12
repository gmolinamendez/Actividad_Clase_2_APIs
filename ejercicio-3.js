const obtenerPerfilCompleto = async (userId) => {
    try {
        const [respuestaUsuario, respuestaPosts, respuestaAlbumes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        ]);

        const usuario = await respuestaUsuario.json();
        const posts = await respuestaPosts.json();
        const albumes = await respuestaAlbumes.json();

        console.log({
            usuario: usuario.name,
            totalPosts: posts.length,
            Albumes: albumes.map(album => album.title)
        });

    } catch (error) {
        console.error(`Error al obtener el recurso: ${error.message}`);
    }
};

obtenerPerfilCompleto(1);