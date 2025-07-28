<script setup>
import PrimaryButton from './components/PrimaryButton.vue'
import PropsButton from './components/PropsButton.vue'
import ReactiveButton from './components/ReactiveButton.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import RowComponent from './components/RowComponent.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import EventHandling from './components/EventHandling.vue'
import FallthroughAttribut from './components/FallthroughAttribut.vue'

// Text Interpolation = output string
const greeting = 'Hallo Guys'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Example 1</th>
        <th>Example 2</th>
        <th>Example 3</th>
        <th>Example 4</th>
      </tr>
    </thead>
    <tbody>
      <RowComponent title="Text Interpolation">
        <template v-slot:example1>
          <p>{{ greeting }}</p>
        </template>
      </RowComponent>
      <PrimaryButton />
      <OptionsComponent />
      <CompositionComponent />
      <PropsButton />
      <ReactiveButton />
      <ComputedProperties />
      <ConditionalRendering />
      <ListRendering />
      <EventHandling />
      <FallthroughAttribut class="fallthrough" @click="() => console.log('clicked')" />
    </tbody>
  </table>
</template>

<style scoped>
table {
  max-width: 1200px;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
}

th {
  width: 200px;
  border: 1px solid #1e1e1e;
}
</style>
