class EventEmitter {
  constructor() {
    this.events = new Map(); // stores eventName -> array of callbacks
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const idx = listeners.indexOf(callback);
        if (idx !== -1) {
          listeners.splice(idx, 1);
        }
        return undefined; // as required
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];
    const listeners = this.events.get(eventName);

    // Call each callback with ...args, return their results
    return listeners.map((cb) => cb(...args));
  }
}
