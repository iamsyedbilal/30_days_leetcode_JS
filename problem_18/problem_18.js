var debounce = function (fn, t) {
  let timeoutId = null;

  return function (...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
