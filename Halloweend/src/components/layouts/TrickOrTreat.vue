<script setup>
const tots = [
  {
    title: 'Candy',
    image: '/src/assets/Trick or Treat/candy.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
  {
    title: 'Ghost',
    image: '/src/assets/Trick or Treat/ghost.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
  {
    title: 'Grave',
    image: '/src/assets/Trick or Treat/grave.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
  {
    title: 'House',
    image: '/src/assets/Trick or Treat/house.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
  {
    title: 'Spider',
    image: '/src/assets/Trick or Treat/spider.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
  {
    title: 'Bone',
    image: '/src/assets/Trick or Treat/bone.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. ',
  },
]
</script>
<template>
  <section class="flex flex-col items-center">
    <h2 class="mb-24 text-3xl font-bold text-white md:text-4xl lg:text-6xl">Trick Or Treat</h2>
    <div class="flex flex-wrap justify-center gap-5">
      <div
        class="grid place-items-center gap-5 w-36 p-1 text-center text-white rounded-md bg-gradient-to-b md:w-52 lg:w-80"
        :class="
          index === 1
            ? 'from-primary-200/50 to-primary-200/30 md:-translate-y-10'
            : 'from-primary-200/20 to-primary-200/10'
        "
        v-for="({ title, image, description }, index) in tots"
        :key="index"
      >
        <img :src="image" :alt="title" />
        <h3 class="text-base md:text-3xl">{{ title }}</h3>
        <p class="hidden w-[90%] lg:block">{{ description }}</p>
      </div>
    </div>
  </section>
</template>
