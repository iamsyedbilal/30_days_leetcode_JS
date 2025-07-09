# 🔢 createCounter Function

## Description

The `createCounter` function generates a counter object that supports three operations:

- `increment()`: Increases the current value by 1 and returns it.
- `decrement()`: Decreases the current value by 1 and returns it.
- `reset()`: Resets the current value to the original initial value and returns it.

This utility can be useful in various scenarios such as tracking iterations, counts, or state changes.

---

## 📘 Function Signature

```javascript
function createCounter(init): {
  increment: () => number,
  decrement: () => number,
  reset: () => number
}
```
