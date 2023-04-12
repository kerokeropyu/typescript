type ObjectInArray1 = {
  id: number,
  name: string,
  hobby: string
} [];

type ObjectInArray2 = {
  [key: string]: string | number
} [];

const members: ObjectInArray1 = [
  {
    id: 1,
    name: '浅田',
    hobby: 'サッカー'
  }, {
    id: 2,
    name: '野崎',
    hobby: '卓球'
  }
];

for (const member of members) {
  console.log(`ID:${member.id}、NAME:${member.name}、HOBBY:${member.hobby}`);
} 