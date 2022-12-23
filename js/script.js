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

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyfilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("not enough");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
      console.log("you are classical !");
    } else if (personalMovieDB.count >= 30) {
      console.log("you are not busy person)");
    } else {
      console.log("error!");
    }
  },
  showMyDB: function (hidden) {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favourite genre ${i}`);
      if (genre === "" || genre == null) {
        console.log("Ypu inpur incorrect data or not input at least");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}  `);
    });
  },
};
