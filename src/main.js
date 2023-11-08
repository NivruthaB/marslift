import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown);
import "animate.css/animate.css";
import "animate.css";

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: "https://spacex-production.up.railway.app/",
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
