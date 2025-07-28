<script setup>
const categories = [
  {
    title: 'Ghost',
    image: '/src/assets/category/category1-img.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.',
  },
  {
    title: 'Witch',
    image: '/src/assets/category/category2-img.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.',
  },
  {
    title: 'Pumpkin',
    image: '/src/assets/category/category3-img.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.',
  },
]
</script>
<template>
  <section id="category" class="flex flex-col items-center">
    <h2 class="mb-10 text-3xl font-bold text-white md:text-6xl">Category</h2>
    <div class="grid place-items-center sm:grid-cols-3">
      <div
        class="w-5/6 grid place-items-center gap-2 text-center text-white"
        v-for="({ title, image, description }, index) in categories"
        :key="index"
      >
        <img :src="image" :alt="image" class="w-full" />
        <h3 class="text-3xl font-bold">{{ title }}</h3>
        <p class="w-full">{{ description }}</p>
      </div>
    </div>
  </section>
</template>
