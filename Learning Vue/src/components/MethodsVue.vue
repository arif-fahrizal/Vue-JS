<template lang="">
  <div>
    <h2>Multiply methods : {{ getBaseMultiplier(10) }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseMultiplier: 2,
    }
  },
  methods: {
    getBaseMultiplier(number) {
      return number * this.baseMultiplier
    },
  },
}
</script>
<style lang=""></style>
