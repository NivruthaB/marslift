<template>
  <button :class="buttonClass" :on-click="onClick" :style="style">
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    title: String,
    onClick: Function,
    style: String,
    changeColor: Boolean,
  },
  data() {
    return {
      buttonClass:
        this.changeColor === true ? "button button-animate" : "button",
    };
  },
};
</script>
<style scoped>
.button {
  font-size: 25px;
  opacity: 1 !important;
  width: fit-content;
  border: none;
  outline: none;
  background: transparent;
  transition-duration: 500ms;
  cursor: pointer;
}
button:after {
  content: "»";
  position: absolute;
  right: -10px;
  opacity: 0;
  top: 0;
  transition: 0.5s;
}

button:hover {
  transform: scale(1.1);
  color: var(--orange-color) !important;
}

button:hover:after {
  opacity: 1;
  right: -20px;
}

.button-animate {
  animation: greyToBrown 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes greyToBrown {
  25% {
    color: var(--brown-color);
  }
  75% {
    color: var(--brown-color);
  }
  100% {
    color: var(--brown-color);
  }
}
</style>
