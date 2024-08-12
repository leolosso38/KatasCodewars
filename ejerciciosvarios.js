// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const vocales=["a","e","i","o","u"]
const texto= "hola mundo"
const minuscula = texto.toLowerCase()
let contador=0
for (let i = 0 ; i <minuscula.length;i++){
    const caracter = minuscula[i]
    if (vocales.includes (caracter)){
        contador++
    }
}
console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const myArray2 = [1,2,3,4,5,6,7,8,9,10]
let multiplicar=1
for ( let i = 0; i <myArray2.length;i++){

    multiplicar *= myArray2[i]

}

console.log(multiplicar)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const myArray3 = [1,2,3,4,5,6,7,8,9,10]

for ( let i = 0; i <myArray3.length;i++){

    const multiplicacion = 5* myArray3[i]
    console.log(multiplicacion)
}


// 8. Usa un bucle para invertir una cadena de texto
const string= "Leonardo Matias Losso"
let reversa=""
for ( let i = string.length -1 ;i>=0; i--){

    reversa += string[i]
    
}
console.log(reversa)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

const Fibonacci=[0,1]
const cantidad = 10

for ( let i = 2 ;i<cantidad;i++){

    const siguientenumero = Fibonacci [i - 1] + Fibonacci [i -2 ]

   Fibonacci.push(siguientenumero)
}
console.log(Fibonacci)
