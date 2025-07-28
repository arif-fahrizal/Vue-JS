<script setup>
import { ref } from 'vue'
import RowComponent from './RowComponent.vue'

const count = ref(0)
const text = ref('Arahkan Mouse kesini')

const increment = () => {
  count.value++
}

const hover = () => {
  text.value = 'Tersorot'
}
</script>
<template lang="">
  <RowComponent title="Event Handling">
    <template v-slot:example1>
      <button @click="increment">Clicked: {{ count }} times</button>
    </template>
    <template v-slot:example2>
      <button @mouseover="hover">{{ text }}</button>
    </template>
    <template v-slot:example3>
      <input @keyup.enter="() => console.log('Enter')" />
    </template>
  </RowComponent>
</template>
<style lang=""></style>
