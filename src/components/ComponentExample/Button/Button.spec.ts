import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  it("Should render button element", () => {
    const wrapper = mount(Button);

    console.log(wrapper.html());

    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
