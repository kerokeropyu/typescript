let sum = 0;
let i = 1;
let j = 1;
let k = 1;

while (i <= 100) {
  sum += i;
  i ++;
}

console.log(sum);

// while (true) {
//   if (j > 100) {
//     break;
//   }
//   sum += 1;
//   i ++;
//   console.log(i);
// }

while (k <= 100) {
  k++;
  if (k % 2 === 1) {
    continue;
  }
  console.log(k);
}