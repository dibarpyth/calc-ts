class MyCalc {
    total: number
    constructor(public initNumber: number) {
        this.total = initNumber;
    }

    add(inputNumber: number): void {
        this.total += inputNumber;
    }

    subtract(inputNumber: number): void {
        this.total -= inputNumber;
    }

    multiply(inputNumber: number): void {
        this.total *= inputNumber;
    }

    divide(inputNumber: number): void {
        this.total /= inputNumber;
    }

    clearResult(): void {
        this.total = 0;
    }

    getTotal(){
        return this.total;
    }
}

// const calc1: MyCalc = new MyCalc(5);

// calc1.add(10);

// console.log(calc1.getTotal());

// console.log(``);

export {MyCalc}
