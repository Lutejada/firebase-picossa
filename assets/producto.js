// firestore

const db = firebase.firestore();
export { db }
console.log(db)

// capturar Datos
const formulario = document.getElementById("crear-producto");
const formConsulta = document.getElementById("consultar-producto");
const productoBtn = document.getElementById('productoBtn')
const crearBtn = document.getElementById('crearBtn')

const referencia = document.getElementById("ref")
const descripcion = document.getElementById("descripcion")
const talla = document.getElementById("talla")
const categoria = document.getElementById("categoria")
const peso = document.getElementById("peso")

const consutarProducto = document.getElementById("consulta")


// addEventListener//
eventlistener()

function eventlistener() {

    document.addEventListener('DOMContentLoaded', iniciarproducto)
    console.log(crearBtn)


    referencia.addEventListener('blur', validarCampo)
    descripcion.addEventListener('blur', validarCampo)
    talla.addEventListener('blur', validarCampo)
    peso.addEventListener('blur', validarCampo)
    categoria.addEventListener('blur', validarCampo)

    consutarProducto.addEventListener('blur', validarCampo)


    //Evento Captura datos de crear producto//
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();


        const referencia = document.getElementById("ref").value;
        const descripcion = document.getElementById("descripcion").value;
        const talla = document.getElementById("talla").value;
        const categoria = document.getElementById("categoria").value;
        const peso = document.getElementById("peso").value;

        console.log('referencia')



        db.collection('productos').doc().set({

                referencia: referencia,
                talla: talla,
                descripcion: descripcion,
                peso: peso,
                categoria: categoria

            }).then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });



        console.log(referencia);
        console.log(descripcion);
        console.log(talla);


    });


    //Evento Consulta De producto
    formConsulta.addEventListener("submit", function(e) {
        e.preventDefault()

        const consultarProducto = document.getElementById("consulta").value;
        console.log(consutarProducto)

        db.collection("productos").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots

                var producto = doc.data()
                if (producto.referencia == consultarProducto) {
                    console.log("es correcto")
                } else {
                    console.log("no se encontro un producto")
                }
                //console.log(doc.id, " => ", doc.data());


            });
        });

    });


}



// funciones
function iniciarproducto() {
    productoBtn.disabled = true
    crearBtn.disabled = true
}

//validad campos de los formulario//

function validarCampo() {


    validarLongitud(this)

    if (referencia.value !== "" && descripcion.value !== "") {
        crearBtn.disabled = false
    }


    if (consutarProducto.value !== "") {

        productoBtn.disabled = false
    }

}

function validarLongitud(campo) {

    if (campo.value.length > 0) {

        campo.style.borderColor = "green"
        campo.classList.remove('error')

    } else {
        campo.style.borderColor = "red"
        campo.classList.add('error')
    }

}

//export { db }