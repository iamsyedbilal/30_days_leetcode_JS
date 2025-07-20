function cancellable(fn, arg, t) {
  fn(...arg);
  const intervalId = setInterval(function () {
    fn(...arg);
  }, t);

  return function cancelFn() {
    clearInterval(intervalId);
  };
}
