/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


// callback function that resolves after n seconds

/*
function wait(n, callback) {
    setTimeout(() => {
        callback('hello after ' + n + ' sec')
        
    }, n * 1000);
}

console.log('hello first');
wait(5, function(value) {
    console.log(value);
})
console.log('hello last');
module.exports = wait;
*/


// Promise that resolves after n seconds

function wait(n){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log(`hello after ${n} sec inside setTimeout`);
            resolve('hello complete')
        }, n * 1000);
    })
}

// console.log('hello first', );
// let p = wait(5).then(function(value){
//     console.log(value, p);
// })
// console.log('hello last', p);
module.exports = wait;



// Promise that resolves using async await

// function wait(n){
//     return new Promise(function(resolve){
//         let a = 10
//         setTimeout(() => {
//             a = 100
//             resolve(a)
//         }, n * 1000);
//     })
// }

// async function main(){
//     console.log('hello');
//     let status = await wait(5);
//     console.log('hello again with status', status);
// }

// main()
// module.exports = wait;




