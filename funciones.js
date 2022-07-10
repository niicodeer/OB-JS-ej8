//Una función sin parámetros que devuelva siempre "true"
function siempreTrue(){
    return true
}

siempreTrue();

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asinc_Hola(){
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}
asinc_Hola()

//Una función generadora de índices pares automáticos
function* idPares() {
    let id = 0;
    while (true) {
        id += 2;
        yield id;
    }
    
}

const pares = idPares();

console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
