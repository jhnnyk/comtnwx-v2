<template>
  <div class="p-4">
    <h1 class="text-indigo-900 text-5xl text-center">
      {{ mtn.name }}
    </h1>
    <p class="text-center">
      <span class="text-xs uppercase">Range:</span> {{ mtn.range }}
    </p>
    <p class="text-center">
      <span class="text-xs uppercase">Elevation:</span>
      {{ mtn.el }} ft.
    </p>
    <p
      v-if="mtn.description"
      v-html="mtn.description"
      class="text-center text-sm mt-4"
    ></p>

    <h2 class="text-3xl text-indigo-900 text-center pt-6">
      {{ mtn.name }} Weather Forecast
    </h2>
    <div v-if="forecastLoading">... loading weather forecast ...</div>
    <div v-else>
      <div
        v-for="(period, index) in forecast"
        :key="index"
        class="rounded-2xl shadow-xl p-4 mb-6"
      >
        <p class="text-indigo-900 font-bold">
          {{ period.name }} - {{ period.shortForecast }}
        </p>
        <div class="flex flex-row flex-wrap md:flex-nowrap">
          <p class="flex-none w-36 text-center pt-3">
            <span class="text-6xl">{{ period.temperature }}</span>
            <span class="text-lg relative -top-7 right-1"
              >º {{ period.temperatureUnit }}</span
            >
            <br />
            <span class="text-xs uppercase">Wind:</span
            ><span class="font-bold">{{ period.windSpeed }}</span>
          </p>
          <img
            :src="period.icon"
            :alt="period.shortForecast"
            class="flex-none object-scale-down w-28"
          />
          <p class="pt-4">{{ period.detailedForecast }}</p>
        </div>
      </div>
    </div>
    <p class="mt-4">
      For more information about {{ mtn.name }}, including route information for
      climbing {{ mtn.name }} and latest trail conditions and trip reports,
      check
      <a :href="mtn['14ersLink']" target="_blank"
        >{{ mtn.name }} page on 14ers.com</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MtnInfo',

  props: {
    mtn: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      forecastLoading: true,
    };
  },
};
</script>
