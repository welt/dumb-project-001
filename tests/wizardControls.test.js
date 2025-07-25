import { jest } from "@jest/globals";
import WizardControls from "../src/js/_components/wizardControls";

describe("WizardControls implementation", () => {
  test("These methods exist on WizardControls prototype", () => {
    expect(typeof WizardControls.prototype.render).toBe("function");
    expect(typeof WizardControls.prototype.onWizardsUpdated).toBe("function");
    expect(typeof WizardControls.prototype.onWizardAddedToStory).toBe(
      "function",
    );
  });

  test("Its onWizardsUpdated method renders with event detail", () => {
    const controls = Object.create(WizardControls.prototype);
    controls.render = jest.fn();
    const event = { detail: ["Merlin", "Gandalf"] };
    WizardControls.prototype.onWizardsUpdated.call(controls, event);
    expect(controls.render).toHaveBeenCalledWith(["Merlin", "Gandalf"]);
  });
});
