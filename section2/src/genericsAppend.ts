// 型の制約 numberとstringしか入らない。
type GenObjectE<T extends number | string> = {
  sample: T
}
const testObjectE: GenObjectE<string> = {
  sample: 'aaa'
}

// デフォルトの型　string
type GenObjectD<T = string> = {
  sample: T
}

const testObjectD: GenObjectD = {
  sample: 'aaa'
}