function kaosKaki(array) {
  const pasang = {};

  let count = 0;

  for (const value of array) {
    pasang[value] = (pasang[value] || 0) + 1;
    if (pasang[value] === 2) {
      count++;
      pasang[value] = 0;
    }
  }

  return count;
}

console.log(kaosKaki([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]) + " pasang"); // 4

console.log(
  kaosKaki([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]) + " pasang"
); // 6

console.log(kaosKaki([10, 20, 20, 10, 10, 30, 50, 10, 20]) + " pasang"); // 3
