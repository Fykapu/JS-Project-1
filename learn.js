'use strict';
//!Объекты

//Объект обычный
let pers = {
    name:"Vadim",
    age:48,
    dog:true
};
console.log(pers.name);
// Объект массив
let animals = ['cat','dog','frog'];
console.log(animals[2]);


//!Динамическая типизация

//? В строку
// 1
String(123);
// 2 будет СТРОКА qwerty56
console.log('qwerty'+ 56);
console.log(typeof('qwerty'+ 56));
console.log('http://vk.com/catalog/' + 3);
//? В число
// 1
Number('4');
console.log(5+(Number('5')));
//2 Прибавляем к строке пустое значение
console.log(typeof(+'5'));
console.log(5+ +'5');
//3 15px = 15
console.log(parseInt('15px'));
//Превращаем в число, то что ввёл пользователь. Для этого добавляем +
let answer = +prompt("HI!");


//! Преобразования в Boolean (true/false)

//? 0, "", null, undefined, NaN = false
// 1
//Ничего не будет, так как Switcher = false
let switcher = NaN;
if (switcher) {
    console.log("Working...");
}
//Switcher = true, будет working...
switcher = 1;
if (switcher) {
    console.log("Working...");
}
// 2. В первом случае - true, во втором - false
Boolean(2);
Boolean(0);
//3. В первом случае - true, во втором - false
console.log(!!"5");
console.log(!!"");
//TODO Пример while вывода чисел от 1 до 100
let i = 0;
while (true) {
    i=i+1;
    console.log(i);
    if (i == 100) {
        break;
    }
}


//!Взаимодействие с пользователем

alert("Hi bro)");
//Окно с выбором Ok, Cancel
confirm("Are you here?");

//? Пример с confirm. OK = true. CANCEL = false
let a = confirm("Are you here?");
if (a) {
    console.log("You chose OK");
}
//Окно с написанием текста
let b = prompt("Вам есть 18?");
console.log(b);

//! Операторы
//? Прибавляем и отнимаем 1 от переменной
let varPlusOne = 10,
    varMinesOne = 10;
//можно писать сразу в логе
++varPlusOne;
--varMinesOne;
console.log(varPlusOne);
console.log(varMinesOne);
//Остаток от деления
console.log(5%2);

//Сравнение строк
//true
console.log("2" == 2);
//false
console.log("2" === 2);

//И ИЛИ
let T = true,
    N = true;
//И true && true == true
console.log(T && N);
//ИЛИ true || false == true
N = false;
console.log(T || N);
//false так как !
console.log(!T || N);


//! Условия
if (2*4 == 8) {
    console.log('Верно!');
} else {
    console.log('Неверно');
}

//? вложенность условий
let num = 50;
if (num < 49){
    console.log("Мало");
} else if (num > 100){
    console.log('Много');
} else{
    console.log('Всё верно!!');
}
//такой же код, только короче
(num == 50) ? console.log("Число 50"):console.log("Число не 50");

//? Конструкция switch которая поддерживает несколько вложенностей if. 
num = 50;
switch(num) {
    case num < 49:
        console.log("Мало");
        break; // Без break комманды начнут выполняться одна за другой
    case num > 100:
        console.log('Много');
        break;
    case num > 80:
        console.log('Много');
        break;
    case 50:  // num == 50 не работает!!!
        console.log('Всё верно!!');
        break;
    default:  // default = else
        console.log('Что-то пошло нетак');
        break;w
}

//!Циклы
//Сначала проверяем, потом делаем
num = 50;
while (num<55){
    console.log(num);
    num++;
}
//Сначала делаем, потом проверяем
num = 50;
do {
    console.log(num);
    num++;
}
while (num<55);
//? Цикл for. Выполнение действий определённое колличество раз
for (let i=1;i<8;i++) { //Цикл от 1 до 7
    console.log(i);
}

//!Функции

function showMassage(text) { //Создание функции. Фунция НЕ выполняется до вызова
   console.log(text);
}
showMassage("Hellow World!"); //Вызов функции, аргумент text заменяется на "Hellow World!" в функции


let num = 20; 
function numbering(){
    let num = 12; //Переменные созданные В ФУНКЦИИ, работают только внутри неё
    console.log(num); // 12. Вывод локальной переменной
}
numbering();
console.log(num); //20. Вывод глобальной переменной

//todo Если в функции нет локальной переменной в действии, а есть глобальная. То она будет использовать глобальную
//Пример
let pet = "cats";
function secondFunc(){
    console.log(pet); //Выведет cats так как нет локальной переменной pet
}

//todo Примеры работы return
function calc(a,b){
    return(a + b); // завершает выполнение текущей функции и возвращает её значение
}
console.log(calc(3,4)); // Возвратит 7
console.log(calc(6,4)); // Возвратит 10

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));
  // expected output: 12
  
  console.log(getRectArea(-3, 4));
  // expected output: 0

//todo Превращаем локальную переменную в глобальную
function convertVar(){
    let num = 99;
    return num; //Теперь переменная num - глобальная
}
console.log(convertVar());

//? Виды функций

//1 function decloration. Даже если не объявлена - будет выполняться
FuncDic("Вызов до функции");
function FuncDic(a){
    console.log(a);
}
//2 function expression. Если функция не объявлена - она НЕ выполнится
let calcul = function(a,b){
    return(a+b);
};
console.log(calcul(10,5));
//3 Линейная функция
let calcu = (a,b) => a+b;
console.log(calcu(22,3));

//? СВОЙСТВА И МЕТОДЫ
let ab = "text";
console.log(ab.length); //Вывод 4
console.log(ab.toUpperCase()); //Вывод TEXT

let twelve = 12.2;
console.log(Math.round(twelve)); //Вывод 12

let eleven = "11.3px";
console.log(parseInt(eleven)); // Вывод 11
console.log(parseFloat(eleven)); // Вывод 11.3