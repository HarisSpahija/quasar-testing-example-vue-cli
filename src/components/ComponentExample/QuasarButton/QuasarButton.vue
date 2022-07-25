<template>
  <q-button @click="onOKClick">Button</q-button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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
