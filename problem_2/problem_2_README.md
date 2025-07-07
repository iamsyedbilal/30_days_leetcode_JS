**Explanation:**

- First call: returns -2.
- Then increases by 1 on each call.

---

## 🔒 Constraints

- -1000 <= n <= 1000
- 0 <= calls.length <= 1000
- Each call is `"call"`

---

## 💡 Solution Explanation

The solution uses a **closure**:

- `createCounter(n)` returns a function `counter()` that remembers its internal state.
- Each time `counter()` is called, it increments and returns the next number.

---

## 👨‍💻 Usage

Here’s how you can use it in JavaScript:

```javascript
function createCounter(n) {
  let count = n - 1; // Start one less so first call returns n
  return function counter() {
    count += 1;
    return count;
  };
}

// Example
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
```
