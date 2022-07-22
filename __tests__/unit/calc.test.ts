import {jest} from '@jest/globals';
import {MyCalc} from '../../src/calc'

describe('Calculator testing', ()=>{
    
    describe('Testing Add():', () => {
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
    describe('Testing Subtraction():', () => {
        it('Subtract 2', () => {
            expect(2-2).toBe(0);
        });
        it('Subtract 5', () => {
            expect(2-5).toBe(-3);
        });
    });
    
})