import { useRef, createRef, useEffect, RefObject } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // メンバークラス
  interface MemberInterface {
    id: number,
    name: string,
    age: number,
  }

  const array: number[] = [];
  const test = useRef<HTMLInputElement[]>([]);
  const names = useRef<RefObject<HTMLInputElement>[]>([]);
  // 重複チェック関数
  const hasDuplicates = (arr: string[]) => {
    return new Set(arr).size !== arr.length;
  }
  // 初期化処理
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

    for (let i: number = 0; i < 10; i++) {
      array.push(i);
    }

    // const list: number[] = Array.from(Array(10).keys());
    // const inputRef = ref as React.MutableRefObject<HTMLInputElement>

    // list.forEach((_, i) => {
    //   test.current[i] = createRef();
    // });

    // list.forEach((_, i) => {
    //   names.current[i] = createRef();
    // });
  }
  // 登録処理
  const register = () => {
  // 登録内容
 
  // inputタグの値が重複していたら、アラート表示
  // const memberName: string[] = [];
  // memberRegister.map((value, index) => (
  //   memberName.push(value.name)
  // ));
  // if (hasDuplicates(memberName)) {
  //   alert("重複しています。");
  // }

}

  useEffect(() => {
    initialize();
  },[]);
  

  return (
    <div className="App">
      <ol>
        { array.map((item, i) => {
          return (
            <li key={ i } ref={ names.current[i] }>{ item }</li>
          );
        }) }
      </ol>

      <button type="button" onClick={register}>登録</button>
    </div>
  );
}

export default App;
