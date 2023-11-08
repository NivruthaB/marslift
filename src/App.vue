<template>
  <div class="app">
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
@font-face {
  font-family: MontSerrat;
  src: url("./assets/fonts/Montserrat-Regular.ttf");
}
.app {
  background-color: var(--brown-color);
  color: var(--text-color);
  font-family: MontSerrat, sans-serif !important;
  height: 100vh;
}

button {
  font-family: MontSerrat, sans-serif !important;
}

body {
  background-color: var(--brown-color) !important;
  margin: 0;
}

:root {
  --orange-color: #e38b23;
  --text-color: #e6e6e6;
  --brown-color: #231f20;
  --light-grey-color: #929292;
  --white-color: #fff;
}
</style>
