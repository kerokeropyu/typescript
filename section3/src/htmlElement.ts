// const input = document.getElementById('username') as HTMLInputElement;
// input.placeholder = '山田太郎';

const input = <HTMLInputElement>document.getElementById('username');
input.placeholder = '山田太郎';