// TP 2 - Ejercicios con arrays y strings

// 1. Invertir un array sin usar reverse
function invertirArray(array) {
    let resultado = [];

    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }

    return resultado;
}

console.log(invertirArray([1, 2, 3, 4]));

// 2. Comprobar si una palabra o frase es palindromo
function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, "");
    let textoInvertido = textoLimpio.split("").reverse().join("");

    return textoLimpio === textoInvertido;
}

console.log(esPalindromo("reconocer"));

// 3. Contar vocales
function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let cantidad = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            cantidad++;
        }
    }

    return cantidad;
}

console.log(contarVocales("JavaScript es genial"));

// 4. Rotar un array hacia la derecha
function rotarArray(array) {
    if (array.length === 0) {
        return array;
    }

    let ultimoNumero = array.pop();
    array.unshift(ultimoNumero);

    return array;
}

console.log(rotarArray([10, 20, 30, 40]));

// 5. Ordenar numeros sin sort
function ordenarNumeros(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let auxiliar = array[j];
                array[j] = array[j + 1];
                array[j + 1] = auxiliar;
            }
        }
    }

    return array;
}

console.log(ordenarNumeros([5, 2, 9, 1]));

// 6. Reemplazar una palabra dentro de una frase
function reemplazarPalabra(frase, palabraBuscada, palabraNueva) {
    let partes = frase.split(" ");

    for (let i = 0; i < partes.length; i++) {
        if (partes[i] === palabraBuscada) {
            partes[i] = palabraNueva;
        }
    }

    return partes.join(" ");
}

console.log(reemplazarPalabra("me gusta programar en Java", "Java", "JavaScript"));

// 7. Obtener valores unicos sin Set
function obtenerUnicos(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

console.log(obtenerUnicos([1, 2, 2, 3, 4, 4, 5]));

// 8. Obtener valores que aparecen en dos arrays
function interseccion(array1, array2) {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !resultado.includes(array1[i])) {
            resultado.push(array1[i]);
        }
    }

    return resultado;
}

console.log(interseccion([1, 2, 3, 4], [3, 4, 5, 6]));

// 9. Contar cuantas veces aparece cada palabra
function frecuenciaPalabras(frase) {
    let palabras = frase.split(" ");
    let frecuencias = {};

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];

        if (frecuencias[palabra]) {
            frecuencias[palabra]++;
        } else {
            frecuencias[palabra] = 1;
        }
    }

    return frecuencias;
}

console.log(frecuenciaPalabras("hola mundo hola javascript"));

// 10. Crear la transpuesta de una matriz
function transponerMatriz(matriz) {
    let resultado = [];

    for (let columna = 0; columna < matriz[0].length; columna++) {
        let nuevaFila = [];

        for (let fila = 0; fila < matriz.length; fila++) {
            nuevaFila.push(matriz[fila][columna]);
        }

        resultado.push(nuevaFila);
    }

    return resultado;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transponerMatriz(matriz));
