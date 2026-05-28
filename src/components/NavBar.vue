<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Track state of each dropdown menu
const isGalleryOpen = ref(false)
const isDestinationOpen = ref(false)
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img src="../assets/sos1.svg" class="h-8 w-8" alt="Logo">
    </div>
    <ul class="flex gap-10 items-center justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
      <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
      
      <!-- Gallery Dropdown -->
      <li 
        class="relative cursor-pointer py-2"
        @mouseenter="isGalleryOpen = true"
        @mouseleave="isGalleryOpen = false"
      >
        <span class="hover:text-yellow-300 flex items-center gap-1 select-none">
          Gallery <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isGalleryOpen }">▼</span>
        </span>
        
        <!-- Dropdown Menu Box (Using mt-2 adds a stable bridge so mouse doesn't get lost) -->
        <ul 
          v-if="isGalleryOpen" 
          class="absolute left-0 top-full mt-1 bg-white text-green-900 rounded shadow-lg py-2 w-48 z-50 border border-gray-100"
        >
          <li>
            <RouterLink to="/gallery/photos" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Photos</RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Videos</RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li 
        class="relative cursor-pointer py-2"
        @mouseenter="isDestinationOpen = true"
        @mouseleave="isDestinationOpen = false"
      >
        <span class="hover:text-yellow-300 flex items-center gap-1 select-none">
          Destination <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isDestinationOpen }">▼</span>
        </span>
        
        <!-- Dropdown Menu Box -->
        <ul 
          v-if="isDestinationOpen" 
          class="absolute left-0 top-full mt-1 bg-white text-green-900 rounded shadow-lg py-2 w-48 z-50 border border-gray-100"
        >
          <li>
            <RouterLink to="/dest/northern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Northern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/southern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Southern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/eastern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Eastern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/western" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Western</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/kigali" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors">Kigali</RouterLink>
          </li>
        </ul>
      </li>
      
      <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink></li>
    </ul>
  </nav>

  <!-- This is where your clicked pages will render dynamically -->
  <main class="p-8">
    <RouterView />
  </main>
</template>