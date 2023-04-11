type MemberType = {
  name: string,
  age: number
}

const memberT: MemberType = {
  name: '御手洗',
  age: 54
}

type MemberHobby = {
  hobby: string,
}

type MemberProfile = MemberType & MemberHobby;

const MemberInfo: MemberProfile = {
  name: '青木',
  age: 43,
  hobby: '鉄道'
}

console.log(MemberInfo.hobby);