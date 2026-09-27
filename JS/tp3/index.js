// TP 3 - Funciones, objetos, DOM y eventos

// 1. Funcion declarativa y funcion expresada
function cuadrado(numero) {
    return numero * numero;
}

const cubo = function(numero) {
    return numero * numero * numero;
};

console.log("Cuadrado de 5:", cuadrado(5));
console.log("Cubo de 2:", cubo(2));

// 2. Arrow function con parametro por defecto
const saludar = (nombre, edad = 18) => {
    return "Hola " + nombre + ", tenes " + edad + " anios";
};

console.log(saludar("Juan"));
console.log(saludar("Sofia", 24));

// 3. Objeto con propiedades y metodo
const estudiante = {
    nombre: "Martin",
    edad: 21,
    presentarse: function() {
        return "Soy " + this.nombre + " y tengo " + this.edad + " anios";
    }
};

console.log(estudiante.presentarse());

// 4. Desestructuracion
const { nombre, edad } = estudiante;
console.log("Nombre:", nombre);
console.log("Edad:", edad);

// 5. Spread y rest
let numeros = [1, 2, 3];
let numerosNuevos = [...numeros, 4, 5];
console.log(numerosNuevos);

function sumar(...valores) {
    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        total += valores[i];
    }

    return total;
}

console.log("Suma:", sumar(5, 10, 15));

// 6. Manipulacion del DOM
const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo cambiado desde JavaScript";
titulo.classList.add("destacado");

const lista = document.getElementById("lista");
const elementoNuevo = document.createElement("li");
elementoNuevo.textContent = "Elemento creado con JavaScript";
lista.appendChild(elementoNuevo);

// 7. Evento click
const campoLista = document.getElementById("texto-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", function() {
    let texto = campoLista.value.trim();

    if (texto !== "") {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        campoLista.value = "";
    }
});

// 8. Submit y preventDefault
const formulario = document.getElementById("formulario");
const datoFormulario = document.getElementById("dato-formulario");
const respuestaFormulario = document.getElementById("respuesta-formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    respuestaFormulario.textContent = "Dato recibido: " + datoFormulario.value;
    datoFormulario.value = "";
});

// 9. Eventos keydown y change
const inputEnter = document.getElementById("input-enter");

inputEnter.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter" && inputEnter.value.trim() !== "") {
        const item = document.createElement("li");
        item.textContent = inputEnter.value;
        lista.appendChild(item);
        inputEnter.value = "";
    }
});

const selector = document.getElementById("selector");
const opcionElegida = document.getElementById("opcion-elegida");

selector.addEventListener("change", function() {
    opcionElegida.textContent = "Elegiste: " + selector.value;
});
