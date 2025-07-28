<script setup>
import { useAttrs } from 'vue'
import RowComponent from './RowComponent.vue'
// defineOptions({ inheritAttrs: false })       // disable inheritAttrs

const attrs = useAttrs() // get all attributes
console.log(attrs)
</script>
<template>
  <RowComponent title="Fallthrough Attribut">
    <template v-slot:example1>
      <label for="">This is a Label</label>
      <button class="btn-fall" v-bind="$attrs">inspect to see the fallthrough</button>
      <!-- v-bind="$attrs" for fallthrough -->
    </template>
  </RowComponent>
</template>
<style></style>
