//Ejercicio1:
console.log("Ejecicio 1: Determina el resultado de un número x elevado a una potencia n.");

function potencia(x, y) { return Math.pow(x, y); }
console.log(potencia(3, 3));

//Ejercicio2:
console.log();
console.log("Ejercicio 2: Determina si un número n se encuentra en un rango determinado.");
var numero = 19;
console.log("Numero ingresado: ", numero);
if (numero >= 1 & numero <= 10) {
    console.log("Numero esta entre el rango de 1 a 10");
} else if (numero >= 11 & numero <= 20) {
    console.log("Numero esta entre el rango de 11 a 20");
} else if (numero >= 21 & numero <= 30) {
    console.log("Numero esta entre el rango de 21 a 30");
} else {
    console.log("Numero fuera de rango");
}

//Ejercicio3:
console.log();
console.log("Ejercicio 3: Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.");

function conversionSegundos(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}
var segundos = 3675;
console.log(conversionSegundos(segundos));

//Ejercicio4:
console.log();
console.log("Ejercicio 4: Determine el mayor de 4 enteros.");
var arreglo = [5, 50, 10, 225, 58];
maximo = 0;
for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximo < arreglo[i]) {
        maximo = arreglo[i];
    }
}
console.log(maximo);

//Ejercicio5:
console.log();
console.log("Ejercicio 5: Calcula la suma de una lista (arreglo) de elementos");
var numero = [5, 5, 5, 15];
var suma = 0;
for (var i = 0; i < 4; i++) {
    suma = suma + numero[i];
}
console.log('suma = ' + suma);

//Ejercicio6:
console.log();
console.log("Ejercicio 6: Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.");

function listas(numx) {
    var contenido = [5, 3, 16, 28, 45, 95, 23, 15, 56];
    for (let i = 0; i < contenido.length; i++) {
        if (numx == contenido[i]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(listas(7));

//Ejercicio7:
console.log();
console.log("Ejercicio 7:, Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso. ");

function lista1() {
    var contenido = [1, 2, 3, 4, 5];
    const limit = contenido.length - 1;
    for (let i = 0; i < limit; i++) {
        const element = contenido[i];
        next = contenido[i + 1];
        if (element > next) {
            return false;
        }
    }
    return true;
}
console.log(lista1());

//Ejercicio8:
console.log();
console.log("Ejercicio 8: encuentra en un rango determinado.Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.");

function comparacion() {
    a = [1, 2, 3, 4, 5]
    b = [1, 2, 3, 4, 5]
    if (a.toString() == b.toString()) {
        return true;
    } else {
        return false;
    }
}
console.log(comparacion());

//Ejercicio9:
console.log();
console.log("Ejercicio 9:Realizar un función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.");

const sumaRecur = numR => {
    if (numR.length === 0) {
        return 0;
    } else {
        let [first, ...rest] = numR;
        return first + sumaRecur(rest);
    }
}
console.log(sumaRecur([1 + 3 + 5 + 7 + 9 + 10]));

//Ejercicio 10:
console.log();
console.log("Ejercicio 10:Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares. ");

function numpar(x) {
    var y = [];
    var q = 0;
    var r;
    for (let z = 0; z < x.length; z++) {
        r = x[z] % 2;
        if (r == 0) {
            y[q] = x[z];
            q = q + 1;
            //console.log(q);
        }
    }
    console.log(y);
}
console.log(numpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Ejercicio 11:
console.log();
console.log("Ejercicio 11:Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. ");

function conjuntoNum1() {
    var L1 = new Set([50, 10, 80, 60, 90, 15, 20, 50]);
    var L2 = new Set([10, 25, 35, 45, 65, 85, 20, 90]);
    var union = new Set([...L1, ...L2]);
    var interseccion = new Set([...L1].filter(a => L2.has(a)));
    var diferencia = new Set([...L2].filter(a => !L1.has(a)));
    console.log("Resultados de los calculos realizados");
    console.log("Union") + console.log(union);
    console.log("Interseccion") + console.log(interseccion);
    console.log("Diferencia") + console.log(diferencia);
}
console.log(conjuntoNum1());

//Ejercicio12:
console.log();
console.log("Ejercicio 12 Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave. ");

function mapaDatos(clave) {
    var MapaDa = new Map();
    MapaDa.set("clave1", new Array("ISC", "Hipolito", "Aban", "hipolito.abannoh@itsva.edu.mx"));
    MapaDa.set("clave2", new Array("ADMON", "Juan", "Albares", "juan.albares@gmail.com"));
    MapaDa.set("clave3", new Array("CIVIL", "Edgar", "Ramirez", "Edgar.Ramires@gmail.com"));
    var resultado = "";
    resultado += "Carrera: " + MapaDa.get(clave)[0] + "\n";
    resultado += "Nombre: " + MapaDa.get(clave)[1] + "\n";
    resultado += "Apellido: " + MapaDa.get(clave)[2] + "\n";
    resultado += "Correo: " + MapaDa.get(clave)[3] + "\n";
    return resultado;
}
console.log(mapaDatos("clave1"));