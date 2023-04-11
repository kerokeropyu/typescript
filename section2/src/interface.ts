interface MemberInterface {
  name: string,
  age: number,
}

const memberI: MemberInterface = {
  name: '田中',
  age: 32
}

interface HobbyInterface {
  hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
  name: '川上',
  age: 45,
  hobby: '競馬'
}

console.log(memberInfoI.name, memberInfoI.age, memberInfoI.hobby);