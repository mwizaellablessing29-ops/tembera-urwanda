<template>
  <section class="bg-gradient-to-b from-red-50 to-red-100 text-red-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Capital City</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">Kigali - City of Thousand Hills</h1>
        <p class="mt-5 text-lg leading-8 text-red-700">
          Explore Rwanda's vibrant capital city with its rich history, cultural attractions, modern amenities, and warm hospitality.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-red-200 h-96 flex items-center justify-center">
        <div class="text-center">
          <p class="text-4xl">🏙️</p>
          <p class="mt-4 text-red-700 font-semibold">Kigali City Panorama</p>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid gap-12 lg:grid-cols-2 mb-12">
        <!-- Attractions -->
        <div class="rounded-2xl bg-white p-8 shadow-lg border border-red-100">
          <h2 class="text-2xl font-bold text-red-900 mb-6">Top Attractions</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-red-900">Genocide Memorial</h3>
              <p class="text-sm text-red-700 mt-1">Learn about Rwanda's history and resilience at this powerful memorial museum</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-red-900">Kigali Genocide Memorial</h3>
              <p class="text-sm text-red-700 mt-1">Comprehensive museum documenting the 1994 genocide and recovery</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-red-900">Musée de la Ville</h3>
              <p class="text-sm text-red-700 mt-1">Discover Kigali's urban history and contemporary culture</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-red-900">Local Markets & Food</h3>
              <p class="text-sm text-red-700 mt-1">Experience vibrant Kimironko and Muhima markets with traditional cuisine</p>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-red-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Quick Facts</h3>
            <div class="space-y-3 text-sm">
              <p><span class="text-yellow-400 font-semibold">Population:</span> ~1.2 million</p>
              <p><span class="text-yellow-400 font-semibold">Altitude:</span> 1,567 meters</p>
              <p><span class="text-yellow-400 font-semibold">Climate:</span> Temperate highland</p>
              <p><span class="text-yellow-400 font-semibold">Founded:</span> Early 1900s</p>
              <p><span class="text-yellow-400 font-semibold">Language:</span> Kinyarwanda, English, French</p>
            </div>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-red-100">
            <h3 class="text-xl font-bold text-red-900 mb-4">Activities</h3>
            <ul class="space-y-2 text-sm text-red-700">
              <li>✓ Museum Visits</li>
              <li>✓ Shopping & Markets</li>
              <li>✓ Restaurants & Cafes</li>
              <li>✓ Cultural Tours</li>
              <li>✓ Nightlife</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-red-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-red-900 transition">
          Plan Your City Tour
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Kigali'
}
</script>