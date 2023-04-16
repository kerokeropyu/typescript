type MemberTypeR= {
  readonly name: string,
  age: number
}

const memberR: MemberTypeR = {
  name: '御手洗',
  age: 54
}

// const はオブジェクトや配列だったら書き換え可能
// readonlyをつけると再代入不可

// memberR.name = '流川';
console.log(memberR.name);