enum EnumSize {
  'Small',
  'Medium',
  'Large'
}

console.log(EnumSize.Large);

console.log(EnumSize[0]);
// エラーが出ない。
console.log(EnumSize[5]);