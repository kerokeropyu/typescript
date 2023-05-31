function sayHello(name: string): string {
  return `Hello ${name}`;
}
console.log(sayHello('Takuya'));

function sayHello2(name: string, greeting?: string): string {
  return `${greeting} ${name}`;
}
console.log(sayHello2('Takuya', 'Hello'));

function sayHello3(name: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}`;
}
console.log(sayHello3('Takuya', 'Hello'));

// 名前とフォーマット関数を受け取り、フォーマットしてコンソールに出力
// 引数formatterの型は、stringのnameを引数にした、返り値がstringの関数という意味？
function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName));
}

// 名前を受け取り、末尾にsanをつける関数
function formatName(name: string): string {
  return `${name} san`;
}

printName('takuya', formatName);

// 関数の型
function genBirdsInfo(name: string): string[]{
  return name.split(',');
}

// 関数の型を利用
function singBirds(birdInfo: (x: string, y: string) => string[]): string {
  return birdInfo('hato', 'kiji')[0] + ' piyo piyo';
}

console.log(singBirds(genBirdsInfo));