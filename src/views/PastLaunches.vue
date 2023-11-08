<template>
  <div class="past-launches-first-background"></div>
  <div
    class="past-launches-background animate__animated animate__slideInDown animate__delay-1s"
  ></div>
  <p v-if="errorValue">Something went wrong...</p>
  <Loading v-if="loadingValue" />
  <div v-else class="collapsible-card-container change-color">
    <div class="page-title">Past Launches</div>
    <CollapsibleCard :panelList="launches" v-slot="{ listItem }">
      <CardContent :listItem="listItem" />
    </CollapsibleCard>
    <div class="more-btn">
      <div></div>
      <div @click="handleShowMore">
        {{ showMoreButtonFlag === true ? "Show more..." : "Show less..." }}
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import Loading from "@/components/Loading.vue";
import CollapsibleCard from "@/components/CollapsibleCard.vue";
import CardContent from "@/components/CardContent.vue";

const PastLaunchesQuery = gql`
  query Launches($limit: Int) {
    launchesPast(limit: $limit) {
      details
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
  name: "PastLaunches",
  components: {
    Loading,
    CollapsibleCard,
    CardContent,
  },
  data() {
    return {
      length: 6,
      showMoreButton: true,
    };
  },
  setup() {
    const { result, error, loading } = useQuery(PastLaunchesQuery, {
      limit: 12,
    });
    return {
      result,
      error,
      loading,
    };
  },
  methods: {
    handleShowMore: function () {
      this.length = this.length === 12 ? 6 : 12;
      this.showMoreButton = !this.showMoreButton;
    },
  },
  computed: {
    launches() {
      return this.result.launchesPast.slice(0, this.length);
    },
    errorValue() {
      return this.error;
    },
    loadingValue() {
      return this.loading;
    },
    showMoreButtonFlag() {
      return this.showMoreButton;
    },
  },
};
</script>
<style scoped>
.collapsible-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--white-color);
  padding-top: 50px;
}

.page-title {
  display: flex;
  padding: 25px;
  color: var(--orange-color);
  font-size: 25px;
  font-weight: bold;
  z-index: 1;
}

.more-btn {
  display: flex;
  padding: 20px;
  font-size: 15px;
  color: var(--orange-color);
  width: 80%;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;
}

.more-btn:hover {
  color: var(--text-color);
}

.past-launches-background {
  background: var(--brown-color);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}

.past-launches-first-background {
  background: var(--white-color);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}
</style>
