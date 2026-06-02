<template>
  <section class="bg-gradient-to-b from-purple-50 to-purple-100 text-purple-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Northern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">Volcanoes & Mountain Gorillas</h1>
        <p class="mt-5 text-lg leading-8 text-purple-700">
          Trek through misty mountains to encounter endangered mountain gorillas in their natural habitat. An unforgettable wilderness experience.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img src="@/assets/mukera.jpg" 
             alt="Northern Rwanda Landscapes" 
             class="w-full h-96 object-cover hover:scale-105 transition duration-300" />
      </div>

      <!-- Content Grid -->
      <div class="grid gap-12 lg:grid-cols-2 mb-12">
        <!-- Attractions -->
        <div class="rounded-2xl bg-white p-8 shadow-lg border border-purple-100">
          <h2 class="text-2xl font-bold text-purple-900 mb-6">Top Attractions</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-purple-900">Mountain Gorilla Trekking</h3>
              <p class="text-sm text-purple-700 mt-1">Encounter endangered mountain gorillas in Volcanoes National Park</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-purple-900">Volcano Hikes</h3>
              <p class="text-sm text-purple-700 mt-1">Trek up Karisimbi, Visoke, and Sabyinyo volcanoes with stunning crater views</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-purple-900">Golden Monkey Trekking</h3>
              <p class="text-sm text-purple-700 mt-1">Track rare golden monkeys through high-altitude bamboo forests</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-purple-900">Ruhengeri Town</h3>
              <p class="text-sm text-purple-700 mt-1">Gateway to the volcanoes with markets, culture, and local cuisine</p>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-purple-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Quick Facts</h3>
            <div class="space-y-3 text-sm">
              <p><span class="text-yellow-400 font-semibold">Best Time to Visit:</span> June-August, Dec-Jan</p>
              <p><span class="text-yellow-400 font-semibold">Location:</span> Northern Rwanda</p>
              <p><span class="text-yellow-400 font-semibold">Main City:</span> Ruhengeri (Musanze)</p>
              <p><span class="text-yellow-400 font-semibold">Gorilla Population:</span> ~600 individuals</p>
              <p><span class="text-yellow-400 font-semibold">Park Altitude:</span> Up to 4,507m</p>
            </div>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-purple-100">
            <h3 class="text-xl font-bold text-purple-900 mb-4">Wildlife</h3>
            <ul class="space-y-2 text-sm text-purple-700">
              <li>✓ Mountain Gorillas</li>
              <li>✓ Golden Monkeys</li>
              <li>✓ Colobus Monkeys</li>
              <li>✓ Forest Elephants</li>
              <li>✓ Endangered Species</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Itinerary Packages -->
      <div class="mb-12 rounded-2xl bg-white p-8 shadow-lg border border-purple-100">
        <h2 class="text-3xl font-bold text-purple-900 mb-6">Gorilla Trekking Packages</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-purple-200 p-6">
            <h3 class="font-bold text-purple-900 mb-2">2-Day Trek</h3>
            <p class="text-sm text-purple-700 mb-4">A short gorilla experience with expert guides.</p>
            <ul class="space-y-2 text-sm text-purple-700 mb-4">
              <li>✓ One gorilla trek</li>
              <li>✓ Golden monkey hike</li>
              <li>✓ Local lodge stay</li>
            </ul>
            <p class="font-semibold text-purple-900">$650 - $850 / person</p>
          </div>
          <div class="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-6">
            <h3 class="font-bold text-purple-900 mb-2">4-Day Ultimate</h3>
            <p class="text-sm text-purple-700 mb-4">Recommended for a full Volcanoes Park experience.</p>
            <ul class="space-y-2 text-sm text-purple-700 mb-4">
              <li>✓ Gorilla family visit</li>
              <li>✓ Volcano hike</li>
              <li>✓ Cultural village tour</li>
            </ul>
            <p class="font-semibold text-purple-900">$1,200 - $1,500 / person</p>
          </div>
          <div class="rounded-2xl border border-purple-200 p-6">
            <h3 class="font-bold text-purple-900 mb-2">7-Day Premium</h3>
            <p class="text-sm text-purple-700 mb-4">Complete adventure with luxury lodge stays.</p>
            <ul class="space-y-2 text-sm text-purple-700 mb-4">
              <li>✓ Multiple treks</li>
              <li>✓ Full park exploration</li>
              <li>✓ Private guide service</li>
            </ul>
            <p class="font-semibold text-purple-900">$1,800 - $2,200 / person</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-purple-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-purple-900 transition">
          Book Gorilla Trekking
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Northern'
}
</script>