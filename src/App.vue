<template>
  <div id="app" class="text-gray-700">
    <TheHeader />
    <main class="container flex flex-row p-6">
      <MtnList :mtnsByRange="mtnsByRange" />

      <MtnInfo v-if="$route.params.slug" />

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
    };
  },

  created() {
    fourteeners.data.forEach((range) => {
      this.mtnsByRange.push(range);
    });
  },
};
</script>
