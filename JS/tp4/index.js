// TP 4 - Callbacks, Promesas y Async/Await

const usuarios = [
    { id: 1, nombre: "Pedro" },
    { id: 2, nombre: "Laura" },
    { id: 3, nombre: "Nicolas" }
];

// 1. Callback
function buscarUsuario(id, callback) {
    setTimeout(function() {
        const usuario = usuarios.find(function(usuarioActual) {
            return usuarioActual.id === id;
        });

        if (usuario) {
            callback(null, usuario);
        } else {
            callback("No se encontro un usuario con ese id", null);
        }
    }, 1000);
}

buscarUsuario(2, function(error, usuario) {
    if (error) {
        console.error(error);
    } else {
        console.log("Resultado con callback:", usuario);
    }
});

// 2. Promesa
function buscarUsuarioPromesa(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const usuario = usuarios.find(function(usuarioActual) {
                return usuarioActual.id === id;
            });

            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuario no encontrado");
            }
        }, 1000);
    });
}

buscarUsuarioPromesa(3)
    .then(function(usuario) {
        console.log("Resultado con promesa:", usuario);
    })
    .catch(function(error) {
        console.error(error);
    });

// 3. Async y await
async function mostrarUsuario(id) {
    try {
        const usuario = await buscarUsuarioPromesa(id);
        console.log("Resultado con async/await:", usuario);
    } catch (error) {
        console.error("Error:", error);
    }
}

mostrarUsuario(1);
