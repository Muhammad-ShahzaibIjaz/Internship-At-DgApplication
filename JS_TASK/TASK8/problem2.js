function convertUpperCase(input){
    let words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}

let input = "the quick brown fox";
console.log(input);
input = convertUpperCase(input);
console.log(input);