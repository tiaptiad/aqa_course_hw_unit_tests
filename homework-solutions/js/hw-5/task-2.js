/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';

for(let num=1;num<=100;num++){
    if (Number.isInteger(num/3 )&& Number.isInteger(num/5)){
        fizzBuzzResult+= num + " - делится и на 3 и на 5";
    } else if(Number.isInteger(num/3)){
        fizzBuzzResult+= num + " - делится на 3";
    } else if(Number.isInteger(num/5)){
        fizzBuzzResult+= num + " - делится на 5";
        } else {
            fizzBuzzResult+= num;
        }
    num<100 ? fizzBuzzResult+= "\n" : null;
} 

//console.log(fizzBuzzResult);
export { fizzBuzzResult };
