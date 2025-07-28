<script setup>
import RowComponent from './RowComponent.vue'

const text = 'Composition components'
</script>

<template>
  <RowComponent title="Composition Component">
    <template v-slot:example1>
      <h1>{{ text }}</h1>
    </template>
  </RowComponent>
</template>

<style lang=""></style>
