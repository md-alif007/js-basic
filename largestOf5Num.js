let numbers = [-5, -2, -6, 0, 1];
let max = numbers[0];

for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}

console.log(max);
