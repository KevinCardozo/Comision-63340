const usuarios = [
    { nombre: "usuario1", contrasenia: "password1" },
    { nombre: "usuario2", contrasenia: "password2" },
    { nombre: "usuario3", contrasenia: "password3" }
]

document.addEventListener("DOMContentLoaded", function() {
    const formLog= document.getElementById("loginForm")
    formLog.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
        const usuarioIngreso = document.getElementById("username").value;
        const contraseñaIngreso = document.getElementById("password").value;
    
        function logueoDeUsuario() {
            let ingreso = false;
            let cantidadDeErrores = 0;
    
            // Mientras no haya 3 intentos fallidos, intentamos loguear al usuario
            while (cantidadDeErrores < 3 && !ingreso) {
                for (const x of usuarios) {
                    if (x.nombre === usuarioIngreso && x.contrasenia === contraseñaIngreso) {
                        ingreso = true; // Si el login es exitoso, terminamos el ciclo
                        break; // Rompe el ciclo for
                    }
                }
    
                if (!ingreso) {
                    cantidadDeErrores++;
                }
            }
    
            if (ingreso) {
                Swal.fire({
                    title:"INGRESANDO A TU CUENTA",
                    icon: "success",
                    confirmButtonText: "CONTINUAR"
                })
            } else {
                Swal.fire({
                    title:"Contraseña o usuario incorrecto",
                    icon: "error",
                    confirmButtonText: "CONTINUAR"
                });
            }
        }
    
        logueoDeUsuario()})
})
