// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// //leftBorderWidth= 23;
// console.log(number);
// console.log(leftBorderWidth);

// const obj = {
//     a:50
// };

// obj.a=100;
// console.log(obj.a);

// console.log(name);
// var name = "Ivan";
// name = "alex";

// for(let i = 0; i<arr.length;i++){
//     result[i]=arr[i];
// }


function firstTask() {
    const lines = 10;
    let result = '';
    
    for(let i = 0 ; i<=lines; i++){
        
        for( let y = (lines-i);  y > 0 ; y--){
            result+=" ";
        }
         for(let o =0; o<(2*i+1);o++){
            result+="*";
         }
         result+="\n";
    }
    console.log(result);
    

}
firstTask();

// let a =" 1";
// let b ="\n";
// let c = "1";
// console.log(a+b+c);

