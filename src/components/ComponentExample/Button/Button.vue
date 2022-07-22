<template>
  <q-button color="primary" label="OK" @click="onOKClick" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  emits: ["click"],
  setup(props, { emit }) {
    const onOKClick = () => {
      emit("click");
    };

    return {
      onOKClick,
    };
  },
});
</script>
