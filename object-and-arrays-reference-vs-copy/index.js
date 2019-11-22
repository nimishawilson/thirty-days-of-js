// for strings numbers and booleans
let age = 100;
let age2 = age;
console.log(age,age2);
age = 200;
console.log(age,age2);

let name = 'ami';
let name2 = name;
console.log(name,name2);
name = 'lisi';
console.log(name,name2);


//array
console.log('--------------------');
const players = ['nisha','annu','lessly','bony'];
const team = players;
console.log(players,team);
team[3]='lux';
console.log(players,team);

//creating copy
console.log('--------------------');
const team2 = players.slice(); //slice takes a copy of orginal array
console.log(team2)

//create new array and concatinate old one
const team3 = [].concat(players); 
console.log(team2)

//use es6 spread
const team4 = [...players];
team4[3] = 'heeee';
console.log(team4);

const team5 = Array.from(players);
team5[3]='cool';
console.log(team5);
console.log(players);

