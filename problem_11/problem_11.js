function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoizedFn = function (...args) {
    const key = args.join(",");
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    callCount += 1;
    return result;
  };

  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
}
