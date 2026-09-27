// TP 1 - Arrays y Strings

// 1. Crear un array con cinco palabras
let palabras = [];

let palabra1 = prompt("Ingresa la primera palabra:");
let palabra2 = prompt("Ingresa la segunda palabra:");
let palabra3 = prompt("Ingresa la tercera palabra:");
let palabra4 = prompt("Ingresa la cuarta palabra:");
let palabra5 = prompt("Ingresa la quinta palabra:");

palabras.push(palabra1);
palabras.push(palabra2);
palabras.push(palabra3);
palabras.push(palabra4);
palabras.push(palabra5);

console.log("Array original:", palabras);

// 2. Modificar el array
let nuevaPrimera = prompt("Ingresa una palabra para agregar al inicio:");
palabras.unshift(nuevaPrimera);

let nuevaUltima = prompt("Ingresa una palabra para agregar al final:");
palabras.push(nuevaUltima);

palabras.splice(1, 1);
console.log("Array modificado:", palabras);

// 3. Analizar las palabras
let palabraMasLarga = palabras[0];
let hayLetraA = false;

for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i] + " tiene " + palabras[i].length + " caracteres");

    if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }

    if (palabras[i].toLowerCase().includes("a")) {
        hayLetraA = true;
    }
}

console.log("La palabra mas larga es:", palabraMasLarga);
console.log("Hay alguna palabra con la letra a:", hayLetraA);

// 4. Invertir todas las palabras
let invertidas = [];

for (let i = 0; i < palabras.length; i++) {
    let invertida = palabras[i].split("").reverse().join("");
    invertidas.push(invertida);
}

console.log("Palabras invertidas:", invertidas);
alert("Palabras invertidas: " + invertidas.join(", "));

// 5. Comprobar palindromos
let respuesta = prompt("Queres comprobar palindromos? Escribi si o no:");

if (respuesta !== null && respuesta.toLowerCase().trim() === "si") {
    for (let i = 0; i < palabras.length; i++) {
        let original = palabras[i].toLowerCase();
        let alReves = original.split("").reverse().join("");

        if (original === alReves) {
            console.log(palabras[i] + " es palindromo");
        }
    }
}

// 6. Bonus
let mayoresA4 = 0;

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 4) {
        mayoresA4++;
    }
}

console.log("Palabras con mas de 4 caracteres:", mayoresA4);
console.log("Palabras unidas:", palabras.join("-"));
