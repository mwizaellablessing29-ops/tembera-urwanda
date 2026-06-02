<template>
  <section class="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Explore Rwanda</p>
        <h1 class="mt-4 text-5xl font-extrabold text-green-900 leading-tight">Destinations & Regions</h1>
        <p class="mt-5 text-lg leading-8 text-green-700">
          Discover Rwanda's most iconic destinations, from vibrant cities to pristine national parks
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <!-- Kigali -->
        <router-link to="/destinations/Kigali" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-red-200 flex items-center justify-center">
            <p class="text-6xl">🏙️</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Capital City</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Kigali</h3>
            <p class="mt-2 text-sm text-green-700">City of thousand hills with vibrant culture, museums, and modern amenities.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              Explore →
            </div>
          </div>
        </router-link>

        <!-- Northern -->
        <router-link to="/destinations/Northern" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-purple-200 flex items-center justify-center">
            <p class="text-6xl">🦍</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Volcanoes</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Northern Province</h3>
            <p class="mt-2 text-sm text-green-700">Trek with mountain gorillas in misty volcanic mountains and lush forests.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              Explore →
            </div>
          </div>
        </router-link>

        <!-- Eastern -->
        <router-link to="/destinations/Eastern" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-orange-200 flex items-center justify-center">
            <p class="text-6xl">🦁</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Safari</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Eastern Province</h3>
            <p class="mt-2 text-sm text-green-700">Experience the Big Five in Akagera National Park with exciting game drives.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              Explore →
            </div>
          </div>
        </router-link>

        <!-- Western -->
        <router-link to="/destinations/Western" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-blue-200 flex items-center justify-center">
            <p class="text-6xl">🌊</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Lakes</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Western Province</h3>
            <p class="mt-2 text-sm text-green-700">Relax by Africa's clearest lake with pristine beaches and water sports.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              Explore →
            </div>
          </div>
        </router-link>

        <!-- Southern -->
        <router-link to="/destinations/Southern" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-green-200 flex items-center justify-center">
            <p class="text-6xl">🌳</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Rainforest</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Southern Province</h3>
            <p class="mt-2 text-sm text-green-700">Walk through ancient rainforests with canopy walks and chimpanzee trekking.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              Explore →
            </div>
          </div>
        </router-link>

        <!-- Gallery -->
        <router-link to="/gallery/Photos" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:scale-105">
          <div class="relative h-64 overflow-hidden bg-yellow-200 flex items-center justify-center">
            <p class="text-6xl">📸</p>
          </div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-yellow-600 font-semibold">Gallery</p>
            <h3 class="mt-3 text-2xl font-bold text-green-900">Photo Gallery</h3>
            <p class="mt-2 text-sm text-green-700">Stunning photography of Rwanda's landscapes, wildlife, and cultural moments.</p>
            <div class="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
              View Gallery →
            </div>
          </div>
        </router-link>
      </div>

      <!-- Featured Section -->
      <div class="mt-16 rounded-2xl bg-white p-8 shadow-lg border border-green-100">
        <h2 class="text-3xl font-bold text-green-900 mb-6">Why Visit Rwanda?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <p class="text-4xl mb-4">🌍</p>
            <h3 class="text-xl font-semibold text-green-900 mb-2">Biodiversity</h3>
            <p class="text-green-700">One of Africa's most biodiverse countries with unique wildlife and plant species found nowhere else on Earth.</p>
          </div>
          <div>
            <p class="text-4xl mb-4">🤝</p>
            <h3 class="text-xl font-semibold text-green-900 mb-2">Friendly People</h3>
            <p class="text-green-700">Known as the warmest people in Africa, Rwandans welcome visitors with genuine hospitality and kindness.</p>
          </div>
          <div>
            <p class="text-4xl mb-4">🛡️</p>
            <h3 class="text-xl font-semibold text-green-900 mb-2">Safe & Accessible</h3>
            <p class="text-green-700">One of Africa's safest countries with excellent infrastructure, making travel easy for first-time visitors.</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-12 text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-green-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          Plan Your Rwanda Adventure
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Destination'
}
</script>