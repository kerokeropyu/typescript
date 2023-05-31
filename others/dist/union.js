// union型を指定。numberもしくはstringを受け付けることができる。
function printId(id) {
    console.log(id);
}
printId(11);
printId('22');
function printId2(id) {
    console.log(id);
}
// OK
const id = {
    id: '111',
    name: 'Takuya'
};
// OK
const contact = {
    name: 'Takuya',
    email: 'test@test.com',
    phone: '0123456789'
};
const employee = {
    id: '111',
    name: 'takuya',
    email: 'test@test.com',
    phone: '00033333333'
};
//# sourceMappingURL=union.js.map