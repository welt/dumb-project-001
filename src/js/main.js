import localDebug from './_modules/localDebug.js';
import messages from "./_modules/messages.js";
import ToggleDarkMode from "./_lib/toggleDarkMode.js";
import DumpToScreen from './_lib/dumpToScreen';
import createScreenLogger from './_lib/screenLogger';

const screenLogger = createScreenLogger(DumpToScreen, 'message-panel');

import CarbonReporter from "./_components/carbonReporter.js";
import GitHubReporter from "./_components/gitHubReporter.js";
import LoadingSpinner from "./_components/loadingSpinner.js";
import RandomReporter from "./_components/randomReporter.js";
import ToggleButton from "./_components/toggleButton.js";

function defineCustomElements() {
  customElements.define("carbon-reporter", CarbonReporter);
  customElements.define("github-reporter", GitHubReporter);
  customElements.define("loading-spinner", LoadingSpinner);
  customElements.define("random-reporter", RandomReporter);
  customElements.define("toggle-button", ToggleButton);
}

function initializeThemeSwitch() {
  const themeSwitch = new ToggleDarkMode();
  themeSwitch.init();
}

function init() {
  localDebug.refresh();
  screenLogger();
  defineCustomElements();
  messages.hello();
  initializeThemeSwitch();
}

init();
