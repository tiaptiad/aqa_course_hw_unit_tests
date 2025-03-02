/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowels = "aeiouAEIOU";
let vowelsAndConsonantsResult = '';
let qty_vow=0, qty_con=0;

for(let letter of word){
    vowels.includes(letter) ? qty_vow++ : qty_con++; //ожидаем, что будут только буквы
}

vowelsAndConsonantsResult = `${word} contains ${qty_vow} vowels and ${qty_con} consonants`;

//console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };
