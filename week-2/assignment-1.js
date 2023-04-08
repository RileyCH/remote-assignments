function max(numbers) {
  return numbers.reduce((a, b) => {
    return a > b ? a : b;
  });
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
