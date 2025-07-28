<script setup>
import AboutSection from './components/layouts/AboutSection.vue'
import CategorySection from './components/layouts/CategorySection.vue'
import FooterSection from './components/layouts/FooterSection.vue'
import Hero from './components/layouts/HeroSection.vue'
import Navbar from './components/layouts/NavigationBar.vue'
import SubscribeSection from './components/layouts/SubscribeSection.vue'
import TrickOrTreat from './components/layouts/TrickOrTreat.vue'
</script>
<template>
  <Navbar />
  <main class="container grid gap-24 overflow-hidden">
    <Hero />
    <CategorySection />
    <AboutSection />
    <TrickOrTreat />
    <SubscribeSection />
    <FooterSection />
  </main>
</template>
<style lang=""></style>
