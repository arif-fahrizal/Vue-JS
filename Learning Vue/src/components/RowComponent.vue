<script setup>
const { title } = defineProps(['title'])
</script>
<template>
  <tr>
    <!-- Kolom Title -->
    <td>{{ title }}</td>

    <!-- Kolom opsional menggunakan named slots -->
    <td v-if="$slots.example1"><slot name="example1">-</slot></td>
    <td v-if="$slots.example2"><slot name="example2">-</slot></td>
    <td v-if="$slots.example3"><slot name="example3">-</slot></td>
    <td v-if="$slots.example4"><slot name="example4">-</slot></td>
  </tr>
</template>

<style scoped>
td {
  border: 1px solid #1e1e1e;
}

td:first-child {
  text-align: center;
}
</style>
