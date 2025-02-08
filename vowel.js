const n = 'Mohammad Alif Rahman';

const vowels = 'aeiouAEIOU';

let count = 0;

for (let i= 0; i < n.length; i++) {
    if (vowels.includes(n[i])) {
        count++;
    }    
}
console.log(count);