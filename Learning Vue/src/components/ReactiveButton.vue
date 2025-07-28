<script setup>
import { reactive, ref } from 'vue'
import RowComponent from './RowComponent.vue'

// Using ref
const count = ref(0)

// Using reactive
const user = reactive({ name: 'John Doe', age: 30 })
</script>
<template>
  <RowComponent title="Reactive Button">
    <template #example1>
      <span>Reactivity count is: </span><button @click="count++">{{ count }}</button>
    </template>
    <template #example2>
      <div>
        <p>Name: {{ user.name }}</p>
        <span>Age: </span><button @click="user.age++">{{ user.age }}</button>
      </div>
    </template>
  </RowComponent>
</template>
<style scoped></style>
