type genObject<T, U> = {
  name: string,
  age: number,
  memo: T,
  value: U,
}

const soccerMember: genObject<string, number> = {
  name: '田中',
  age: 33,
  memo: 'メモメモ',
  value: 999
}

const bascketMember: genObject<number, string> = {
  name: '田中',
  age: 33,
  memo: 999,
  value: '値値'
}