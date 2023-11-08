<script>
export default {
  name: "CollapsibleCard",
  methods: {
    togglePanel(panelName) {
      if (this.expandedPanels.includes(panelName)) {
        const indexInList = this.expandedPanels.indexOf(panelName);
        if (indexInList !== -1) {
          this.expandedPanels.splice(indexInList, 1);
        }
      } else {
        this.expandedPanels.push(panelName);
      }
    },
  },
  props: {
    panelList: Array,
  },
  data() {
    return {
      expandedPanels: [],
    };
  },
};
</script>

<template>
  <div v-for="(panel, index) in panelList" :key="panel.id" class="panel">
    <button
      @click.prevent="togglePanel(panel.mission_name)"
      v-bind:class="
        index === 0 ? 'first title change-color' : 'title change-color'
      "
    >
      {{ panel.mission_name }}
    </button>
    <div
      class="content animate__animated animate__flipInX"
      v-if="expandedPanels.includes(panel.mission_name)"
    >
      <slot :listItem="panel"></slot>
    </div>
  </div>
</template>

<style>
.panel {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 40px;
  border-bottom: 1px solid var(--light-grey-color);
  z-index: 100;
}

.title {
  display: flex;
  background: transparent;
  outline: none;
  width: 100%;
  height: 60px;
  border: 0;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
}

.title:hover {
  color: var(--orange-color) !important;
}

.first {
  border-top: 1px solid var(--light-grey-color);
}

.content {
  padding: 0 20px;
  color: var(--light-grey-color);
  height: fit-content;
  padding-bottom: 30px;
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
