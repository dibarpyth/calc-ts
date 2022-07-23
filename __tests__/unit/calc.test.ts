import {jest} from '@jest/globals';
import {MyCalc} from '../../src/calc'

describe('Calculator testing:', ()=>{

    const initialValue = 5;
    let calcInstance: MyCalc;
    const verifyValues = [0, 0.11, 1, 3.5, 5, 999, -0.11, -1, -5, -999];
    
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

    describe('Testing Division:', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        verifyValues.forEach(checkValue => {
            it(`should ${initialValue} / ${checkValue} = ${initialValue / checkValue}`, () => {
                calcInstance.divide(checkValue)
                const totalResult = calcInstance.total;
                const expectedResult = initialValue / checkValue;
                expect(totalResult).toBe(expectedResult);
            });
        });
    });

    describe('Testing getting total (getTotal()):', () => {
        
        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        it(`should return ${initialValue + 55} for ${initialValue} + 55`, () => {
            calcInstance.add(55)
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue + 55;
            expect(totalResult).toBe(expectedResult);
        });
    });
    
})