let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    if (i === 1) {
        console.log(spaces + '*');
    } else if (i === n) {
        console.log('*'.repeat(2 * n - 1));
    } else {
        console.log(spaces + '*' + ' '.repeat(2 * i - 3) + '*');
    }
}
