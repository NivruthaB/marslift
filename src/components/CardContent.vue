<template>
  <div>
    <div>{{ listItem.details }}</div>
    <div>Launch date: {{ format_date(listItem.launch_date_local) }}</div>
    <div>Rocket name: {{ listItem.rocket.rocket_name }}</div>
    <div>
      Was it a successful launch?:
      {{ listItem.launch_success === true ? "Yes" : "No" }}
    </div>
  </div>
  <div class="links">
    <a :href="listItem.links.article_link"
      >Want to read more about the launch?</a
    >
    <a :href="listItem.links.video_link"
      >Or want to watch a video of the launch?</a
    >
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "CardContent",
  props: {
    listItem: Object,
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
<style>
.links {
  display: flex;
  flex-direction: column;
}

a {
  color: var(--orange-color);
  font-size: 0.85rem;
}
</style>
