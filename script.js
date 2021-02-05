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
