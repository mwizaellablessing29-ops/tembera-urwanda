<template>
  <section class="bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Western Province</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">Lake Kivu & Mountain Scenery</h1>
        <p class="mt-5 text-lg leading-8 text-blue-700">
          Relax by Africa's clearest lake, trek through volcanic landscapes, and experience the warmth of western Rwanda's communities.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img src="@/assets/Lake Kivu in Rwanda.jpg" 
             alt="Lake Kivu" 
             class="w-full h-96 object-cover hover:scale-105 transition duration-300" />
      </div>

      <!-- Content Grid -->
      <div class="grid gap-12 lg:grid-cols-2 mb-12">
        <!-- Attractions -->
        <div class="rounded-2xl bg-white p-8 shadow-lg border border-blue-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">Top Attractions</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-blue-900">Lake Kivu Beach Resorts</h3>
              <p class="text-sm text-blue-700 mt-1">Africa's clearest lake with pristine beaches and water sports activities</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-blue-900">Bisoke Volcano Trek</h3>
              <p class="text-sm text-blue-700 mt-1">Hike to the crater of this active volcano with breathtaking views</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-blue-900">Karongi (Gisenyi) Town</h3>
              <p class="text-sm text-blue-700 mt-1">Colonial architecture, restaurants, and vibrant lakeside culture</p>
            </div>
            <div class="border-l-4 border-yellow-400 pl-4 py-2">
              <h3 class="font-semibold text-blue-900">Hot Springs</h3>
              <p class="text-sm text-blue-700 mt-1">Relax in naturally heated mineral-rich springs near Lake Kivu</p>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-blue-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Quick Facts</h3>
            <div class="space-y-3 text-sm">
              <p><span class="text-yellow-400 font-semibold">Best Time to Visit:</span> Year-round</p>
              <p><span class="text-yellow-400 font-semibold">Location:</span> Western Rwanda</p>
              <p><span class="text-yellow-400 font-semibold">Main Cities:</span> Karongi, Rubavu</p>
              <p><span class="text-yellow-400 font-semibold">Lake Size:</span> 2,700 km²</p>
              <p><span class="text-yellow-400 font-semibold">Activities:</span> Beach, Water Sports, Hiking</p>
            </div>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-blue-100">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Activities</h3>
            <ul class="space-y-2 text-sm text-blue-700">
              <li>✓ Swimming & Sunbathing</li>
              <li>✓ Boat Cruises</li>
              <li>✓ Water Skiing</li>
              <li>✓ Fishing</li>
              <li>✓ Scenic Photography</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Itinerary Packages -->
      <div class="mb-12 rounded-2xl bg-white p-8 shadow-lg border border-blue-100">
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Lake Kivu Packages</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-blue-200 p-6">
            <h3 class="font-bold text-blue-900 mb-2">Weekend Escape</h3>
            <p class="text-sm text-blue-700 mb-4">A short lakeside retreat for rest and relaxation.</p>
            <ul class="space-y-2 text-sm text-blue-700 mb-4">
              <li>✓ Beach resort stay</li>
              <li>✓ Sunset cruise</li>
              <li>✓ Local dining</li>
            </ul>
            <p class="font-semibold text-blue-900">$350 - $500 / person</p>
          </div>
          <div class="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-6">
            <h3 class="font-bold text-blue-900 mb-2">5-Day Lakeside</h3>
            <p class="text-sm text-blue-700 mb-4">Ideal for combining lake fun with hiking and culture.</p>
            <ul class="space-y-2 text-sm text-blue-700 mb-4">
              <li>✓ Boat cruises</li>
              <li>✓ Volcano hike</li>
              <li>✓ Hot springs</li>
              <li>✓ Local markets</li>
            </ul>
            <p class="font-semibold text-blue-900">$700 - $1,000 / person</p>
          </div>
          <div class="rounded-2xl border border-blue-200 p-6">
            <h3 class="font-bold text-blue-900 mb-2">7-Day Premium</h3>
            <p class="text-sm text-blue-700 mb-4">Luxury lakefront adventure with private guides.</p>
            <ul class="space-y-2 text-sm text-blue-700 mb-4">
              <li>✓ Private lodge</li>
              <li>✓ All activities included</li>
              <li>✓ Personalized itinerary</li>
            </ul>
            <p class="font-semibold text-blue-900">$1,300 - $1,800 / person</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-blue-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-blue-900 transition">
          Plan Your Visit
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Western'
}
</script>