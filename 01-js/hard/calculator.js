/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor() {
    this.result = 0;
  }

  add(num) {
    console.log('inside add', this.result, num);
    this.result += num;
  }

  subtract(num) {
    console.log('inside subtract', this.result, num);
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    try {
      if (num == 0) throw ErrorEvent
      this.result /= num;
    }
    catch (err) {
      throw err;
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    console.log(str);
    var i = 0;
    var obj = [];
    var sign = []
    while (i < str.length) {
      console.log(i, str[i], obj, sign);
      if (str[i] == ' ') {
        i += 1;
        continue;
      }
      try {
        if (/[^\d+\-*/(). ]/.test(str[i])) {
          throw 'Enter Valid Expression';
        }
      }
      catch (err) {
        throw err
      }
      if (str[i] == '(') {
        i += 1;
        var newStr = ''
        try {
          while (str[i] != ')') {
            newStr += str[i];
            i += 1;
          }
          const val = parseFloat(this.calculate(newStr));
          if (val == null) {
            return null;
          }
          if (sign.length == 0) {
            this.result = val;
          } else {
            const func = sign.pop();
            console.log('func', func);
            eval(`${func}(val)`);
          }
          console.log('inside paranthesis', this.result, obj);
        }
        catch (err) {
          throw 'Enter valid Parenthisis', err;
        }
      }
      else if (str[i] == ')') {
        throw 'Enter valid Parenthesis';
      }
      else if (str[i] == '+') {
        sign.push('this.add');
      }
      else if (str[i] == '-') {
        sign.push('this.subtract');
      }
      else if (str[i] == '/') {
        sign.push('this.divide');
      }
      else if (str[i] == '*') {
        sign.push('this.multiply');
      }
      else {
        console.log('str[i]', str[i])
        var num = str[i]
        while (/[^\d.]/.test(str[i + 1]) && i < (str.length - 1)) {
          num += str[i + 1]
        }
        const val = parseFloat(obj.length == 0 ? num : obj.pop());
        if (sign.length == 0) {
          this.result = val;
        } else {
          const func = sign.pop();
          console.log('func', func);
          eval(`${func}(val)`);
        }
        console.log('result', this.result);
      }
      i += 1;
    }
    console.log(obj, sign, this.result)
    return this.result;
  }
}
var cal = new Calculator;
console.log('Final Result', cal.calculate('2 + 3 * 4'));

module.exports = Calculator;
