function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

const functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const composed1 = compose(functions1);
console.log(composed1(4));
