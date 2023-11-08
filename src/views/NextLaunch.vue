<template>
  <div class="next-launch-first-background"></div>
  <div
    class="next-launch-background animate__animated animate__slideInDown animate__delay-1s"
  ></div>
  <p v-if="error">Something went wrong...</p>
  <Loading v-if="loading" />
  <div v-else class="container">
    <div class="page-title">Latest Launch</div>
    <div class="card-container change-color">
      <div>Mission Name: {{ result.launchNext.mission_name }}</div>
      <div>Rocket Name: {{ result.launchNext.rocket.rocket_name }}</div>
      <div>Time: {{ format_date(result.launchNext.launch_date_local) }}</div>
      <div>Watch the video to know more about it.</div>
      <a :href="result.launchNext.links.video_link" target="_blank"
        >Click here</a
      >
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import moment from "moment";

const NextLaunchQuery = gql`
  query NextLaunch {
    launchNext {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export default {
  name: "NextLaunch",
  components: {
    // Card,
  },
  setup() {
    const { result, error, loading } = useQuery(NextLaunchQuery);
    return {
      result,
      error,
      loading,
    };
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD HH:MM:sss");
      }
    },
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  line-height: 1.75;
  color: var(--brown-color);
  z-index: 1;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.page-title {
  display: flex;
  padding: 25px;
  color: var(--orange-color);
  font-size: 25px;
  font-weight: bold;
  z-index: 1;
  align-items: center;
  height: 50%;
}
.next-launch-background {
  background: var(--brown-color);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}

.next-launch-first-background {
  background: var(--white-color);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}

.change-color {
  animation: brownToGrey 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes brownToGrey {
  25% {
    color: var(--text-color);
  }
  75% {
    color: var(--text-color);
  }
  100% {
    color: var(--text-color);
  }
}
</style>
