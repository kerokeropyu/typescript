function funcTest(str, int) {
    console.log(str, int);
}
const funcTest2 = (str, int) => {
    console.log(str, int);
};
funcTest('あああ', 1);
funcTest2('いいい', 2);
// 引数?
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ('QQQQQQ');
// デフォルトパラメータ
const functestD = (int, str = 'aaa') => {
    console.log(str, int);
};
functestD(123);
// 可変長パラメータ
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNumber(1, 2, 3);
//# sourceMappingURL=function.js.map