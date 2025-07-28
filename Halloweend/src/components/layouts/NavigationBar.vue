<script setup>
import { onMounted, ref } from 'vue'

const isOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('bg-primary-200', window.scrollY > 0)
  })
})
</script>
<template>
  <nav class="sticky top-0 z-10">
    <div class="container flex justify-between items-center py-2">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-1">
        <span class="text-xl md:text-2xl text-white font-bold">
          Hallow<span class="text-secondary">ee</span>nd
        </span>
        <img src="/src/assets/halloween.svg" alt="Halloweend Logo" />
      </a>
      <div class="flex items-center gap-5">
        <!-- Menu -->
        <div
          id="menu"
          class="hidden items-center gap-10 w-full md:flex md:w-auto"
          :class="{
            '!flex flex-col absolute top-[100%] left-0 w-full p-4 bg-primary-200 md:relative md:top-auto md:left-auto':
              isOpen,
          }"
        >
          <ul class="flex flex-col p-4 md:flex-row gap-5 text-center">
            <li>
              <a class="text-white font-medium transition-all hover:text-gray-300" href="#home"
                >Home</a
              >
            </li>
            <li>
              <a class="text-white font-medium transition-all hover:text-gray-300" href="#about"
                >About</a
              >
            </li>
            <li>
              <a class="text-white font-medium transition-all hover:text-gray-300" href="#category"
                >Category</a
              >
            </li>
            <li>
              <a
                class="text-white font-medium transition-all hover:text-gray-300"
                href="#trick-or-treat"
                >Trick Or Treat</a
              >
            </li>
          </ul>
        </div>

        <!-- Button -->
        <div class="flex items-center gap-2 md:gap-5">
          <!-- Donate Button -->
          <button
            class="py-2 px-5 text-sm font-semibold text-white rounded-full bg-secondary md:py-3 md:px-9 md:text-lg"
          >
            DONATE
          </button>

          <!-- Hamburger -->
          <button
            class="grid place-items-center gap-1 group md:hidden"
            type="button"
            @click="isOpen = !isOpen"
            data-collapse-toggle="menu"
            aria-controls="menu"
            aria-expanded="false"
          >
            <span
              class="w-6 h-1 mx-auto origin-left bg-white rounded-md transform transition duration-300"
              :class="{ 'rotate-[42.5deg]': isOpen }"
            />
            <span
              class="w-6 h-1 mx-auto bg-white rounded-md transform transition duration-300"
              :class="{ 'opacity-0': isOpen }"
            />
            <span
              class="w-6 h-1 mx-auto bg-white rounded-md origin-left transform transition duration-300"
              :class="{ '-rotate-[42.5deg]': isOpen }"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
