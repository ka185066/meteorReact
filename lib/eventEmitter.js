export default eventEmitter = (() => {

  class EventEmitter {
    constructor() {
      this._events = [];
    }

    on(type, listener) {
      this._events[type] =   this._events[type] || [];
      this._events[type].push(listener);
    }

    emit(type) {
      if (this._events[type]) {
        this._events[type].forEach((listener) => {
          listener();
        });
      }
    }

    removeListener(type, listener) {
      if (this._events[type]) {
        this._events[type].splice(this._events[type].indexOf(listener), 1);
      }
    }
  }

  return new EventEmitter();
})();

