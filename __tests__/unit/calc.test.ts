import {jest} from '@jest/globals';
import {MyCalc} from '../../src/calc'

describe('Calculator testing:', ()=>{
    
    describe('Testing Addition:', () => {
        const initialValue = 5;
        let calcInstance: MyCalc;

        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        it(`should ${initialValue} + 2 = ${initialValue + 2}`, () => {
            calcInstance.add(2)
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue + 2;
            expect(totalResult).toBe(expectedResult);
        });

        it(`should ${initialValue} + 0 = ${initialValue + 0}`, () => {
            calcInstance.add(0)
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue + 0;
            expect(totalResult).toBe(expectedResult);
        });

    });
    
    describe('Testing Subtraction:', () => {
        const initialValue = 5;
        let calcInstance: MyCalc;

        beforeEach(() => {
            calcInstance = new MyCalc(initialValue);            
        });

        it(`should ${initialValue} - 2 = ${initialValue - 2}`, () => {
            calcInstance.subtract(2)
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue - 2;
            expect(totalResult).toBe(expectedResult);
        });

        it(`should ${initialValue} - 0 = ${initialValue - 0}`, () => {
            calcInstance.subtract(0)
            const totalResult = calcInstance.getTotal();
            const expectedResult = initialValue - 0;
            expect(totalResult).toBe(expectedResult);
        });

    });
    
})