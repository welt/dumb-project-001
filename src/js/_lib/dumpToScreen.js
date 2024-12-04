/**
 * @file dumpToScreen.js
 * Logs string messages to the screen.
 */
import Logger from "../_contracts/logger";

export default class DumpToScreen extends Logger {
  /**
   * @param {String} elementId
   */
  constructor(elementId) {
    super();
    this.element = document.getElementById(elementId);
    if (!this.element) {
      throw new Error("Element with id '" + elementId + "' not found.");
    }
    this.messages = [];
  }

  /**
   * Upates the DOM element with the last three messages.
   * @param {String} str - message to log
   */
  log(str) {
    this.messages.push(str);
    const lastThreeMessages = this.messages.slice(-3)
      .map((message) => `<p>${message}</p>`).join("");
    this.element.innerHTML = lastThreeMessages;
  }
}
