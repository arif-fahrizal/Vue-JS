<script setup>
import { computed, reactive, ref } from 'vue'
import RowComponent from './RowComponent.vue'

const showAuthor = ref(true)

const author = reactive({
  name: 'JK Rowling',
  books: ['Harry Potter', 'The Chamber of Secrets', 'The Prisoner of Azkaban'],
})
// Computed Properties to memoize
const numberOfBooks = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'None'
})
</script>
<template>
  <RowComponent title="Text Interpolation">
    <template v-slot:example1>
      <!-- V-IF -->
      <p v-if="showAuthor">Author Name: {{ author.name }}</p>
      <p>Published: {{ numberOfBooks }}</p>
    </template>
    <template v-slot:example2>
      <!-- V-IF-ELSE -->
      <p v-if="author.books.length > 1">Have more than one book</p>
      <p v-else-if="author.books.length === 1">Have A book</p>
      <p v-else>Dont Have A Book</p>
    </template>
    <template v-slot:example3>
      <!-- V-SHOW -->
      <p v-show="author.books.length > 0">Total Books {{ author.books.length }}</p>
    </template>
  </RowComponent>
</template>
<style lang=""></style>
