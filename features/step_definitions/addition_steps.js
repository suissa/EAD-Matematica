const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../../lib/calculator');

let calculator;

	Given('the numbers {int} and {int}', function (int, int2) {
       calculator = new Calculator(int, int2);
	});

	When('they are added together', function () {
	    calculator.add();
	});

	Then('should the result be {int}', function (expected) {
	    assert.equal(calculator.getResult(), expected)
    });
