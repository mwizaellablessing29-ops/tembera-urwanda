<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

      <div class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h3 class="text-4xl font-extrabold tracking-tighter text-white">
          TEMBERA<br />URWANDA
        </h3>
        <p class="text-xs text-green-200 mt-2">Discover the Land of a Thousand Hills</p>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Quick links</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li>
            <router-link to="/" class="transition-colors duration-200 hover:text-yellow-300" active-class="font-bold">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="transition-colors duration-200 hover:text-yellow-300" active-class="font-bold">About Rwanda</router-link>
          </li>
          <li>
            <router-link to="/services" class="transition-colors duration-200 hover:text-yellow-300" active-class="font-bold">Services</router-link>
          </li>
          <li>
            <router-link to="/contact" class="transition-colors duration-200 hover:text-yellow-300" active-class="font-bold">Contacts</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Destinations</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li><a href="#" class="transition-colors duration-200 hover:text-yellow-300">Volcanoes National Park</a></li>
          <li><a href="#" class="transition-colors duration-200 hover:text-yellow-300">Nyungwe National Park</a></li>
          <li><a href="#" class="transition-colors duration-200 hover:text-yellow-300">Akagera National Park</a></li>
          <li><a href="#" class="transition-colors duration-200 hover:text-yellow-300">Lake Kivu</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Contact</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li class="transition-colors duration-200 hover:text-yellow-300 cursor-pointer">Kigali, Rwanda</li>
          <li class="transition-colors duration-200 hover:text-yellow-300 cursor-pointer">Email: info@visitrwanda.rw</li>
          <li class="transition-colors duration-200 hover:text-yellow-300 cursor-pointer">Phone: +250 123 456 789</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-200">
      &copy; 2026 Tembera Urwanda. All rights reserved.
    </div>
  </footer>
</template>