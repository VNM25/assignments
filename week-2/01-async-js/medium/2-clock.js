// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// Using setTimeOut

// function clock(){
//     setTimeout(() => {
//         let time = new Date()
//          let hours = time.getHours()
//         let minutes = time.getMinutes()
//         let second = time.getSeconds()
//         flag = hours > 12? 'PM' : 'AM'
//         console.log(hours + ':' + minutes + ':' + second);
//         console.log((flag == 'AM'? hours: hours - 12) + ':' + minutes + ':' + second + " " +flag);
//         clock()
//     }, 1000);
// }

// clock()

// Using setInterval

setInterval(() => {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let second = time.getSeconds()
    flag = hours > 12 ? 'PM' : 'AM'
    console.log(hours + ':' + minutes + ':' + second);
    // console.log((flag == 'AM'? hours: hours - 12) + ':' + minutes + ':' + second + " " +flag);
}, 1000);

