'use strict';

/////////////////// 🌟 For Each 🌟///////////////////////

// forEach((element, index, array) => {});

const arr = [1,2,3,4,5,6,7,8];

arr.forEach((e, i, arr) => {  // higher order function
    if(e > 4){
        console.log(`${e} : ${i} : ${arr}`);
    }
});

//////////// 🌟for each with maps🌟 ////////////
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

currencies.forEach((value, key, map) => {
    console.log(`${value} : ${key} : ${map}`);
})

//////////// 🌟for each with sets 🌟///////////////////////////
const currenciesUnique = new Set(['USD', 'IND', 'GBP', 'EUR', 'EUR', 'IND', 'USD']);

currenciesUnique.forEach((val1) => {
    console.log(`${val1}`);
})