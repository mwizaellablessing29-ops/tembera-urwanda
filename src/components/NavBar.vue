<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isGalleryOpen = ref(false)
const isDestinationOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div class="flex items-center gap-3">
        <img src="../assets/sos1.svg" class="h-8 w-8" alt="Logo" />
      </div>

      <ul class="flex gap-10 items-center justify-end font-medium">
        <li>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>

        <li>
          <RouterLink to="/services" class="nav-link">Services</RouterLink>
        </li>

        <li
          class="relative cursor-pointer py-2"
          @mouseenter="isGalleryOpen = true"
          @mouseleave="isGalleryOpen = false"
        >
          <span class="nav-link">
            Gallery
            <span
              class="text-xs transition-transform duration-200"
              :class="{ 'rotate-180 text-yellow-300': isGalleryOpen }"
            >
              ▼
            </span>
          </span>

          <div v-if="isGalleryOpen" class="absolute left-0 top-full pt-2 w-48 z-50">
            <ul class="bg-white text-green-900 rounded shadow-lg py-2 border border-gray-100">
              <li>
                <RouterLink to="/gallery/photos" class="dropdown-link">Photos</RouterLink>
              </li>
              <li>
                <RouterLink to="/gallery/videos" class="dropdown-link">Videos</RouterLink>
              </li>
            </ul>
          </div>
        </li>

        <li
          class="relative cursor-pointer py-2"
          @mouseenter="isDestinationOpen = true"
          @mouseleave="isDestinationOpen = false"
        >
          <span class="nav-link">
            Destination
            <span
              class="text-xs transition-transform duration-200"
              :class="{ 'rotate-180 text-yellow-300': isDestinationOpen }"
            >
              ▼
            </span>
          </span>

          <div v-if="isDestinationOpen" class="absolute left-0 top-full pt-2 w-48 z-50">
            <ul class="bg-white text-green-900 rounded shadow-lg py-2 border border-gray-100">
              <li>
                <RouterLink to="/dest/northern" class="dropdown-link">Northern</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/southern" class="dropdown-link">Southern</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/eastern" class="dropdown-link">Eastern</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/western" class="dropdown-link">Western</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/kigali" class="dropdown-link">Kigali</RouterLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <RouterLink to="/contacts" class="nav-link">Contacts</RouterLink>
        </li>
      </ul>
    </nav>

    <main class="p-8 flex-grow">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 150ms ease;
  color: white;
}

.nav-link:hover {
  color: #fde047; /* tailwind yellow-300 */
}

.dropdown-link {
  display: block;
  padding: 0.5rem 1rem; /* px-4 py-2 */
  transition: background-color 150ms ease, color 150ms ease;
  color: #064e3b; /* green-900 */
}

.dropdown-link:hover {
  background-color: #fef9c3; /* yellow-50 */
  color: #b45309; /* yellow-700 */
}
</style>

