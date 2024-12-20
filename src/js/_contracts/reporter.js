/**
 * @file reporter.js
 * Pseudo-abstract class / base class for API data reporters.
 */
import Api from "../_lib/api.js";

const warning = (_strings, name) =>
  `"src" attribute was not found on <${name} /> elemnent.\nUsing default…`;

/**
 * Contract for Reporter classes.
 * @extends HTMLElement
 * @abstract
 */
export default class Reporter extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  set src(value) {
    this._src = value;
    this.setAttribute("src", value);
  }

  get src() {
    return this._src;
  }

  constructor() {
    super();
    if (new.target === Reporter) {
      throw new Error("Cannot instantiate abstract Reporter class directly.");
    }
    this._src = this.getAttribute("src");
    if (!this._src) console.warn(warning`${this.localName}`);
  }

  /**
   * Renders data to the DOM.
   * This method should be overridden in the subclass.
   * @param {Object} data
   */
  /* eslint-disable no-unused-vars */
  async render(data) {
    throw new Error("Method 'render' should be overridden in subclass.");
  }

  /**
   * Called when the element is connected to the DOM.
   * This method should not be overridden by subclasses.
   */
  async connectedCallback() {
    try {
      const api = new Api(this.src);
      const data = await api.getData();
      this.render(data);
    } catch (error) {
      console.error(`Error in ${this.constructor.name} class:`, error);
      throw error;
    }
  }
}
