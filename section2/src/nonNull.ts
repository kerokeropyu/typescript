// 例1
type Member = {
  name: string,
}

const getMember = (nameWord?: Member) => {
  console.log(nameWord!.name);
}

getMember({name: '横田'});

// 例2
let memberName!: string;

const addName = (val: string) => {
  memberName = val;
}

addName('浅野')

console.log(memberName)