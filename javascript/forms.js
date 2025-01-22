const formulario= document.getElementById("form").addEventListener("click", function(e){
    e.preventDefault();
    const inputNombre= document.querySelector("#nombre")
    const inputTelefono= document.querySelector("#telefono")
    const inputMail= document.querySelector("#mail")
    const inputconsulta= document.querySelector("#consulta")
    

    const datosDelFormulario= {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        mail: inputMail.value,
        consulta: inputconsulta.value
    }
    let resultado= JSON.stringify(datosDelFormulario)
    localStorage.setItem('formulario', resultado)
})