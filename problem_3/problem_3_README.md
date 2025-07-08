# ✅ `expect()` - A Minimal JavaScript Assertion Utility

This lightweight function helps developers write test cases by verifying values with strict equality (`===`) or inequality (`!==`) checks.

---

## 🔧 Function Signature

```js
function expect(val): {
  toBe: function(val): true | throws Error("Not Equal"),
  notToBe: function(val): true | throws Error("Equal")
}
```
