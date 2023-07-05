// closure 


// function ex1(x) {
//     let a = x;
//     return function(y){
//         let b = y;
//         return function(z) {
//             let c = z;
//             return a + b + c;
//         }
//     }
// }


const ex = (x) => (y) => (z) => x + y + z;


console.log(ex(1)(2)(3))

const sum1 = ex(10);
console.log(sum1(20)(30))

const sum2 = ex(10)(20);
console.log(sum2(30))
