<script setup>
// import sosImage from '../assets/sos.svg' 
// Bring in RouterLink so Vue handles navigation seamlessly without page reloads
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- Added a placeholder, assuming you have the actual image path -->
      <img src="../assets/sos1.svg" class="h-8 w-8" alt="Logo">
    </div>
    <ul class="flex gap-10 items-center justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
      <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
      
      <!-- Gallery Dropdown -->
      <li class="relative group cursor-pointer py-2">
        <span class="hover:text-yellow-300 flex items-center gap-1">
          Gallery <span class="text-xs">▼</span>
        </span>
        <!-- Added pt-4 to cover the gap, ensuring hover doesn't break -->
        <ul class="hidden group-hover:block absolute left-0 top-full bg-white text-green-900 rounded shadow-md py-2 w-48 z-50 pt-2">
          <li><RouterLink to="/gallery/photos" class="block px-4 py-2 hover:bg-green-100">Photos</RouterLink></li>
          <li><RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-100">Videos</RouterLink></li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group cursor-pointer py-2">
        <span class="hover:text-yellow-300 flex items-center gap-1">
          Destination <span class="text-xs">▼</span>
        </span>
        <ul class="hidden group-hover:block absolute left-0 top-full bg-white text-green-900 rounded shadow-md py-2 w-48 z-50 pt-2">
          <li><RouterLink to="/dest/northern" class="block px-4 py-2 hover:bg-green-100">Northern</RouterLink></li>
          <li><RouterLink to="/dest/southern" class="block px-4 py-2 hover:bg-green-100">Southern</RouterLink></li>
          <li><RouterLink to="/dest/eastern" class="block px-4 py-2 hover:bg-green-100">Eastern</RouterLink></li>
          <li><RouterLink to="/dest/western" class="block px-4 py-2 hover:bg-green-100">Western</RouterLink></li>
          <li><RouterLink to="/dest/kigali" class="block px-4 py-2 hover:bg-green-100">Kigali</RouterLink></li>
        </ul>
      </li>
      
      <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink></li>
    </ul>
  </nav>

  <main class="p-8">
    <RouterView />
  </main>
</template>
