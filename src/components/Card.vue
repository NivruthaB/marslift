<template>
  <RouteButton v-if="routeTo !== undefined" :routeTo="routeTo" class="card">
    <Button
      :onClick="onClick"
      :title="label"
      :style="buttonStyle"
      :changeColor="changeColor"
    ></Button>
  </RouteButton>
  <Button v-else :title="label"></Button>
</template>

<script>
import RouteButton from "./RouteButton.vue";
import Button from "./Button.vue";

export default {
  name: "ListCard",
  components: {
    RouteButton,
    Button,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    buttonStyle: CSSStyleDeclaration,
    onClick: Function,
    routeTo: String,
    changeColor: Boolean,
  },
};
</script>

<style scoped>
.card {
  padding: 15px;
}
</style>
