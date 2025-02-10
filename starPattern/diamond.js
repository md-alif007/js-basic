let n = 5;

for(let i = 1; i <= n; i++){
    console.log((' '.repeat(n - i)) + ('*'.repeat((2 * i) - 1)))
}

let m = 4;
for(let i = m; i >= 1; i--){
    console.log((' '.repeat((m+1) - i)) + ('*'.repeat((2 * i) - 1)))
}

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//     console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
// }
