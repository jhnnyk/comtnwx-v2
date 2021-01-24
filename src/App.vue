<template>
  <div id="app" class="text-gray-700">
    <TheHeader />
    <main class="container flex flex-row p-6">
      <MtnList :mtnsByRange="mtnsByRange" />

      <MtnInfo v-if="$route.params.slug" :mtn="selectedMtn" />

      <HomePage v-else />
    </main>
  </div>
</template>

<script>
import fourteeners from './data/fourteeners.json';

import MtnList from './components/MtnList.vue';
import TheHeader from './components/TheHeader.vue';
import MtnInfo from './components/MtnInfo.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',

  components: { TheHeader, MtnList, MtnInfo, HomePage },

  data() {
    return {
      mtnsByRange: [],
      selectedMtn: null,
    };
  },

  created() {
    fourteeners.data.forEach((range) => {
      this.mtnsByRange.push(range);
    });
  },

  watch: {
    $route: {
      handler: function() {
        fourteeners.data.forEach((range) => {
          range.mtns.forEach((mtn) => {
            if (mtn.slug === this.$route.params.slug) {
              this.selectedMtn = mtn;
            }
          });
        });
      },
      immediate: true,
    },
  },
};
</script>
