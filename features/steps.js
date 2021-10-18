const {Given, When, Then} = require('@cucumber/cucumber')

let x

Given('I have money {int} Bath', function (int) {
    x = int
});

When('my dad give me {int} Bath', function (int){
    x = x + int
});

Then('I have total money {int} Bath', function (int){
    console.log(x)
});