function Usuario (nombre, contrasenia, edad, localidad) {
    this.nombre= nombre
    this.edad= edad
    this.contrasenia= contrasenia
    this.localidad= localidad
}

function Butaca (numero, estado){
    this.numero= numero
    this.estado= estado
}

function Pelicula (nombreDePelicula, categoria, duracion){
    this.nombreDePelicula= nombreDePelicula
    this.categoria= categoria
    this.duracion= duracion
}



setTimeout(()=>{
    const formularioCompra= document.getElementById("FormEntradas").addEventListener("submit", function(e){
        e.preventDefault();
        const emailCompra= document.getElementById("emailEntradas")
        const telCompra= document.getElementById("TelefonoEntradas")
    
        const datosDeCompra = {
            mail: emailCompra.value,
            tel: telCompra.value
        }
        if(datosDeCompra.mail && datosDeCompra.tel){
            let compra= JSON.stringify(datosDeCompra)
            localStorage.setItem('datos de compra', compra)
            window.location.href= "datosCompra.html"
        }
     
        
    })


},1)


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDc5YjhlM2QxNTY2MmU1MTNkMDg0NGNhZTQ1Y2JjMCIsIm5iZiI6MTczODI3OTg5OC42OTYsInN1YiI6IjY3OWMwYmRhMzVlMzFkY2VlNzRkMGMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Doxhv3loQYCSdQap3_o7kxbPS4UUlXjQKYDZChr2bc'
    }
  };

const url= 'https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1'
const peliculaContainer= document.getElementById("container")
fetch(url, options)
    .then(res => res.json())
    .then(res => {
        const peliculas= res.results
        peliculas.forEach((pelicula) => {
                const peliculaElement= document.createElement("div")
                const imageUrl =  `https://image.tmdb.org/t/p/w500${pelicula.poster_path} `
                peliculaElement.innerHTML = `
            <a href=./pages/selectorDeButacas.html><img src= "${imageUrl}" alt="${pelicula.original_title}" ></a>
             <h2>${pelicula.original_title}</h2>`

             const select= peliculaElement.querySelector('a')
             select.addEventListener("click", ()=>{
                localStorage.setItem('pelicula elegida', pelicula.original_title )
                localStorage.removeItem('butacas Seleccionadas')
             })
             
            
             
            peliculaContainer.appendChild(peliculaElement)
            })
    })
    .catch(err => console.error(err));

    function filtrar(){
        Swal.fire({
            title: "INGRESA EL NOMBRE DE LA PELICULA",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "BUSCAR",
            showLoaderOnConfirm: true,
            preConfirm: (palabraClave)=>{
                palabraClave = palabraClave.trim().toUpperCase()
                fetch(url,options)
                .then(res=> res.json())
                .then(data=> {
                    const peliculas= data.results
                    let resultado= peliculas.filter((pelicula=> pelicula.original_title.toUpperCase().includes(palabraClave)))
                    if(resultado.length>0){
                    Swal.fire({
                        title: "Este es el resultado de tu busqueda",
                        html: resultado.map( (pelicula)=> `<tr><td> ${pelicula.original_title} </td> <a href=./pages/selectorButacas.html><img src= "${`https://image.tmdb.org/t/p/w500${pelicula.poster_path} `}"></a><td> </td>`)
                    })

        
                }else{
                    Swal.fire({
                        title:`no se encuentra coincidencias`,
                        icon:'error',
                        confirmButtonText: `ok`,
                    })
                }})

                
                } 
            })
        }
    
    let botonfiltrar = document.getElementById("filtrar")
    
    setTimeout(()=>{
        botonfiltrar.addEventListener("click", filtrar)
    }, 1)
    ;

    const botonEntradas= document.getElementById("botonEntradas")
    setTimeout(()=>{
        botonEntradas.addEventListener("click", function(){
            const entradas= parseInt(document.getElementById("cantidadDeEntradas").value)
            const precioEntrada= 5000
            function comprarEntradas(){
                let precio= entradas*precioEntrada
                localStorage.setItem("entradas", precio)
            }
            comprarEntradas()
        })
    },1)
 
 
    const contenedorDatos= document.getElementById("resumenCompra")

const butacas = []

const contenedorButacas= document.getElementById("contenedorButacas")

const precioEntrada= 5000
setTimeout(function agregarButacas(){
    for(let i =0; i<156; i++){
        butacas.push(new Butaca(i+1,"disponible"));
        let button= document.createElement("button")
        button.innerHTML= i+1
        contenedorButacas.appendChild(button)
        button.addEventListener("click", ()=>{
            seleccionButacas(button)
        })
        


    }
    function seleccionButacas(but){
        const butacaElegida= parseInt(but.innerText)
        let seleccionadas = JSON.parse(localStorage.getItem('butacas Seleccionadas')) || []
        
        if(seleccionadas.includes(butacaElegida)){
            seleccionadas= seleccionadas.filter(butaca=> butaca !== butacaElegida)
            but.style.backgroundColor= "";
        }
        else{
            seleccionadas.push(butacaElegida)
            but.style.backgroundColor = "red"
        }
        const precio= JSON.parse(seleccionadas.length* precioEntrada)
        localStorage.setItem('precio', precio)
        localStorage.setItem('butacas Seleccionadas', JSON.stringify(seleccionadas))
        }

    },1)





function datos(){
    let peliculaElegida= localStorage.getItem('pelicula elegida')
    let peli= document.createElement("h3")
    peli.innerHTML= "Pelicula: "+ peliculaElegida
    contenedorDatos.appendChild(peli)
    let datos= JSON.parse(localStorage.getItem('datos de compra'))
    let mail= document.createElement("h3")
    mail.innerHTML= "Mail: " + datos.mail
    contenedorDatos.appendChild(mail)
    let tel= document.createElement("h3")
    tel.innerHTML= "Telefono: " + datos.tel
    contenedorDatos.appendChild(tel)
    let butacaStorage= JSON.parse(localStorage.getItem('butacas Seleccionadas'))
    let butaca= document.createElement("h3")
    butaca.innerHTML= "N° de butaca: " + butacaStorage
    contenedorDatos.appendChild(butaca)
    let precioFinal= localStorage.getItem('precio')
    let precio= document.createElement("h3")
    precio.innerHTML= "TOTAL: $" + precioFinal
    contenedorDatos.appendChild(precio)
}
datos()

const confirm= document.getElementById("confirmacion").addEventListener("click",()=>{
    
    let datos= JSON.parse(localStorage.getItem('datos de compra'))
    Swal.fire({
        title: "COMPRA CONFIRMADA",
        text: "enviamos los datos de la compra a tu mail: " + datos.mail,
        icon: "success",
        confirmButtonText: "CONTINUAR"
    })
    .then((result)=>{
        if(result.isConfirmed){
            window.location.href= "../index.html"
        }
    })
} )



    
    





 





