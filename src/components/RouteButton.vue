<template>
  <div class="route-container" :style="style">
    <router-link v-if="routeTo !== undefined && routeTo !== null" :to="routeTo">
      <slot></slot>
    </router-link>
    <div v-else>No route defined</div>
  </div>
</template>
<script>
export default {
  name: "RouteButton",
  props: {
    routeTo: String,
    style: String,
  },
};
</script>
<style scoped>
.route-container {
  text-decoration: none !important;
  padding: 15px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
