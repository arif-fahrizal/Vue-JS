<script setup>
import RowComponent from './RowComponent.vue'

// const btnDisabled = true
const isLoading = true
const btnAttribut = {
  disabled: isLoading,
  class: 'primary',
  id: 'btn1',
}
</script>

<template>
  <RowComponent title="V-Bind">
    <template v-slot:example1>
      <!-- <button :disabled="btnDisabled">Click</button> -->
      <button v-bind="btnAttribut">{{ isLoading ? 'Loading' : 'Click' }}</button>
    </template>
  </RowComponent>
</template>

<style scoped></style>
