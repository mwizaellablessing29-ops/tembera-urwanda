

<script setup>
import sosImage from '../assets/sos.svg'
// Bring in RouterLink so Vue handles navigation seamlessly without page reloads
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img src="../assets/images/hero.png" class="h-8 w-8" alt="Logo">
    
    </div>

    <ul class="flex gap-10 items-center justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
      
      <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>

      <li class="relative group cursor-pointer py-2"> <span class="hover:text-yellow-300 flex items-center gap-1">
    Gallery <span class="text-xs">▼</span>
  </span>
  <ul class="hidden group-hover:block absolute left-0 top-full bg-white text-green-900 rounded shadow-md py-2 w-48 pt-2 z-50">
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Photos</RouterLink></li>
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Videos</RouterLink></li>
  </ul>
</li>

<li class="relative group cursor-pointer py-2"> <span class="hover:text-yellow-300 flex items-center gap-1">
    Destination <span class="text-xs">▼</span>
  </span>
  <ul class="hidden group-hover:block absolute left-0 top-full bg-white text-green-900 rounded shadow-md py-2 w-48 pt-2 z-50">
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Northern</RouterLink></li>
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Southern</RouterLink></li>
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Eastern</RouterLink></li>
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Western</RouterLink></li>
    <li><RouterLink to="#" class="block px-4 py-2 hover:bg-green-100">Kigali</RouterLink></li>
  </ul>
</li>

      <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink></li>
    </ul>
  </nav>
  <main class="p-8">
    <RouterView />
  </main>
</template>
