<script setup>
import { reactive } from 'vue'
import RowComponent from './RowComponent.vue'

const author = reactive({
  name: 'JK Rowling',
  books: [
    {
      title: 'Harry Potter',
      releaseDate: 1997,
      reviews: [5, 4, 5],
      rating: 5,
    },
    {
      title: 'The Chamber of Secrets',
      releaseDate: 1998,
      reviews: [5, 4, 5],
      rating: 4,
    },
    {
      title: 'The Prisoner of Azkaban',
      releaseDate: 1999,
      reviews: [5, 4, 5],
      rating: 3,
    },
  ],
})
</script>
<template>
  <RowComponent title="Text Interpolation">
    <template v-slot:example1>
      <h3>Books</h3>
      <ol>
        <!-- V-FOR Array  -->
        <!-- Destructuring { title, releaseDate }  -->
        <li v-for="(book, index) in author.books" :key="index">
          {{ book.title }} - {{ book.releaseDate }}-
          <span v-for="(review, index) in book.reviews" :key="index">{{ review }}</span
          >*
        </li>
      </ol>
    </template>
    <template v-slot:example2>
      <!-- V-FOR Object -->
      <ol>
        <li v-for="(data, key, index) in author" :key="index">{{ key }}: {{ data }}</li>
      </ol>
    </template>
    <template v-slot:example3>
      <!-- V-FOR Looping -->
      <ul>
        <li v-for="(star, index) in 10" :key="index">{{ `*`.repeat(star) }}</li>
      </ul>
    </template>
    <template v-slot:example4>
      <!-- V-FOR Looping with Condition -->
      <ul>
        <template v-for="(book, index) in author.books" :key="index">
          <li v-if="book.rating > 3">{{ book.title }} - {{ book.rating }}</li>
        </template>
      </ul>
    </template>
  </RowComponent>
</template>
<style scoped></style>
