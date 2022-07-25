import {jest} from '@jest/globals';
import {MyCalc} from '../../src/calc'

describe('Calculator testing:', ()=>{
    let calcInstance: MyCalc;

    const initialValue = 5;
    const verifyValues = [0, 0.11, 1, 3.5, 5, 999, -0.11, -1, -5, -999];
    
    describe.each(verifyValues)('Testing Addition by params: ', (checkValue) => {
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });
        it(`should ${initialValue} + ${checkValue} = ${initialValue + checkValue}`, () => {
            calcInstance.add(checkValue)
            const totalResult = calcInstance.total;
            const expectedResult = initialValue + checkValue;
            expect(totalResult).toBe(expectedResult);
        });
    });
    
    describe.each([
        [5, 1, 4],
        [0, 9, -9],
        [-9, 4, -13],
        [-9, -11, 2],
        [0, 0, 0]
    ])('Testing Subtraction:', (a, b, expected) => {
        it(`should ${a} - ${b} = ${a - b}`, () => {
            calcInstance = new MyCalc(a); 
            calcInstance.subtract(b);
            expect(calcInstance.total).toBe(expected);
        });
    });

    describe.each([
        [5, 1, 5],
        [0, 9, 0],
        [-9, 4, -36],
        [-9, -11, 99],
        [2, 0, 0]
    ])('Testing Multiplication:', (a, b, expected) => {
        it(`should ${a} * ${b} = ${a * b}`, () => {
            calcInstance = new MyCalc(a); 
            calcInstance.multiply(b);
            expect(calcInstance.total).toBe(expected);
        });
    });

    describe.each([
        [5, 2, 2.5],
        [1, 20, 0.05],
        [12, 99999999999999999999999999999, 12 / 99999999999999999999999999999],
        [0, 5, 0],
        [5, 0, 0]
    ])('Testing Division:', (a, b, expected) => {
        beforeEach(() => {
            calcInstance = new MyCalc(a);            
        });

        if(b !== 0) {
            it(`should ${a} / ${b} = ${a / b}`, () => {
                calcInstance.divide(b)
                expect(calcInstance.total).toBe(expected);
            });
        } else {
            it(`should return Error: You can\'t divide by zero!`, () => {
                expect(() => {calcInstance.divide(b)}).toThrow("You can't divide by zero!");
            });
        }
    });

    describe('Testing getting total ( getTotal() ):', () => {
        it(`should return ${22 + 55} for 22 + 55`, () => {
            calcInstance = new MyCalc(22); 
            calcInstance.add(55);
            expect(calcInstance.getTotal()).toBe(22 + 55);
        });
    });

    describe('Testing clearing the result ( clearResult() ):', () => {
        it(`should return 0`, () => {
            calcInstance = new MyCalc(initialValue); 
            calcInstance.add(55);
            calcInstance.clearResult();
            expect(calcInstance.total).toBe(0);
        });
    });
    
})