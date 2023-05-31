// union型を指定。numberもしくはstringを受け付けることができる。
function printId(id: number | string) {
  console.log(id);
}

printId(11);
printId('22');

type Id = number | string;

function printId2(id : Id) {
  console.log(id);
}

type Identity = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}
// 和集合による新たなUnion型を定義します。
// IdentityもしくはContact型を受けることが可能です。
type IdentityOrContact = Identity | Contact;

// OK
const id: IdentityOrContact = {
  id: '111',
  name: 'Takuya'
}

// OK
const contact: IdentityOrContact = {
  name: 'Takuya',
  email: 'test@test.com',
  phone: '0123456789'
}

// 先述のIdentity型とContact型を用いて
// 積集合によるIntersection型を定義
type Employee = Identity & Contact;
const employee: Employee = {
  id: '111',
  name: 'takuya',
  email: 'test@test.com',
  phone: '00033333333'
}