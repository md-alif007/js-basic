let n = 'alif';

if (n.length <= 1) {
    console.log(n);
} else {
    let swap = n[n.length - 1] + n.slice(1, -1) + n[0];
    console.log(swap);
}