const Producto= function(nombre, precio, stock){
    this.nombre= nombre;
    this.precio= precio;
    this.stock= stock;
}

let perfection= new Producto("perfection", 28000, 35)
let zugeClub= new Producto("Zuge-Club", 25000, 37)
let space= new Producto("Space", 25000, 40)

let lista= [perfection,zugeClub,space]

function filtrarProducto(){
    let palabraclave= prompt("ingresa el producto que buscas").toUpperCase()
    let resultado= lista.filter((x)=>x.nombre.toUpperCase().includes(palabraclave))
    if(resultado.length>0){
        console.table(resultado)
    }
    else{
        alert("no se encontro")
    }
}


function agregarProducto(){
    let nombre= prompt("Ingresa el nombre del producto").toUpperCase()
    let precio= parseInt(prompt("Ingresa el precio del producto"))
    let stock= parseInt(prompt("Ingresa el stock disponible"))

    if(isNaN(precio) || isNaN(stock)|| nombre==""){
        alert("Ingrese valores validos")
        return
    }
    let producto= new Producto(nombre,precio,stock)
    lista.push(producto)
    console.log(lista)
}
//BOTONERA

let agregar= document.getElementById("agregar")
agregar.addEventListener("click", agregarProducto)

let filtrar= document.getElementById("filtrar")
filtrar.addEventListener("click", filtrarProducto)





// EVENTOS 
//   INPUT: CAPTURA LOS CARACTERES, SE PUEDE UTILIZAR PARA UN BUSCADOR CON FILTER
//   CHANGE: CAPUTRA EL VALOR LUEGO DE SALIR DEL INPUT, VALIDACION DE FORMULARIOS
// 
// 
// 
// 
// 
// 
// 
// //
