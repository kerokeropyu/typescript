import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name1 = React.useRef<HTMLInputElement>(null!); 
  let name2 = React.useRef<HTMLInputElement>(null!); 
  let name3 = React.useRef<HTMLInputElement>(null!); 
  let name4 = React.useRef<HTMLInputElement>(null!); 
  let name5 = React.useRef<HTMLInputElement>(null!); 
  let name6 = React.useRef<HTMLInputElement>(null!); 
  let name7 = React.useRef<HTMLInputElement>(null!); 
  let name8 = React.useRef<HTMLInputElement>(null!); 
  let name9 = React.useRef<HTMLInputElement>(null!); 
  let name10 = React.useRef<HTMLInputElement>(null!); 


  interface MemberInterface {
    id: number,
    name: string,
    age: number,
  }

  const initialize = () => {
    const member: MemberInterface[] = [
      {
        id: 1,
        name: '田中1',
        age: 22,
      },
      {
        id: 2,
        name: '田中2',
        age: 22,
      },
      {
        id: 3,
        name: '田中3',
        age: 22,
      },
      {
        id: 4,
        name: '田中4',
        age: 22,
      },
      {
        id: 5,
        name: '田中5',
        age: 22,
      },  
      {
        id: 6,
        name: '田中6',
        age: 22,
      },  
      {
        id: 7,
        name: '田中7',
        age: 22,
      },  
      {
        id: 8,
        name: '田中8',
        age: 22,
      },  
      {
        id: 9,
        name: '田中9',
        age: 22,
      },  
      {
        id: 10,
        name: '田中10',
        age: 22,
      },  

    ];
    console.log(member);
    name1.current.value = member[0].name;
    name2.current.value = member[1].name;
    name3.current.value = member[2].name;
    name4.current.value = member[3].name;
    name5.current.value = member[4].name;
    name6.current.value = member[5].name;
    name7.current.value = member[6].name;
    name8.current.value = member[7].name;
    name9.current.value = member[8].name;
    name10.current.value = member[9].name;

  }

  const register = () => {
  // 登録内容
  const memberRegister: MemberInterface[] = [
    {
      id: 1,
      name: name1.current.value,
      age: 22,
    }, 
    {
      id: 2,
      name: name2.current.value,
      age: 22,
    }, 
    {
      id: 3,
      name: name3.current.value,
      age: 22,
    }, 
    {
      id: 4,
      name: name4.current.value,
      age: 22,
    }, 
    {
      id: 5,
      name: name5.current.value,
      age: 22,
    }, 
    {
      id: 6,
      name: name6.current.value,
      age: 22,
    }, 
    {
      id: 7,
      name: name7.current.value,
      age: 22,
    }, 
    {
      id: 8,
      name: name8.current.value,
      age: 22,
    }, 
    {
      id: 9,
      name: name9.current.value,
      age: 22,
    }, 
    {
      id: 10,
      name: name10.current.value,
      age: 22,
    },   
  ];
  console.log(memberRegister);
  // inputタグの値が重複していたら、アラート表示
  // const result = memberRegister.filter(item => memberRegister.includes(item));
  const arr: string[] = [];
  memberRegister.map((value, index) => (
    memberRegister[index].name == value.name ? arr.push(value.name) : ''
  ));
  if (arr.length > 0) {
    alert("重複しています。");
  }
  console.log(arr);

}

  React.useEffect(() => {
    initialize();
  },[]);
  
  return (
    <div className="App">
      <input type="text" id="1" ref={name1} /><br />
      <input type="text" id="2" ref={name2} /><br />
      <input type="text" id="3" ref={name3} /><br />
      <input type="text" id="4" ref={name4} /><br />
      <input type="text" id="5" ref={name5} /><br />
      <input type="text" id="6" ref={name6} /><br />
      <input type="text" id="7" ref={name7} /><br />
      <input type="text" id="8" ref={name8} /><br />
      <input type="text" id="9" ref={name9} /><br />
      <input type="text" id="10" ref={name10} /><br />

      <button type="button" onClick={register}>登録</button>
    </div>
  );
}

export default App;
