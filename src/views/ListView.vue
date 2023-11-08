<template>
  <div class="list-view-container">
    <div
      class="list-background animate__animated animate__slideInDown animate__delay-1s"
    ></div>
    <div class="content-container">
      <div class="list-description-container">
        <div class="list-description-title">Explore</div>
        <div class="list-description">
          Discover SpaceX Launches: Your window to the cosmos! Get the latest
          updates on SpaceX's missions, launch schedules, and groundbreaking
          space endeavors. Stay informed with real-time information, watch live
          launches, and explore the science behind space exploration. Whether
          you're a space enthusiast, a student, or simply curious about space,
          we've got you covered. Embark on a journey through the stars with us
          and experience the future of space travel.
        </div>
      </div>
      <div class="card-container">
        <Card
          v-for="listItem in listNames"
          :key="listItem.key"
          :label="listItem.label"
          :routeTo="listItem.routeTo"
          :buttonStyle="listItem.style"
          :changeColor="listItem.changeColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
const buttonStyle = "";
const listNames = [
  {
    label: "What's the next launch?",
    key: "nextLaunch",
    routeTo: "/nextLaunch",
    style: "color:var(--text-color)",
    changeColor: true,
  },
  {
    label: "View the latest launch",
    key: "latestLaunch",
    routeTo: "/latestLaunch",
    style: "color:var(--orange-color)",
    changeColor: false,
  },
  {
    label: "Past launches",
    key: "pastLaunches",
    routeTo: "/pastLaunch",
    style: "color:var(--text-color)",
    changeColor: true,
  },
];
export default {
  name: "ListView",
  components: {
    Card,
  },
  data() {
    return {
      listNames,
    };
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 20px;
}
.list-view-container {
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  top: 0;
  justify-content: center;
  align-items: start;
}

.list-background {
  background: var(--white-color);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}
.content-container {
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 100;
}

.list-description-container {
  width: 50%;
}

.list-description-title {
  color: var(--orange-color);
  font-size: 25px;
  font-weight: bold;
}

.list-description {
  padding: 20px 0;
  line-height: 1.75;
  text-align: justify;
  color: var(--text-color);
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
