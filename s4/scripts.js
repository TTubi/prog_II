// Comentario de una linea

/*
Comentario
Multilinea
*/

//Tipo de dato int y float
//let y const
let x = 5
const PI = 3.14

// typeof string; number; boolean; undefined; NaN(Not a Number)

let texto = `Hola
esto es
multilinea` 

alert("HOLA!")// cartel de mensaje

let nombre = "Agustin"

alert(`Hola ${nombre}!`)

/*
    && AND
    ! NOT
    || OR
*/

// ITERADORES 
for (let i = 0; i < 5; i++){
    console.log("Valor de i: ", i)
}

let condicion
do{
    // codigo
} while(condicion)

// FUNCIONES - parametros
function saludar(nombre, apellido){
    console.log("Hola ", nombre, apellido)
}

//argumento
saludar("Pedro", "Perez")

//Retorno
function funcionRetorno(nombre, apellido){
    return `Hola ${nombre} ${apellido}`
}

let saludo = funcionRetorno("Agustin", "Singh")
console.log(saludo)
console.log(funcionRetorno)

// OBJETOS

let persona = {nombre: "Agustin", 
     edad: 24,
     profesion: "Arbitro",
     presentarse: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`)
     }    
    }
console.log(persona.profesion)
persona.profesion = "Programador"

let perro = {
    nombre: "Toby",
    edad: 10,
    ladrar: function(){
        console.log("Guau!")
    }
}

perro.ladrar()
