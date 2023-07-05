// 콜백은 함수의 사용권을 위임하는거다. 

console.log('1');

function setTimeoutWithCallback(callbackFunc) {
    setTimeout(() => {
        console.log('2');
        callbackFunc();
    }, 1000);
}

setTimeoutWithCallback(() => console.log('3'));



// 프로미스
const promiseResolve = Promise.resolve('success');
const promiseReject = Promise.reject('fail');

promiseResolve
    .then((resolve) => {
        console.log('1회' + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('2회' + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('3회' + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('4회' + resolve);
        return promiseResolve;
    })




// function sum(num1, num2, callback) {
//     var result = num1 + num2;
//     callback(result);
// }

// sum(10, 20, function(result){
//     console.log(result);
// })

function sum(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == null || num2 == null) reject(new Error("num1 또는 num2 null 값"))
        else resolve(num1 + num2);
    })
}

sum(10, 20)
    .then((result) => console.log("성공, 결과는? " + result))
    .catch((error) => console.log("실패, 이유는? " + result));


console.log(sum(10, 20))
console.log(sum(null, 20))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const one = Promise.resolve('1');
const two = (delay) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve('2');
        }, delay),
    );
const three = Promise.resolve('3');

one
    .then((oneRes) => {
        console.log(oneRes);
        return two(3000);
    })
    .then((twoRes) => {
        console.log(twoRes);
        return three;
    })
    .then((threeRes) => {
        console.log(threeRes);
    })
    .finally(() => console.log('END'));


const starbucks = (coffeeName) => {
    return new Promise(resolve, reject => {
        if (coffeeName === '아메리카노') {
            resolve('아메리카노 한잔 입니다.')
        } else {
            reject('아메리카노 외에는 없습니다.')
        }
    })
}