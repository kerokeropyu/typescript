let postStatus: 'draft' | 'published' | 'deleted';
postStatus = 'draft'; // OK
// postStatus = 'drafts'; // 型宣言にない文字列が当てはめられているため、エラー

// -1,0,1のいずれかしか返さない型情報を定義
function compare(a: string, b: string): -1 | 0| 1{
  return a === b ? 0: a > b ? 1: -1;
}
// アロー関数
const compare2 = (a: string, b: string): -1| 0| 1 => {
  return a === b ? 0: a > b ? 1: -1;
}