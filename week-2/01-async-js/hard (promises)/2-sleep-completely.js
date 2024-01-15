/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return  new Promise ((resolve) =>{    
        setInterval(() => {
            console.log('waiting');
            resolve()
       }, milliseconds);
    })
}

async function main(){
    console.log('start');
    await sleep(2000);
    console.log('end');
}

// console.log('start');
// sleep(5000).then(function(value){
//     console.log('inside then');
// })
// console.log('end');

main()

module.exports = sleep;
