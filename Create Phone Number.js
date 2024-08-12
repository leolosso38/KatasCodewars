const formato = "(xxx) xxx-xxxx";
const caracteres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const caracteres1 = [1, 1, 1, 1, 1, 1, 1, 1, 1,1 ];
const caracteres2 = [9,8,7,6,5,4,3,2,1,0];


function createPhoneNumber(numbers) {
    let resultado = "";
    let index = 0;

    for (let char of formato) {
        if (char === 'x') {
            resultado += numbers[index];
            index++;
        } else {
            resultado += char;
        }
    }

   
    return resultado;
}

console.log(createPhoneNumber(caracteres)); 
console.log(createPhoneNumber(caracteres1)); 
console.log(createPhoneNumber(caracteres2));
