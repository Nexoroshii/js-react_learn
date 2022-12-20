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

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
