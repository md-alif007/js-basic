const number = [5, 6, 11, 12, 98, 5];
console.log('The array is : ', number);

const find = 5;

let count = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] === find) {
        count++;
    }
}
console.log('The repeatation of the number is : ', count); 
