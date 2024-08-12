function narcissistic(numero) {
  
  
  
  let digitos = numero.toString()
  
  let numeroDigitos  = digitos.length
  
  let suma=0
  
  for (let digito of digitos){
     suma +=Math.pow(parseInt(digito), numeroDigitos)
    }
  return suma === numero
    
  }

console.log (narcissistic(153))
console.log (narcissistic(1938))
console.log (narcissistic(9474))
console.log (narcissistic(3000))
