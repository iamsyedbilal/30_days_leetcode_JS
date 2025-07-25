class TimeLimitedCache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const expiresAt = now + duration;

    const alreadyExists =
      this.store.has(key) && this.store.get(key).expiresAt > now;

    this.store.set(key, { value, expiresAt });

    return alreadyExists;
  }

  get(key) {
    const now = Date.now();
    const data = this.store.get(key);

    if (data && data.expiresAt > now) {
      return data.value;
    } else {
      this.store.delete(key);
      return -1;
    }
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, { expiresAt }] of this.store.entries()) {
      if (expiresAt > now) {
        count++;
      } else {
        this.store.delete(key);
      }
    }

    return count;
  }
}
