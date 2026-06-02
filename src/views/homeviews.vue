<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('@/assets/Lake Kivu in Rwanda.jpg'); background-attachment: fixed;">
    <div class="text-center px-4 z-10">
      <span class="bg-yellow-400 text-green-900 text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
        Built with Vue 3 + Tailwind CSS
      </span>
      <h1 class="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
        Discover <span class="text-yellow-400">Rwanda</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-100">
        The Land of a Thousand Hills - Your Gateway to African Adventure
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <router-link to="/destinations" class="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition">
          Explore Destinations
        </router-link>
        <router-link to="/contact" class="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition border border-white">
          Plan Your Trip
        </router-link>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
          <div class="text-5xl mb-4">🦍</div>
          <h3 class="text-2xl font-bold text-green-900 mb-2">Mountain Gorillas</h3>
          <p class="text-gray-600">Trek to encounter endangered mountain gorillas in their natural habitat in the mist-covered volcanoes.</p>
        </div>
        <div class="text-center">
          <div class="text-5xl mb-4">🦁</div>
          <h3 class="text-2xl font-bold text-green-900 mb-2">Big Five Safari</h3>
          <p class="text-gray-600">Experience thrilling game drives and spot the Big Five in Rwanda's premier national parks.</p>
        </div>
        <div class="text-center">
          <div class="text-5xl mb-4">🌳</div>
          <h3 class="text-2xl font-bold text-green-900 mb-2">Rainforest Adventure</h3>
          <p class="text-gray-600">Walk through ancient rainforests with canopy walks and discover incredible biodiversity.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="bg-green-900 text-white py-16">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="text-center">
          <div class="text-4xl font-bold text-yellow-400">4</div>
          <p class="mt-2 text-lg">National Parks</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-yellow-400">600+</div>
          <p class="mt-2 text-lg">Mountain Gorillas</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-yellow-400">525+</div>
          <p class="mt-2 text-lg">Bird Species</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-yellow-400">5</div>
          <p class="mt-2 text-lg">Regions to Explore</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Destinations Preview -->
  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-900 mb-4">Popular Destinations</h2>
        <p class="text-gray-600 text-lg">Explore Rwanda's most iconic regions and attractions</p>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <router-link to="/destinations/Northern" class="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div class="h-48 bg-purple-200 flex items-center justify-center text-4xl group-hover:scale-110 transition">🦍</div>
          <div class="p-4 bg-white">
            <h3 class="font-bold text-green-900">Northern</h3>
            <p class="text-sm text-gray-600">Gorilla Trekking</p>
          </div>
        </router-link>

        <router-link to="/destinations/Eastern" class="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div class="h-48 bg-orange-200 flex items-center justify-center text-4xl group-hover:scale-110 transition">🦁</div>
          <div class="p-4 bg-white">
            <h3 class="font-bold text-green-900">Eastern</h3>
            <p class="text-sm text-gray-600">Akagera Safari</p>
          </div>
        </router-link>

        <router-link to="/destinations/Southern" class="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div class="h-48 bg-green-200 flex items-center justify-center text-4xl group-hover:scale-110 transition">🌳</div>
          <div class="p-4 bg-white">
            <h3 class="font-bold text-green-900">Southern</h3>
            <p class="text-sm text-gray-600">Nyungwe Forest</p>
          </div>
        </router-link>

        <router-link to="/destinations/Western" class="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div class="h-48 bg-blue-200 flex items-center justify-center text-4xl group-hover:scale-110 transition">🌊</div>
          <div class="p-4 bg-white">
            <h3 class="font-bold text-green-900">Western</h3>
            <p class="text-sm text-gray-600">Lake Kivu</p>
          </div>
        </router-link>

        <router-link to="/destinations/Kigali" class="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div class="h-48 bg-red-200 flex items-center justify-center text-4xl group-hover:scale-110 transition">🏙️</div>
          <div class="p-4 bg-white">
            <h3 class="font-bold text-green-900">Kigali</h3>
            <p class="text-sm text-gray-600">Capital City</p>
          </div>
        </router-link>
      </div>

      <div class="text-center mt-12">
        <router-link to="/destinations" class="inline-flex rounded-full bg-green-900 text-white px-8 py-3 font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          View All Destinations
        </router-link>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="bg-green-900 text-white py-16">
    <div class="mx-auto max-w-4xl px-6 md:px-12 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Explore Rwanda?</h2>
      <p class="text-lg mb-8 text-gray-100">
        Start planning your Rwandan adventure today. Our team is ready to help you create an unforgettable experience.
      </p>
      <router-link to="/contact" class="inline-flex rounded-full bg-yellow-400 text-green-900 px-8 py-4 font-semibold hover:bg-yellow-300 transition">
        Get in Touch with Us
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeViews'
}
</script>