export default {
  /**
   * Trait-like function to add event emitting to an object.
   * Dispatches an event from an EventTarget.
   * @param {String} type
   * @param {Object} detail
   */
  emit: function (type, detail = {}) {
    if (typeof this.dispatchEvent !== 'function') {
      throw new Error('Object does not implement EventTarget interface');
    }

    const event = new CustomEvent(`${type}`, {
      bubbles: true,
      cancelable: true,
      detail: detail,
    });

    return this.dispatchEvent(event);
  },
};
