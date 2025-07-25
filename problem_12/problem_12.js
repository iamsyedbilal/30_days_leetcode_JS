async function addTwoPromises(promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
