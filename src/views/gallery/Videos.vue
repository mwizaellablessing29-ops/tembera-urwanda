<template>
  <section class="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Gallery</p>
        <h1 class="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">Rwanda Video Collection</h1>
        <p class="mt-5 text-lg leading-8 text-gray-600">
          Watch captivating videos of Rwanda's landscapes, wildlife, and cultural experiences
        </p>
      </div>

      <!-- Video Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <!-- Video 1: Safari Experience -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🦁</p>
              <p class="text-white mt-4 font-semibold">Safari Adventures</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Safari Adventures in Akagera</h3>
            <p class="mt-2 text-gray-600">Witness the majesty of the Big Five in their natural habitat during thrilling game drives.</p>
            <p class="mt-4 text-sm text-gray-500">📹 4:32 minutes</p>
          </div>
        </div>

        <!-- Video 2: Gorilla Trekking -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🦍</p>
              <p class="text-white mt-4 font-semibold">Mountain Gorillas</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Mountain Gorilla Trekking</h3>
            <p class="mt-2 text-gray-600">An intimate encounter with endangered mountain gorillas in the misty Virunga Mountains.</p>
            <p class="mt-4 text-sm text-gray-500">📹 6:15 minutes</p>
          </div>
        </div>

        <!-- Video 3: Lake Kivu -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🌊</p>
              <p class="text-white mt-4 font-semibold">Lake Kivu Paradise</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Lake Kivu Paradise</h3>
            <p class="mt-2 text-gray-600">Discover the pristine beaches and crystal-clear waters of Africa's most beautiful lake.</p>
            <p class="mt-4 text-sm text-gray-500">📹 3:48 minutes</p>
          </div>
        </div>

        <!-- Video 4: Nyungwe Forest -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🌳</p>
              <p class="text-white mt-4 font-semibold">Rainforest Explorer</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Nyungwe Rainforest Explorer</h3>
            <p class="mt-2 text-gray-600">Walk through ancient rainforest canopies and encounter incredible biodiversity and wildlife.</p>
            <p class="mt-4 text-sm text-gray-500">📹 5:22 minutes</p>
          </div>
        </div>

        <!-- Video 5: Culture & People -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🎭</p>
              <p class="text-white mt-4 font-semibold">Rwandan Culture</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Rwandan Culture & People</h3>
            <p class="mt-2 text-gray-600">Experience the vibrant culture, traditions, and warm hospitality of the Rwandan people.</p>
            <p class="mt-4 text-sm text-gray-500">📹 7:10 minutes</p>
          </div>
        </div>

        <!-- Video 6: Kigali City -->
        <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
          <div class="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl">🏙️</p>
              <p class="text-white mt-4 font-semibold">City of Hills</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Kigali - City of Hills</h3>
            <p class="mt-2 text-gray-600">Explore Rwanda's dynamic capital city with its history, modern development, and thriving community.</p>
            <p class="mt-4 text-sm text-gray-500">📹 4:55 minutes</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-16 text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-green-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          Ready to Explore?
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Videos'
}
</script>