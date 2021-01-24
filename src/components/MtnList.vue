<template>
  <div class="flex-none w-1/4">
    <ul>
      <li v-for="(range, index) in mtnsByRange" :key="index">
        <h3 class="text-2xl pt-4">{{ range.name }}</h3>
        <ul>
          <li v-for="mtn in range.mtns" :key="mtn.slug">
            <router-link
              :to="{ name: 'MtnInfo', params: { ...mtn } }"
              class="hover:text-indigo-900"
            >
              {{ mtn.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import fourteeners from '../data/fourteeners.json';

export default {
  name: 'MtnList',

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
