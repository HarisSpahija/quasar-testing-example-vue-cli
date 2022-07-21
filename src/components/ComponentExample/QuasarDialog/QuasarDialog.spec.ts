import { installQuasarPlugin } from "../../../helpers/install-quasar-plugin";
import { beforeEach, describe, expect, it } from "@jest/globals";
import { DOMWrapper, mount } from "@vue/test-utils";
import QuasarDialog from "./QuasarDialog.vue";

installQuasarPlugin();

describe("QuasarDialog", () => {
  beforeEach(() => {
    mount(QuasarDialog, {
      data: () => ({
        isDialogOpen: true,
      }),
    });
  });

  it("should mount the document body and expose for testing", () => {
    const wrapper = new DOMWrapper(document.body);

    expect(wrapper.find(".q-dialog").exists()).toBeTruthy();
  });

  it("can check the inner text of the dialog", () => {
    const wrapper = new DOMWrapper(document.body);

    expect(wrapper.find(".q-dialog").html()).toContain(
      "Custom dialog which should be tested"
    );
  });
});
