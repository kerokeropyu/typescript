// 一般的な関数
const funcTest = (int: number): number => {
  return int;
}
console.log(funcTest(123));

// ジェネリクスを関数で使う
const genFunc = <T>(arg: T): T => {
  return arg;
}

console.log(genFunc<number>(1));
console.log(genFunc<string>('1'));