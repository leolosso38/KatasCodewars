function solution(number){
  
  let suma = 0;
    
    for (let numero = 0; numero < number; numero++) {
        if (numero % 3 === 0 || numero % 5 === 0) {
            suma += numero;
        }
    }
    
    return suma;
}

console.log(solution(10));
console.log(solution(23));
