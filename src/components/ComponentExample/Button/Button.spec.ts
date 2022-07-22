import { installQuasarPlugin } from "@/helpers/install-quasar-plugin";
import { DOMWrapper, mount } from "@vue/test-utils";
import Button from "./Button.vue";

installQuasarPlugin();

describe.only("Button", () => {
  beforeEach(() => {
    mount(Button);
  });

  it("Should render button element", () => {
    const wrapper = new DOMWrapper(document.body);

    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
