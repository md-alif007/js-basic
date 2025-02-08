const n = 'I am learning Programming to become a programmer';
console.log(n);

let words = n.split(' ');
let longestWord = '';

for(let word of words){
    if(word.length > longestWord.length){
        longestWord = word;
    }
}
console.log(longestWord);