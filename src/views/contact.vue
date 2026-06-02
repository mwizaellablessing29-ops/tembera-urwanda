<script setup>
import { labels } from '../stores/language.js'
</script>

<template>
  <section class="bg-gradient-to-b from-green-50 to-green-100 text-green-900 min-h-screen">
    <div class="bg-green-900 text-white py-16">
      <div class="mx-auto max-w-6xl px-6 md:px-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold">{{ labels.contact }}</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-tight">{{ labels.contactHeading }}</h1>
        <p class="mt-5 text-lg leading-8 text-gray-100">
          {{ labels.contactLead }}
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div class="grid gap-6 md:grid-cols-4 mb-12">
        <div class="rounded-2xl bg-white p-6 shadow-lg border-t-4 border-yellow-400 text-center">
          <div class="text-4xl mb-4">📧</div>
          <p class="text-sm font-semibold text-gray-600 uppercase">Email</p>
          <p class="mt-3 text-lg font-bold text-green-900">info@temberaurwanda.rw</p>
          <p class="mt-1 text-sm text-gray-600">Response in 24 hours</p>
        </div>
        <div class="rounded-2xl bg-white p-6 shadow-lg border-t-4 border-yellow-400 text-center">
          <div class="text-4xl mb-4">📞</div>
          <p class="text-sm font-semibold text-gray-600 uppercase">Phone</p>
          <p class="mt-3 text-lg font-bold text-green-900">+250 788 123 456</p>
          <p class="mt-1 text-sm text-gray-600">Available Mon-Fri</p>
        </div>
        <div class="rounded-2xl bg-white p-6 shadow-lg border-t-4 border-yellow-400 text-center">
          <div class="text-4xl mb-4">📍</div>
          <p class="text-sm font-semibold text-gray-600 uppercase">Location</p>
          <p class="mt-3 text-lg font-bold text-green-900">Kigali, Rwanda</p>
          <p class="mt-1 text-sm text-gray-600">East Africa</p>
        </div>
        <div class="rounded-2xl bg-white p-6 shadow-lg border-t-4 border-yellow-400 text-center">
          <div class="text-4xl mb-4">🕒</div>
          <p class="text-sm font-semibold text-gray-600 uppercase">Hours</p>
          <p class="mt-3 text-lg font-bold text-green-900">24/7 support</p>
          <p class="mt-1 text-sm text-gray-600">Emergency assistance available</p>
        </div>
      </div>

      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.95fr] items-start">
        <div class="rounded-[2rem] bg-white p-8 shadow-2xl border border-green-100">
          <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Quick Contact</p>
          <h2 class="mt-4 text-3xl font-extrabold text-green-900">Send us a Message</h2>
          <p class="mt-3 text-green-700">Tell us about your trip plans and we’ll respond with a custom travel recommendation.</p>

          <form class="mt-8 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="block text-sm font-medium text-green-900">
                First Name
                <input type="text" placeholder="John" class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" required />
              </label>
              <label class="block text-sm font-medium text-green-900">
                Last Name
                <input type="text" placeholder="Doe" class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" required />
              </label>
            </div>

            <label class="block text-sm font-medium text-green-900">
              Email Address
              <input type="email" placeholder="you@example.com" class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" required />
            </label>

            <label class="block text-sm font-medium text-green-900">
              Phone Number
              <input type="tel" placeholder="+250 7XX XXX XXX" class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </label>

            <label class="block text-sm font-medium text-green-900">
              Trip Type
              <select class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200">
                <option>Select your interest</option>
                <option>Gorilla Trekking</option>
                <option>Safari Adventure</option>
                <option>Rainforest Exploration</option>
                <option>Lake Relaxation</option>
                <option>City Tour</option>
                <option>Custom Itinerary</option>
              </select>
            </label>

            <label class="block text-sm font-medium text-green-900">
              Message
              <textarea rows="6" placeholder="Tell us about your dream Rwanda trip..." class="mt-2 w-full rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" required></textarea>
            </label>

            <button type="submit" class="w-full rounded-xl bg-green-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-green-900 duration-300">
              Send Message
            </button>
            <p class="text-xs text-gray-500 text-center">We'll reply within one business day.</p>
          </form>
        </div>

        <div class="space-y-6">
          <div class="rounded-2xl bg-white p-8 shadow-lg border border-green-100">
            <h3 class="text-xl font-bold text-green-900 mb-4">Why Contact Us?</h3>
            <ul class="space-y-3 text-green-700">
              <li class="flex items-start gap-3"><span class="text-yellow-500">✓</span>Expert local guides and support.</li>
              <li class="flex items-start gap-3"><span class="text-yellow-500">✓</span>Best prices with transparent packages.</li>
              <li class="flex items-start gap-3"><span class="text-yellow-500">✓</span>Safe, reliable transportation and logistics.</li>
              <li class="flex items-start gap-3"><span class="text-yellow-500">✓</span>Custom trips designed around your goals.</li>
            </ul>
          </div>

          <div class="rounded-2xl bg-green-900 text-white p-8 shadow-lg">
            <h3 class="text-xl font-bold mb-4">Office Hours</h3>
            <p class="text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p class="text-sm mt-2">Saturday: 9:00 AM - 4:00 PM</p>
            <p class="text-sm mt-2">Sunday: Emergency support only</p>
            <p class="text-sm mt-4 text-yellow-300">24/7 emergency assistance available</p>
          </div>

          <div class="rounded-2xl bg-white p-8 shadow-lg border border-green-100">
            <h3 class="text-xl font-bold text-green-900 mb-4">Follow Us</h3>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">f</a>
              <a href="#" class="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition">📷</a>
              <a href="#" class="w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition">𝕏</a>
              <a href="#" class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">▶</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>