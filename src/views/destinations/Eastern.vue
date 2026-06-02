<template>
  <section class="bg-gradient-to-b from-orange-50 to-orange-100 text-orange-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Eastern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">Akagera National Park</h1>
        <p class="mt-5 text-lg leading-8 text-orange-700">
          Experience Rwanda's premier safari destination with the Big Five, vast savannas, and exciting wildlife viewing opportunities.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img src="@/assets/Akagera National Park 📍Rwanda.jpg" 
             alt="Akagera National Park" 
             class="w-full h-96 object-cover hover:scale-105 transition duration-300" />
      </div>

      <!-- Content Grid -->
      <div class="grid gap-12 lg:grid-cols-2 mb-12">
        <!-- Attractions -->
        <div class="rounded-2xl bg-white p-8 shadow-lg border border-orange-100">
          <h2 class="text-2xl font-bold text-orange-900 mb-6">Top Attractions</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-orange-900">Safari Tours</h3>
              <p class="text-sm text-orange-700 mt-1">Guided game drives to spot lions, elephants, buffalo, leopards, and rhinos</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-orange-900">Big Five Experience</h3>
              <p class="text-sm text-orange-700 mt-1">One of Africa's best destinations to see the complete Big Five wildlife</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-orange-900">Lake Ihema Boat Tours</h3>
              <p class="text-sm text-orange-700 mt-1">Scenic boat cruises with hippo and bird watching opportunities</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-orange-900">Bird Watching</h3>
              <p class="text-sm text-orange-700 mt-1">Over 525 bird species making it a paradise for ornithologists</p>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-orange-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Quick Facts</h3>
            <div class="space-y-3 text-sm">
              <p><span class="text-yellow-400 font-semibold">Best Time to Visit:</span> June-August</p>
              <p><span class="text-yellow-400 font-semibold">Location:</span> Eastern Rwanda</p>
              <p><span class="text-yellow-400 font-semibold">Park Size:</span> 1,122 km²</p>
              <p><span class="text-yellow-400 font-semibold">Main Gate:</span> Tabara</p>
              <p><span class="text-yellow-400 font-semibold">Wildlife:</span> Big Five Safari</p>
            </div>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-orange-100">
            <h3 class="text-xl font-bold text-orange-900 mb-4">Wildlife</h3>
            <ul class="space-y-2 text-sm text-orange-700">
              <li>✓ Lions</li>
              <li>✓ African Elephants</li>
              <li>✓ Buffalo</li>
              <li>✓ Leopards</li>
              <li>✓ Black Rhinos</li>
              <li>✓ 525+ Bird Species</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Itinerary Packages -->
      <div class="mb-12 rounded-2xl bg-white p-8 shadow-lg border border-orange-100">
        <h2 class="text-3xl font-bold text-orange-900 mb-6">Popular Safari Packages</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-orange-200 p-6">
            <h3 class="font-bold text-orange-900 mb-2">3-Day Explorer</h3>
            <p class="text-sm text-orange-700 mb-4">Perfect for a short and thrilling safari introduction.</p>
            <ul class="space-y-2 text-sm text-orange-700 mb-4">
              <li>✓ 2 game drives</li>
              <li>✓ Boat cruise on Lake Ihema</li>
              <li>✓ Bird watching</li>
            </ul>
            <p class="font-semibold text-orange-900">$550 - $750 / person</p>
          </div>
          <div class="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-6">
            <h3 class="font-bold text-orange-900 mb-2">5-Day Big Five</h3>
            <p class="text-sm text-orange-700 mb-4">Our most popular package for full park immersion.</p>
            <ul class="space-y-2 text-sm text-orange-700 mb-4">
              <li>✓ Multiple game drives</li>
              <li>✓ Night wildlife tracking</li>
              <li>✓ Expert ranger guide</li>
            </ul>
            <p class="font-semibold text-orange-900">$900 - $1,200 / person</p>
          </div>
          <div class="rounded-2xl border border-orange-200 p-6">
            <h3 class="font-bold text-orange-900 mb-2">7-Day Premium</h3>
            <p class="text-sm text-orange-700 mb-4">Includes premium lodges and extra cultural experiences.</p>
            <ul class="space-y-2 text-sm text-orange-700 mb-4">
              <li>✓ Luxury accommodation</li>
              <li>✓ Cultural village visit</li>
              <li>✓ Private safari launch</li>
            </ul>
            <p class="font-semibold text-orange-900">$1,800 - $2,500 / person</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-orange-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-orange-900 transition">
          Plan Your Safari
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Eastern'
}
</script>