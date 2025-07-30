let promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, i) => {
      try {
        fn()
          .then((result) => {
            results[i] = result;
            resolvedCount++;
            if (resolvedCount === functions.length) {
              resolve(results);
            }
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  });
};
