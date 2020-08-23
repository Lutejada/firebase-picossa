const comprasBtn = document.getElementById("grabarBtn");

const formulario = document.getElementById("formulariocompras");

//variables de los campos//
const ordenPedido = document.getElementById("ordenpedido");
const costoEnvio = document.getElementById("costoEnvio");
const trm = document.getElementById("trm");
const fecha = document.getElementById("fecha");

const referencia = document.getElementById("referencia");
const descripcion = document.getElementById("descripcion");
const talla = document.getElementById("talla");
const peso = document.getElementById("peso");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const categoria = document.getElementById('categoria')
    // boton para crear mas formularios//


const contenerdorFormulario = document.getElementById('variableItems')
const newElements = document.getElementById('new-elements')



//eventlistener
eventlistener();

function eventlistener() {
    formulario.addEventListener("submit", capturarDatos);

    document.addEventListener("DOMContentLoaded", iniciarCompras);

    //eventos validar campo//

    ordenPedido.addEventListener("blur", validarCampo);
    costoEnvio.addEventListener("blur", validarCampo);
    trm.addEventListener("blur", validarCampo);
    fecha.addEventListener("blur", validarCampo);

    referencia.addEventListener("blur", validarCampo);
    descripcion.addEventListener("blur", validarCampo);
    talla.addEventListener("blur", validarCampo);
    peso.addEventListener("blur", validarCampo);
    cantidad.addEventListener("blur", validarCampo);
    precio.addEventListener("blur", validarCampo);
    categoria.addEventListener('blur', validarCampo)


    //evento para boton plus//






}

//funciones

function iniciarCompras(e) {
    e.preventDefault();

    comprasBtn.disabled = true;
}

function capturarDatos(e) {
    e.preventDefault();

    const ordenPedido = document.getElementById("ordenpedido").value;
    const costoEnvio = document.getElementById("costoEnvio").value;
    const trm = document.getElementById("trm").value;
    const fecha = document.getElementById("fecha").value;

    const referencia = document.getElementById("referencia").value;
    const descripcion = document.getElementById("descripcion").value;
    const talla = document.getElementById("talla").value;
    const peso = document.getElementById("peso").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById('categoria').value


    console.log(talla);

    //esta funcion crea los elementos capturado y los ponne al lado del formulario//

    crearNuevoElmento(descripcion, ordenPedido, costoEnvio, trm, fecha, referencia, talla, peso, cantidad, precio, categoria)

}

function validarCampo() {

    if (ordenPedido.value !== "" && costoEnvio.value !== "" && trm.value !== "" && fecha.value !== "") {
        comprasBtn.disabled = false
    }

    validarLongitud(this);


}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.border = "1px solid green";
        campo.classList.remove("error");
    } else {
        campo.style.border = "1px solid red";
        campo.classList.add("error");
    }
}


function crearNuevoElmento(descripcion, ordenPedido, costoEnvio, trm, fecha, referencia, talla, peso, cantidad, precio, categoria) {


    const newElements = document.getElementById('new-elements')

    let div = document.createElement('div')

    div.classList.add('newElementStyle')

    let html = `<h2 class="title-new-element"> ${descripcion}</h2>
<div class = "information-box">
 <h3> Orden de Pedido:<p>${ordenPedido}</p></h3>
 <h3> Costo de envio:<p>${costoEnvio}</p></h3>
 <h3> TRM:<p>${trm}</p></h3>
 <h3> Fecha:<p>${fecha}</p></h3>
 <h3> Referencia:<p>${referencia}</p></h3>
 <h3> Descripcion:<p>${descripcion}</p></h3>
 <h3> Categoria:<p>${categoria}</p></h3>
 <h3> Talla:<p>${talla}</p></h3>
 <h3> Cantidad:<p>${cantidad}</p></h3>
 <h3> Peso:<p>${peso}</p></h3>
 <h3> Precio:<p>${precio}</p></h3>
</div>

`

    newElements.appendChild(div).innerHTML = html

    console.log(referencia)

}