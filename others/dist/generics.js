// Tはクラス内で利用する仮の型の名前です
class Queue {
    constructor() {
        // Tの型の配列を初期化する
        this.array = [];
    }
    // Tの型の値を配列に追加する
    push(item) {
        this.array.push(item);
    }
    // Tの型の配列の最初の値を取り出す
    pop() {
        return this.array.shift();
    }
}
const queue = new Queue();
queue.push(111);
queue.push(112);
// queue.push('hoge'); // number型ではないのでコンパイル時にエラーになる。
//# sourceMappingURL=generics.js.map