/// <reference path="../typings/mocha/mocha.d.ts" />
import Calculator from '../app/Calculator.ts';
import * as reducers from '../app/reducers';
import * as stuff from '../app/components/counter';

describe('Calculator', () => {
    var subject : Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result : number = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});
