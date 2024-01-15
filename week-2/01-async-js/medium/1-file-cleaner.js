/// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` 

const fs = require('fs');

fs.readFile('week-2/01-async-js/medium/a.txt', 'utf-8', (err, data) => {
    console.log('data is : ', data);
    let final =  clean(data);
    console.log(final);
});

function clean(data) {
    console.log(data);
    let finalStr = ''
    for (let key of data){
        if (key != ' '){
            finalStr += key
        }
        else{
            finalStr = finalStr.trim();
            finalStr += key
        }
    }
    return finalStr
}