<template>
  <section class="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Gallery</p>
        <h1 class="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">Rwanda Photo Collection</h1>
        <p class="mt-5 text-lg leading-8 text-gray-600">
          Stunning photographs capturing the beauty, wildlife, and culture of Rwanda.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="@/assets/Akagera National Park 📍Rwanda.jpg" alt="Akagera National Park" class="w-full h-[520px] object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900">Akagera National Park</h3>
            <p class="mt-3 text-gray-600">Big Five safari drives across savanna, wetlands, and forested hills in eastern Rwanda.</p>
            <router-link to="/destinations/Eastern" class="mt-4 inline-flex text-yellow-600 hover:text-yellow-700 font-semibold">
              View Eastern Province →
            </router-link>
          </div>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="@/assets/Canopy walk experience in Nyungwe Forest national park Rwanda.jpg" alt="Nyungwe Canopy Walk" class="w-full h-80 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Nyungwe Canopy Walk</h3>
            <p class="mt-3 text-gray-600">Walk among the treetops and explore one of Africa's oldest rainforests.</p>
            <router-link to="/destinations/Southern" class="mt-4 inline-flex text-yellow-600 hover:text-yellow-700 font-semibold">
              View Southern Province →
            </router-link>
          </div>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="@/assets/Lake Kivu in Rwanda.jpg" alt="Lake Kivu" class="w-full h-80 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Lake Kivu</h3>
            <p class="mt-3 text-gray-600">Relax on the shores of Africa's clearest lake among dramatic mountains and island views.</p>
            <router-link to="/destinations/Western" class="mt-4 inline-flex text-yellow-600 hover:text-yellow-700 font-semibold">
              View Western Province →
            </router-link>
          </div>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="@/assets/mukera.jpg" alt="Northern Rwanda Landscapes" class="w-full h-80 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Northern Mountains</h3>
            <p class="mt-3 text-gray-600">Volcanic peaks, lush valleys, and gorilla trekking routes in Rwanda's northern region.</p>
            <router-link to="/destinations/Northern" class="mt-4 inline-flex text-yellow-600 hover:text-yellow-700 font-semibold">
              View Northern Province →
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-10 shadow-xl border border-gray-200">
        <div class="grid gap-6 lg:grid-cols-3">
          <div>
            <h3 class="text-lg font-semibold text-green-900">Explore More</h3>
            <p class="mt-2 text-gray-600">Browse the gallery to see Rwanda's diverse landscapes and choose your perfect destination.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-900">Wildlife</h3>
            <p class="mt-2 text-gray-600">From gorillas to the Big Five, Rwanda offers unforgettable wildlife encounters.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-900">Culture</h3>
            <p class="mt-2 text-gray-600">Capture Rwanda's rich traditions, markets, and friendly communities.</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-green-900 px-8 py-4 text-white font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          Plan Your Adventure
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Photos'
}
</script>