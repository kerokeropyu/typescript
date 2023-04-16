const SIZE = {
  SMALL: '小',
  MEDIUM: '中',
  LARGE: '大'
} as const;

type SizeType = keyof typeof SIZE;

// 指定したキーしか受け付けない
const sizeCheck = (size: SizeType) => {
  console.log(size);
}
// sizeCheck('XL');

type valueOfSize = typeof SIZE[keyof typeof SIZE];

// サンプルオブジェクト
const sampleObject = {
  a: 111,
  b: 222,
  c: 333,
  d: 444,
  e: 555,
} as const;

type SampleType = typeof sampleObject;
type SampleTypeOnlyKey = keyof typeof sampleObject;
type SampleValueOfSize = typeof sampleObject[keyof typeof sampleObject];

const values: number[] = Object.values(sampleObject)
type ValueOf<SampleType> = SampleType[keyof SampleType];
console.log(values);
