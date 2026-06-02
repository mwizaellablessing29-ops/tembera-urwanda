<template>
  <section class="bg-gradient-to-b from-green-50 to-green-100 text-green-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Southern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">Nyungwe Forest & Tea Plantations</h1>
        <p class="mt-5 text-lg leading-8 text-green-700">
          Discover lush rainforests, thrilling canopy walks, and the world's finest tea plantations in Rwanda's most biodiverse region.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img src="@/assets/Canopy walk experience in Nyungwe Forest national park Rwanda.jpg" 
             alt="Canopy walk in Nyungwe Forest" 
             class="w-full h-96 object-cover hover:scale-105 transition duration-300" />
      </div>

      <!-- Content Grid -->
      <div class="grid gap-12 lg:grid-cols-2 mb-12">
        <!-- Attractions -->
        <div class="rounded-2xl bg-white p-8 shadow-lg border border-green-100">
          <h2 class="text-2xl font-bold text-green-900 mb-6">Top Attractions</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-green-900">Nyungwe Forest Canopy Walk</h3>
              <p class="text-sm text-green-700 mt-1">Experience thrilling 50-meter-high suspension bridge with stunning forest views</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-green-900">Chimpanzee Trekking</h3>
              <p class="text-sm text-green-700 mt-1">Trek through pristine forest to observe endangered chimpanzees in their natural habitat</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-green-900">Tea Plantations Tours</h3>
              <p class="text-sm text-green-700 mt-1">Learn about Rwanda's famous tea production and sample world-class teas</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-green-900">Waterfall Hikes</h3>
              <p class="text-sm text-green-700 mt-1">Trek to beautiful waterfalls through dense rainforest trails</p>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-green-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Quick Facts</h3>
            <div class="space-y-3 text-sm">
              <p><span class="text-yellow-400 font-semibold">Best Time to Visit:</span> June-September</p>
              <p><span class="text-yellow-400 font-semibold">Location:</span> South-Western Rwanda</p>
              <p><span class="text-yellow-400 font-semibold">Main City:</span> Butare (Huye)</p>
              <p><span class="text-yellow-400 font-semibold">Highlights:</span> Rainforest, Wildlife, Tea Farms</p>
              <p><span class="text-yellow-400 font-semibold">Activities:</span> Trekking, Hiking, Bird Watching</p>
            </div>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-green-100">
            <h3 class="text-xl font-bold text-green-900 mb-4">Wildlife</h3>
            <ul class="space-y-2 text-sm text-green-700">
              <li>✓ Chimpanzees</li>
              <li>✓ 310+ Bird Species</li>
              <li>✓ Butterflies</li>
              <li>✓ Colobus Monkeys</li>
              <li>✓ Forest Hogs</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Itinerary Packages -->
      <div class="mb-12 rounded-2xl bg-white p-8 shadow-lg border border-green-100">
        <h2 class="text-3xl font-bold text-green-900 mb-6">Forest Adventure Packages</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-green-200 p-6">
            <h3 class="font-bold text-green-900 mb-2">2-Day Nature Trail</h3>
            <p class="text-sm text-green-700 mb-4">Explore the canopy walk and nearby waterfalls.</p>
            <ul class="space-y-2 text-sm text-green-700 mb-4">
              <li>✓ Canopy walk</li>
              <li>✓ Forest hike</li>
              <li>✓ Tea plantation tour</li>
            </ul>
            <p class="font-semibold text-green-900">$400 - $600 / person</p>
          </div>
          <div class="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-6">
            <h3 class="font-bold text-green-900 mb-2">4-Day Explorer</h3>
            <p class="text-sm text-green-700 mb-4">A balanced journey through rainforest and wildlife.</p>
            <ul class="space-y-2 text-sm text-green-700 mb-4">
              <li>✓ Chimp trekking</li>
              <li>✓ Waterfall hike</li>
              <li>✓ Local village experience</li>
            </ul>
            <p class="font-semibold text-green-900">$750 - $950 / person</p>
          </div>
          <div class="rounded-2xl border border-green-200 p-6">
            <h3 class="font-bold text-green-900 mb-2">7-Day Premium</h3>
            <p class="text-sm text-green-700 mb-4">Complete rainforest adventure with luxury lodging.</p>
            <ul class="space-y-2 text-sm text-green-700 mb-4">
              <li>✓ Luxury lodge stay</li>
              <li>✓ Private guided tours</li>
              <li>✓ Extended wildlife walks</li>
            </ul>
            <p class="font-semibold text-green-900">$1,400 - $1,800 / person</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-green-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          Plan Your Visit
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Southern'
}
</script>