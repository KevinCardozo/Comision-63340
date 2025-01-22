// let inputUs= document.getElementById("campoText")
// inputUs.addEventListener("input", function(event){
//     console.log("el valor Del campo cambia a: " + event.target.value)
// })

// boton.onclick = () => {alert("logeando")}



// function Usuario (nombre, contrasenia, edad, localidad) {
//     this.nombre= nombre
//     this.edad= edad
//     this.contrasenia= contrasenia
//     this.localidad= localidad
//     this.entradasAdquiridas= 0
// }

// function Butaca (numero, estado){
//     this.numero= numero
//     this.estado= estado
// }


// function registroUsuario(){
//     let nombre= prompt("Ingrese su nombre de usuario").toUpperCase()
//     if(nombre==""){
//         alert("valor incorrecto")
//         return
//     }

//     let contrasenia= prompt("Ingrese la contraseña").toUpperCase()
//     if(contrasenia==""){
//         alert("valor incorrecto")
//         return
//     }
//     let edad= parseInt(prompt("ingrese su edad"))
//     if(edad == isNaN){
//         alert("valor incorrecto")
//         return
//     }
//     let localidad= prompt("ingrese su localidad").toUpperCase()
//     let usuario= new Usuario(nombre, contrasenia,edad,localidad)

//     usuarios.push(usuario)
//     console.log(usuarios)

// }

// let registro= document.getElementById("registrar")
// registro.addEventListener("click", registroUsuario)


//LOGIN
// document.getElementById("loginForm").addEventListener("submit", function(e){
//     e.preventDefault()
// })

// function logueoDeUsuario(){
//     const usuarioIngreso= document.getElementById("username").value;
//     const contraseñaIngreso= document.getElementById("password").value
//     let ingreso= false
//     let cantidadDeErrores= 0;
//     while (cantidadDeErrores<3 && ingreso==false){
//         for(const x of usuarios){
//             if(x.nombre == usuarioIngreso && x.contrasenia== contraseñaIngreso){
//                 alert("ingresando a tu cuenta");
//                 ingreso= true;
//             }
//             else{
//                 cantidadDeErrores++;
//                 alert("contraseña o usuario incorrecto, volve a intentar")
//             }
//         }   
//     }
//     if(ingreso==true){
//         alert("INGRESANDO A TU CUENTA")
//     }
//     else{
//         alert("cuenta bloqueada, recuperar contraseña")
//     }
// }
//     let boton= document.getElementById("boton")
//     boton.addEventListener("click", logueoDeUsuario)
//     console.log(usuarioIngreso)
//     console.log(contraseñaIngreso)

function Pelicula (nombreDePelicula, categoria, duracion){
    this.nombreDePelicula= nombreDePelicula
    this.categoria= categoria
    this.duracion= duracion
}

const peliculas= []

const pelicula1= new Pelicula("parasite", "terror", 125)
const pelicula3= new Pelicula("300", "historia", 130)
const pelicula2= new Pelicula("el conjuro", "terror", 150)

peliculas.push(pelicula1)
peliculas.push(pelicula3)
peliculas.push(pelicula2)

function filtrar(){
    Swal.fire({
        title: "INGRESA EL NOMBRE DE LA PELICULA",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "BUSCAR",
        showLoaderOnConfirm: true,


        preConfirm: (palabraClave)=>{
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = peliculas.filter( (pelicula)=> pelicula.nombreDePelicula.toUpperCase().includes(palabraClave))
            if(resultado.length>0){
                Swal.fire({
                    title: "Este es el resultado de tu busqueda",
                    html: '<table> <tr> <th> Nombre </th> <th> categoria </th> <th> duracion </th> </tr> <table/>' + 
                    resultado.map((  (pelicula)=> `<tr><td> ${pelicula.nombreDePelicula} </td><td> ${pelicula.categoria} </td><td> ${pelicula.duracion} </td>`))
                })
            } else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
        }
    })
}








// const butacas = []

// function agreagarButacas(cantidadDeButacas){
//     for(i=0; i<cantidadDeButacas; i++){
//         butacas.push(new Butaca(i+1,"disponible"));
//         console.log(butacas)

//     }
// }
// agreagarButacas(10)

// function butacaDisponible() {
//     for(i=0; i < butacas.length; i++){
//         if(butacas[i].estado == "disponible"){
//             console.log ("Butaca Disponible")
//              let seleccion= confirm ("Desea seleccionar la butaca " + butacas[i].numero + " ?")
//                 if(seleccion == true){
//                     butacas[i].estado = "ocupado"
//                     console.log("Su butaca es la N° " + butacas[i].numero)
//                     break
//                 } 
//         }
//         else {
//             console.log("Butaca ocupada")
//         }
//     }
//     let otraButaca= confirm("Desea selecionar otra butaca?")
//     if(otraButaca==true){
//         butacaDisponible()
//     }
// }
// butacaDisponible()
// // butacaDisponible()


// function BuscarButaca(){
//     let butacaSeleccionada= parseInt(prompt ("ingrese el numero de butaca"))
//     // let resultado= butacas.filter((x)=>x.numero.toUpperCase().includes(butacaSeleccionada))
//     let resultado = butacas.find((x)=> x.numero === butacaSeleccionada)
//     if(resultado != undefined){
//         console.log(resultado)
//     }
//     else{
//         alert("no se encontro")
//     }
// }
// BuscarButaca()







// function comprarEntradas(){
//     let precioEntrada= 5000;
//     let cantidadDeEntradas= parseInt (prompt(" EL PRECIO DE CADA ENTRADA ES DE "+ precioEntrada + " ELIGE LA CANTIDAD DE ENTRADAS QUE DESEAS COMPRAR"))
//     let TotalAPagar= precioEntrada*cantidadDeEntradas; 
//     if(notNaN== cantidadDeEntradas){
//         alert("ingrese un valor correcto")
//         return 
//     } 
//     alert ("LA CANTIDAD DE ENTRADAS SON " + cantidadDeEntradas + " Y EL TOTAL A PAGAR ES " + TotalAPagar);
//     (x) =>  x.entradasAdquiridas + cantidadDeEntradas

//     console.log(usuarios)
// }


// formulario





//agreagar peliculas a la cartelera




// function agregarPelicula(){

//     Swal.fire({
//         title: "Ingresa el nombre de la pelicula",
//         input: "text",
//         title: "Ingrese la categoria",
//         input: "text",
//         title: "ingrese la duracion"
//     })






    // let nombre= document.getElementById("nombrePelicula")
    // let categoria= document.getElementById("categoria")
    // let duracion= document.getElementById("duracion")

    // if(isNaN==duracion|| categoria== "" || nombre==""){
    //     alert("alguno de los valores es incorrecto")
    // }
        


//BOTONERA 
let botonfiltrar = document.getElementById("filtrar")
botonfiltrar.addEventListener("click", filtrar)



