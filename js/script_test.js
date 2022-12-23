const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function () {
    let age = this.age;
    let str = `Мне ${age} и я владею языками:`;
    const { languages } = this.skills;
    for (let key in languages) {
      str += ` ${languages[key]}`.toUpperCase();
    }
    return str;
  }
};



//console.log(personalPlanPeter.showAgeAndLangs());


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length===0){return "Семья пуста";}
    let str="Семья состоит из:";
    for( let i=0; i < arr.length;i++){
        str+=` ${arr[i]}`;
    }
    return str;
}
//console.log(showFamily(family));
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     if(arr.length===0){return "";}
//     let str='';
//     for(let i = 0; i<arr.length;i++){
//         // str+=`${(arr[i]).toLowerCase()}\n`;
//         arr[i]=arr[i].toLowerCase();
//     }
//     return arr;
// }
    
const someString = 'This is';

function reverse(str) {
let str1='';
let str2=str;
console.log(str.length);
// console.log(str2);
for(let i = 0; i<str.length;i++){
    
    console.log(str.lenght);
}
return str1;
}
console.log(reverse(someString));
    