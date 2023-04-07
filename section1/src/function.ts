function funcTest(str: string, int: number): void {
    console.log(str, int);
}

const funcTest2 = (str: string, int: number): void => {
    console.log(str, int);
}

funcTest('あああ', 1);
funcTest2('いいい', 2);

// 引数?
const funcTestQ = (str: string, int?: number): void => {
    console.log(str, int);
}
funcTestQ('QQQQQQ')

// デフォルトパラメータ
const functestD = (int?: number, str: string = 'aaa'): void => {
    console.log(str, int);
}
functestD(123);

// 可変長パラメータ
const eachNumber = (...items: number[]): void => {
    for (const item of items) {
        console.log(item);
    }
}
eachNumber(1, 2, 3);