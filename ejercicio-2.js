const obtenerPostConAutor = async(postId) => {
    try {
        const respuestaPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await respuestaPosts.json();

        const respuestaUsuario = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const usuario = await respuestaUsuario.json();

        console.log({
    titulo: post.title,
    cuerpo: post.body,
    autor: usuario.name
});

    } catch (error) {
        console.error('Error al obtener el post con autor:', error);
    }
};
obtenerPostConAutor(1);
