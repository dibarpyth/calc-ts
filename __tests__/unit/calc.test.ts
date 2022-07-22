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
                const totalResult = calcInstance.getTotal();
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
                const totalResult = calcInstance.getTotal();
                const expectedResult = initialValue - checkValue;
                expect(totalResult).toBe(expectedResult);
            });
        });
    });
    
})