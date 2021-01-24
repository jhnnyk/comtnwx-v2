<template>
  <div id="homepage" class="text-center p-8">
    <h2 class="text-3xl">
      Welcome to
      <router-link to="/">ColoradoMountainWeather.com</router-link>
    </h2>
    <p>
      <router-link to="/">ColoradoMountainWeather.com</router-link>
      is your source for accurate weather forecasts for Colorado's 14,000 ft.
      mountains.
    </p>
    <p>
      Please select a mountain from the list on the left to see the current
      weather and the weather forecast for the selected mountain.
    </p>
    <p>
      Need help deciding? Maybe try Colorado's highest peak,
      <router-link to="/mt_elbert">Mt. Elbert</router-link>, or perhaps the
      iconic <router-link to="/pikes_peak">Pikes Peak</router-link>!
    </p>
    <p>
      <img
        src="/images/IMG_0947.jpeg"
        alt="looking west from the summit of Mt. Evans"
      />
      looking west from the summit of
      <router-link to="/mt_evans">Mt. Evans</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
