Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

const arr = [1, 2, 3, {}, "f"];
console.log(arr.last()); // 3
