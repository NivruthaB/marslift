<template>
  <div class="home-container">
    <div class="app-title">
      <h1>Marslift</h1>
    </div>
    <div class="description-container">
      <div
        class="description animate__animated animate__headShake animate__delay-2s animate__slower"
      >
        Explore the universe with
        <span
          class="space-x-title animate__animated animate__pulse animate__delay-2s"
          >SpaceX </span
        >launches.
      </div>
      <RouteButton
        routeTo="/launchDetails"
        :class="buttonClass"
        @mouseenter="handleButtonMouseOver"
        @mouseleave="handleButtonMouseLeave"
      >
        <fa icon="arrow-down" class="arrow-icon" />
      </RouteButton>
    </div>
  </div>
</template>

<script>
import RouteButton from "../components/RouteButton.vue";

export default {
  name: "HomeView",
  components: {
    RouteButton,
  },
  methods: {
    handleButtonMouseOver: function () {
      this.buttonClass =
        "get-started-btn animate__animated animate__rubberBand";
    },
    handleButtonMouseLeave: function () {
      this.buttonClass = "get-started-btn";
    },
  },
  data() {
    return {
      buttonClass: "get-started-btn",
    };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.space-x-title {
  color: var(--orange-color);
  font-size: 45px;
}
.arrow-icon {
  font-size: 20px;
  color: var(--text-color);
}
.get-started-btn {
  margin-top: 60px;
  border: 1px solid var(--text-color);
  padding: 20px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.get-started-btn:hover .arrow-icon {
  color: var(--brown-color);
}
.get-started-btn:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom center;
  background: var(--text-color);
  z-index: -1;
  transition: transform 0.3s;
  border-radius: 50px;
}
.get-started-btn:hover::after {
  transform: scaleY(1);
}
.description-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 15%;
  color: var(--text-color);
}
.description {
  font-size: 40px;
}
.app-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 15%;
  margin-top: 50px;
}
.app-title h1 {
  color: rgba(225, 225, 225, 0.01);
  background-image: url("../assets/images/sky-background.jpg");
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: animate 15s ease-in-out infinite;
  font-weight: 1200;
  font-size: 110px;
  text-transform: uppercase;
  margin: 20px;
}

@keyframes animate {
  0%,
  100% {
    background-position: left top;
  }
  25% {
    background-position: right bottom;
  }
  50% {
    background-position: left bottom;
  }
  75% {
    background-position: right top;
  }
}
</style>
