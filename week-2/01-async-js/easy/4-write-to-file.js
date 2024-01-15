// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function write(path, text) {
    fs.writeFile(path, text, (err) => {
        if(err)
        console.log(err);
        else
        read(path)
    })
}

function read(path) {
    fs.readFile(path, 'utf-8', function (err, data) {
        console.log(data);
    })
}

write('week-2/01-async-js/easy/asset/a.txt', 'hello how are you')
