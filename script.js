'use strict';
//---------FUNCTIONS----------

/* const bookings = [];
//we can pass any value in the fucntion parameters. It has to be in order

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //   ES5 way of doing it
  //    numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800); // will take the default parameter from gunction paramater
 */
//---------Value vs Reference ----------
/* 
const flight = 'Lh234';
const kris = {
  name: 'Kristaps Mincans',
  passport: '234554556566',
};

const checkIn = function (flight, passanger) {
  flight = 'Lh99';
  passanger.name = 'Mr ' + passanger.name;

  if (passanger.passport === 234554556566) {
    alert('checkIn');
  } else {
    alert('wrong passport');
  }
};
//checkIn(flight, kris);

console.log(flight);
console.log(kris);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(kris);
checkIn(flight, kris); */

//We have two examples above on object reference. Their reference can be changed and it can effect the outcome of function. Try and uncomment checkIn(flight, kris);

//DEFINITION -- Passing by Value & Passing by Value
//Javascript does not have passing by refference .
//We pass the refference to the function. However it is still value , value that contains refference address

///--------FIRST CLASS FUNCTIONS------
//-----Fucntion accept other ---functions
/* 
const oneWord = function (x) {
  return x.replace(/ /g, '').toLowerCase();
};

const upperFirstword = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function -because it takes another function

//Below we pass 2 funciton through transformer function
const transformer = function (str, fn, fn2) {
  console.log(`Orginal string: ${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`transformed string : ${fn2(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is the best', oneWord, upperFirstword);

// JS uses callbacks all the time
const high5 = function () {
  console.log('hi');
};
document.body.addEventListener('click', high5);

['jonas', 'theodor', 'adam'].forEach(high5);
 */

//----------FUCNTIONS RETURN NEW FUNCTIONS-------
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} ${name}`);
  };
};

const greeterHey = greet('this will be 1st function');
greeterHey('Kris');
greeterHey('theo');

greet('hello')('you'); // Logs script.js:102 hello you you

const greetMe = greets => firstName =>
  console.log(`${firstName} and ${greets}`);

greetMe('Kris')('you');
 */
//---------//-----------

/* //-------- THE CALL AND APPLY METHOD ---------

// --- CALL METHOD ---
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(filghtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}flight ${this.iataCode}${filghtNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${filghtNum}`, name });
  },
};

lufthansa.book(234, 'krist mincans');
lufthansa.book(345, 'theodor');

const eurowings = {
  airline: 'Eurowing',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // <--lufthansa book function

//book(23, 'kris min'); // --wont work because it has a -this.keyword and it points to undefine.
// you need a binding method to call the function --bellow answer

book.call(eurowings, 23, 'kristaps mincans');
// whatever we pass it this will refer to first element -eurowing this case
console.log(eurowings);

book.call(lufthansa, 25, 'theodors mincans');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'EW',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//---APPLY METHOD --- //  --applies for the array

const flightData = [583, 'george cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // we get the same result from call method

//both logs  script.js:167 {airline: "Swiss airlines", iataCode: "EW", bookings: Array(2)}

//----------- BIND METHOD-----------------
//---------- Functioons ----------------
//Bind does not imediatlly call function but it returns new function where  -this keyword is bound
// Bind allows us manually set -this keyword for any fucntion call

//book.call(eurowings, 23, 'kristaps mincans');

//this will return new function that will always BE SET TO EUROWINGS

const bookNew = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookNew(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // we can preset some arguments like 23 -flightNum
bookEW23('Marianne Have');
bookEW23('Ilgonis');

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

//adding .bind behind function will connect this keyword to lufthansa
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application-------------
// it means pre-setting parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23); // we use -null -instead of this -keyword
//const addVat = value => value + value * 0.23 // this will be the same as above
console.log(addVat(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23); // rate is pre-set
console.log(addVat2(100)); //logs 123
console.log(addVat2(23)); // logs 28.29

/* const tax = rate => value => console.log(`${rate}` * `${value}`);

tax(0.1)(200);
const addSkat = tax.bind(null, 23);
addSkat(100)(10);
 */

//-------------------Immediatly invoked function expressions--------------------------------

/* const runOne = function () {
  console.log('this will never run again ');
};
runOne();

//This is called immediately invoked function

(function () {
  console.log('this will never run'); // This is function value wrapped with paranteses
})();

(() => console.log('this will never run'))(); // The same as above
 */
//-------------------CLOSURE--------------------------------

// Closure:VE attached to the function, exactly as it was in the time and place the funciton was created
// A funcion has access to the variable environment of th eexecution contect in which it was created

/* const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker); // this is way to take a look inside the closure function
 */
/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assinged f function
h();
f();
console.dir(f);

//Example 2

const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boading all ${n} passangers `);
    console.log(`there are 3 groups ,each with ${perGroup} passangers`);
  }, wait * 1000);
  console.log(`Will start Boarding in ${wait} seconds`);
};
const perGroup = 1000;

boardPassangers(180, 3);
 */

//---------------- CODING CHALLANGE ----

/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document.querySelector('body').addEventListener('click', e => {
    header.style.color = 'blue';
  });
})(); */

/* const body = document.querySelector('body').addEventListener('click', e => {
  document.querySelector('h1').style.color = 'blue';
}); */
