<script>
import RowComponent from './RowComponent.vue'

export default {
  components: {
    RowComponent,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>

<template>
  <RowComponent title="Options Component">
    <template v-slot:example1>
      <button @click="increment">Options components count is: {{ count }}</button>
    </template>
  </RowComponent>
</template>
