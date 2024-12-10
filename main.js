let nombreDeUsuario= "usuario1";
let contraseñaUsuario1= "contraseña123";
let cantidadDeErrores= 0;
let ingreso= false;

function logueoDeUsuario(){
    while (cantidadDeErrores<3 && ingreso==false){
        let usuarioIngreso= prompt("ingresa tu usuario").toLowerCase();
        let contraseñaIngreso=  prompt("ingresa tu contraseña").toLowerCase();
        if(usuarioIngreso== nombreDeUsuario && contraseñaIngreso == contraseñaUsuario1){
            alert("ingresando a tu cuenta");
            ingreso= true;
        }
            else{
                cantidadDeErrores++;
                alert("contraseña incorrecta, volve a intentar")
        }
    }
    alert("CUENTA BLOQUEDA, RECUPERAR CONTRASEÑA")
}
logueoDeUsuario();