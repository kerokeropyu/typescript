// プログラマなら大抵のかたは聞いたことがあるかと思いますが元は単純なパーティゲームで
// – 2人以上のプレイヤーが1から順番に数字を発言していく
// – 3で割り切れるときは「Fizz」を発言
// – 5で割り切れるときは「Buzz」を発言
// – 両方で割り切れるときは「FizzBuzz」を発言
// – 間違えた人から脱落
// 細かな違いはあるでしょうが大体上記のようなルールのゲームです。
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
const fizzBuzzGenerator = () => {
    let i = 0;
    while (i < 1000) {
        while (i % 3 == 0) {
            while (i % 3 == 0 && i % 5 === 0) {
                console.log(`${i}:FizzBuzz`);
                break;
            }
            console.log(`${i}:Fizz`);
            break;
        }
        while (i % 5 == 0) {
            while (i % 3 == 0 && i % 5 === 0) {
                console.log(`${i}:FizzBuzz`);
                break;
            }
            console.log(`${i}:Buzz`);
            break;
        }
        console.log(`${i}`);
        i++;
    }
};
fizzBuzzGenerator();
const normalFizzBuzzGenerator2 = () => {
    let i = 1;
    while (i < 1000) {
        if (i % 3 == 0 && i % 5 === 0) {
            console.log(`${i}:FizzBuzz`);
        }
        else if (i % 3 == 0) {
            console.log(`${i}:Fizz`);
        }
        else if (i % 5 == 0) {
            console.log(`${i}:Buzz`);
        }
        else {
            console.log(`${i}`);
        }
        i++;
    }
};
// normalFizzBuzzGenerator2();
//# sourceMappingURL=fizzBuzz.js.map