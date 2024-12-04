/**
 * @file debug.js
 * Some debug utils
 */
export default {
  /**
   * Adds a listener for the "refresh" event.
   * Logs a message when the event is dispatched.
   * @listens refresh
   */
  refresh: () => {
    document.addEventListener("refresh", (evt) => {
      console.log("Refreshing sources...", evt.detail);
    });
  },
};
