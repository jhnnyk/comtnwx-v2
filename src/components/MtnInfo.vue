<template>
  <div>
    {{ $route.params }}
    {{ mtn }}
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
};
</script>
