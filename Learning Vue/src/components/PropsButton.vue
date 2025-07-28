<script setup>
import RowComponent from './RowComponent.vue'
// Props with Array
// const props = defineProps(['title'])

// Props with Object & Destructuring
// const { title = 'Secondary Button', disabled = false } = defineProps({
//   title: String,
//   disabled: Boolean,
// })

// Props with Default Value
const { title, disabled } = defineProps({
  title: {
    type: String,
    default: 'Secondary Button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <RowComponent title="Props Button">
    <template v-slot:example1>
      <button :disabled>{{ title }}</button>
    </template>
  </RowComponent>
</template>
<style lang=""></style>
