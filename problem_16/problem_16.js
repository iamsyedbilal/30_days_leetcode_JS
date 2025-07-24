function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const fnPromise = fn(...args);

      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fnPromise
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
}
