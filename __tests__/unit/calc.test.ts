import {jest} from '@jest/globals';
import {MyCalc} from '../../src/calc'

describe('Calculator testing:', ()=>{

    const initialValue = 5;
    let calcInstance: MyCalc;
    const verifyValues = [0, 0.11, 1, 3.5, 5, 999, -0.11, -1, -5, -999];
    
    describe.each([0, 0.11, 1, 3.5, 5, 999, -0.11, -1, -5, -999])('Testing Addition by params: ', (checkValue) => {

        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });
        it(`should ${initialValue} + ${checkValue} = ${initialValue + checkValue}`, () => {
            calcInstance.add(checkValue)
            // const totalResult = calcInstance.getTotal();
            const totalResult = calcInstance.total;
            const expectedResult = initialValue + checkValue;
            expect(totalResult).toBe(expectedResult);
        });
    });

    describe('Testing Addition:', () => {

        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        verifyValues.forEach(checkValue => {
            it(`should ${initialValue} + ${checkValue} = ${initialValue + checkValue}`, () => {
                calcInstance.add(checkValue)
                // const totalResult = calcInstance.getTotal();
                const totalResult = calcInstance.total;
                const expectedResult = initialValue + checkValue;
                expect(totalResult).toBe(expectedResult);
            });
        });

    });
    
    describe('Testing Subtraction:', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        verifyValues.forEach(checkValue => {
            it(`should ${initialValue} - ${checkValue} = ${initialValue - checkValue}`, () => {
                calcInstance.subtract(checkValue)
                const totalResult = calcInstance.total;
                const expectedResult = initialValue - checkValue;
                expect(totalResult).toBe(expectedResult);
            });
        });
    });

    describe('Testing Multiplication:', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        verifyValues.forEach(checkValue => {
            it(`should ${initialValue} * ${checkValue} = ${initialValue * checkValue}`, () => {
                calcInstance.multiply(checkValue)
                const totalResult = calcInstance.total;
                const expectedResult = initialValue * checkValue;
                expect(totalResult).toBe(expectedResult);
            });
        });
    });

    describe.only.each([
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
                const totalResult = calcInstance.total;
                expect(totalResult).toBe(expected);
            });
        } else {
            it(`should return Error: You can\'t divide by zero!`, () => {
                expect(() => {calcInstance.divide(b)}).toThrow("You can't divide by zero!");
            });
        }
 
    });

    describe('Testing getting total ( getTotal() ):', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        it(`should return ${initialValue + 55} for ${initialValue} + 55`, () => {
            calcInstance.add(55);
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue + 55;
            expect(totalResult).toBe(expectedResult);
        });
    });

    describe('Testing clearing the result ( clearResult() ):', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        it(`should return 0`, () => {
            calcInstance.add(55);
            calcInstance.clearResult();
            const totalResult = calcInstance.total;
            const expectedResult = 0;
            expect(totalResult).toBe(expectedResult);
        });
    });
    
})