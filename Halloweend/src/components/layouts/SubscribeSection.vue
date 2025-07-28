<template>
  <section
    class="relative w-full rounded-lg bg-gradient-to-b from-primary-200/30 to-primary-100/10"
  >
    <div class="sm:h-60 sm:p-3 lg:h-[416px] lg:px-16">
      <h2 class="text-3xl font-semibold text-white md:text-4xl lg:text-6xl">Subscribe</h2>
      <p class="w-3/4 text-base text-white md:text-lg lg:mb-12">
        Subcribe to our newsletters and stay update!
      </p>
      <form action="" class="flex gap-1 mt-7">
        <div class="flex items-center h-14 md:gap-1 lg:h-24">
          <input
            type="text"
            class="w-40 h-full px-4 rounded-l-md box-content border-none outline-none md:w-52 lg:w-72"
            placeholder="Enter your email"
          />
          <button
            class="w-24 h-full p-4 text-[13px] text-white font-bold rounded-r-md bg-secondary lg:w-40"
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
    <div class="absolute w-1/3 -top-12 right-0 lg:w-80 lg:right-20">
      <img src="/src/assets/about-img.svg" alt="" />
    </div>
  </section>
</template>
