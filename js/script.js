// function sayHello(a) {

//   if(typeof(a)!=='number'|| a===0 || !Number.isInteger(a)){
//     return "";
//   }
//   let a1=0,
//   a2=1,
//   str='';
//   if(a===1){
//     str=`${a1}`;
//     return str;
//   }else if(a===2){
//     str=`${a1} ${a2}`;
//     return str;
//   }
//   str=`${a1} ${a2}`;
//   let temp=0;
//   for(let i =0; i < a-2 ;i++){
//     temp=a1+a2;
//     str+=` ${temp}`;
//     a1=a2;
//     a2=temp;

//   }
//   return str;

// }

// console.log(sayHello(16));
// // let v=1, b=2,n=3;

// // let str1=`${v}`;
// // console.log(str1);
// // v=444;
// // str1+=` ${v}`;
// // console.log(str1);
// // v=555;
// //  str1+=` ${v}`;
// // console.log(str1);
// mazafaka

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько вы оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyfilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("not enough");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
    console.log("you are classical !");
  } else if (personalMovieDB.count >= 30) {
    console.log("you are not busy person)");
  } else {
    console.log("error!");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre ${i}`);
  }
}
writeYourGenres();

