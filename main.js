// let nombreDeUsuario= "admin";
// let contraseñaUsuario1= "admin";
// let cantidadDeErrores= 0;
// let ingreso= false;

// function logueoDeUsuario(){
//     while (cantidadDeErrores<3 && ingreso==false){
//         let usuarioIngreso= prompt("ingresa tu usuario").toLowerCase();
//         let contraseñaIngreso=  prompt("ingresa tu contraseña").toLowerCase();
//         if(usuarioIngreso== nombreDeUsuario && contraseñaIngreso == contraseñaUsuario1){
//             alert("ingresando a tu cuenta");
//             ingreso= true;
//         }
//             else{
//                 cantidadDeErrores++;
//                 alert("contraseña incorrecta, volve a intentar")
//         }
//     }
//     if(ingreso==true){
//         alert("INGRESASTE A TU CUENTA , BIENVENIDO " + nombreDeUsuario)
//     }
//     else{
//         alert("CUENTA BLOQUEADA, RECUPERAR CONTRASEÑA")
//     }
    
// }
// logueoDeUsuario();




// function Usuario (nombre, edad, localidad) {
//     this.nombre= nombre
//     this.edad= edad
//     this.localidad= localidad
//     this.entradasAdquiridas= 0
// }

function Butaca (numero, estado){
    this.numero= numero
    this.estado= estado
}


// const usuario1= new Usuario("kevin", 24, "isidro casanova")

const butacas = []

function agreagarButacas(cantidadDeButacas){
    for(i=0; i<cantidadDeButacas; i++){
        butacas.push(new Butaca(i+1,"disponible"));
        console.log(butacas)

    }
}
agreagarButacas(10)

function butacaDisponible() {
    for(i=0; i < butacas.length; i++){
        if(butacas[i].estado == "disponible"){
            console.log ("Butaca Disponible")
             let seleccion= confirm ("Desea seleccionar la butaca " + butacas[i].numero + " ?")
                if(seleccion == true){
                    butacas[i].estado = "ocupado"
                    console.log("Su butaca es la N° " + butacas[i].numero)
                    break
                } 
        }
        else {
            console.log("Butaca ocupada")
        }
    }
}
butacaDisponible()
// butacaDisponible()


function BuscarButaca(){
    let butacaSeleccionada= parseInt(prompt ("ingrese el numero de butaca"))
    // let resultado= butacas.filter((x)=>x.numero.toUpperCase().includes(butacaSeleccionada))
    let resultado = butacas.find((x)=> x.numero === butacaSeleccionada)
    if(resultado != undefined){
        console.log(resultado)
    }
    else{
        alert("no se encontro")
    }
}
BuscarButaca()







// function comprarEntradas(){
//     let precioEntrada= 5000;
//     let cantidadDeEntradas= parseInt (prompt(" EL PRECIO DE CADA ENTRADA ES DE "+ precioEntrada + " ELIGE LA CANTIDAD DE ENTRADAS QUE DESEAS COMPRAR"))
//     let TotalAPagar= precioEntrada*cantidadDeEntradas;
//     usuario1.entradasAdquiridas= cantidadDeEntradas;
//     alert ("LA CANTIDAD DE ENTRADAS SON " + cantidadDeEntradas + " Y EL TOTAL A PAGAR ES " + TotalAPagar);

// }
// comprarEntradas();

// console.log(usuario1.entradasAdquiridas);