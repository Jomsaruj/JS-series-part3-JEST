# JavaScript testing with JEST and Cucumber

Here is my first experience withunit tetsing in JavaScript using JEST and Cucumber.

### How to create your first unit test with JEST

0. you can start with an empty directory
1. set up your project by first run ```npm init``` then you will get package.json file
2. run ```npm i --save-dev jest```
3. modify value of test in package.json to be jest
```
{
  "scripts": {
    "test": "jest"
  }
}
```
4. create file name sum.js

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

5. create file name sum.test.js

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
6. now, you are ready to run your first unit test. run ```npm run test```

Test should pass, if not ก็ไม่รู้แล้วเหมือนกัน :(
