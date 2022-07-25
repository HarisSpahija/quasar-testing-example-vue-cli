import { mount } from "@vue/test-utils";
import QuasarButton from "./QuasarButton.vue";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";

installQuasarPlugin();

describe("Button", () => {
  it("Should render button element", () => {
    const wrapper = mount(QuasarButton);

    console.log(wrapper.html());

    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
