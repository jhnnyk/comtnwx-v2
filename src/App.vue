<template>
  <div id="app" class="text-gray-700">
    <TheHeader />
    <main class="container flex flex-row p-6">
      <MtnList />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MtnList from './components/MtnList.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',

  components: { TheHeader, MtnList },
};
</script>
