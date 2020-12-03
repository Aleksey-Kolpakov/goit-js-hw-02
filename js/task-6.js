let input;
let total = 0;
const numbers = [];
// console.log(typeof total);
while (true) {
    input = prompt('Введите число, для суммирования Отмена- остановит процесс');
    if (input===null) {
        break; 
    }
    numbers.push(Number(input));
    console.log(numbers);    
    }
if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
        
    }
    console.log('Общая сумма чисел равна', total);
}
else { console.log('Вы не ввели ни одного числа');}
