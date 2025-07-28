<script setup>
import { computed, reactive, ref } from 'vue'
import RowComponent from './RowComponent.vue'

const author = reactive({
  name: 'JK Rowling',
  books: ['Harry Potter', 'The Chamber of Secrets', 'The Prisoner of Azkaban'],
})

const count = ref(0)

const increment = () => {
  count.value++
}
// Computed Properties to memoize
const numberOfBooks = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'None'
})
</script>
<template>
  <RowComponent title="Computed Properties">
    <template v-slot:example1>
      <p>Author Name: {{ author.name }}</p>
      <p>Published: {{ numberOfBooks }}</p>
      <button @click="increment">{{ count }}</button>
    </template>
  </RowComponent>
</template>
<style lang=""></style>
