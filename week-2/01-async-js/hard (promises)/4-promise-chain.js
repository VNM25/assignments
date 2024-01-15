/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`after ${t} seconds`)
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`after ${t} seconds`)
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`after ${t} seconds`)
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    const startTs = new Date().getTime();
    console.log(startTs);
    return wait1(t1).then(function (value) {
        // console.log(value);
        // console.log('after w1');
        return wait2(t2).then(function (value) {
            // console.log(value);
            // console.log('after w2');
            return wait3(t3).then(function (value) {
                // console.log(value);
                // console.log('after w3');
                const endTs = new Date().getTime();
                // console.log(endTs);
                // console.log('time taken :', endTs - startTs);
                return endTs - startTs;
            })
        })
    })
}

// calculateTime(1, 2, 3)

module.exports = calculateTime;
