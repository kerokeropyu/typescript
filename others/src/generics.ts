// Tはクラス内で利用する仮の型の名前です
class Queue<T> {
  // Tの型の配列を初期化する
  private array: T[] = [];
  // Tの型の値を配列に追加する
  push(item: T) {
    this.array.push(item);
  }
  // Tの型の配列の最初の値を取り出す
  pop(): T | undefined {
    return this.array.shift();
  }
}

const queue = new Queue<number>();
queue.push(111);
queue.push(112);
// queue.push('hoge'); // number型ではないのでコンパイル時にエラーになる。