<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-12">
    <!-- Main container for the 4 sections in a row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

            <!-- Section 2: Big Text (Tembera Urwanda) -->
      <div class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h3 class="text-4xl font-extrabold tracking-tighter text-white">
          TEMBERA<br />URWANDA
        </h3>
        <p class="text-xs text-green-200 mt-2">Discover the Land of a Thousand Hills</p>
      </div>

      
      <!-- Section 1: Links (Site Map) -->
      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider">Quick links</h4>
        <ul class="space-y-2 text-sm text-green-100">
  <li>
    <router-link to="/" class="hover:text-white" active-class="font-bold">Home</router-link>
  </li>
  <li>
    <router-link to="/about" class="hover:text-white" active-class="font-bold">About Rwanda</router-link>
  </li>
  <li>
    <router-link to="/services" class="hover:text-white" active-class="font-bold">Services</router-link>
  </li>
  <li>
    <router-link to="/contact" class="hover:text-white" active-class="font-bold">Contacts</router-link>
  </li>
</ul>

      </div>

      <!-- Section 3: Destinations -->
      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider">Destinations</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li><a href="#" class="hover:text-white">Volcanoes National Park</a></li>
          <li><a href="#" class="hover:text-white">Nyungwe National Park</a></li>
          <li><a href="#" class="hover:text-white">Akagera National Park</a></li>
          <li><a href="#" class="hover:text-white">Lake Kivu</a></li>
        </ul>
      </div>

      <!-- Section 4: Contacts -->
      <div>
        <h4 class="font-bold text-lg mb-4 uppercase tracking-wider">Contact</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li>Kigali, Rwanda</li>
          <li>Email: info@visitrwanda.rw</li>
          <li>Phone: +250 123 456 789</li>
        </ul>
      </div>
    </div>

    <!-- Optional: Bottom Copyright Line -->
    <div class="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-200">
      &copy; 2026 Tembera Urwanda. All rights reserved.
    </div>
  </footer>
</template>