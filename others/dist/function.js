function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello('Takuya'));
function sayHello2(name, greeting) {
    return `${greeting} ${name}`;
}
console.log(sayHello2('Takuya', 'Hello'));
function sayHello3(name, greeting = 'Hello') {
    return `${greeting} ${name}`;
}
console.log(sayHello3('Takuya', 'Hello'));
// 名前とフォーマット関数を受け取り、フォーマットしてコンソールに出力
// 引数formatterの型は、stringのnameを引数にした、返り値がstringの関数という意味？
function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
// 名前を受け取り、末尾にsanをつける関数
function formatName(name) {
    return `${name} san`;
}
printName('takuya', formatName);
// 関数の型
function genBirdsInfo(name) {
    return name.split(',');
}
// 関数の型を利用
function singBirds(birdInfo) {
    return birdInfo('hato', 'kiji')[0] + ' piyo piyo';
}
console.log(singBirds(genBirdsInfo));
//# sourceMappingURL=function.js.map