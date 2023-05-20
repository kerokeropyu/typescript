namespace First {
  export const testFunc = (): void => {
    console.log('First');
  }
}

namespace Second {
  export const testFunc = (): void => {
    console.log('Second');
  }
}

First.testFunc();
Second.testFunc();
