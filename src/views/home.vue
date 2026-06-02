<script setup>
import { labels } from '../stores/language.js'
</script>

<template>
 <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-black"
 style="background-image: url('/src/assets/Lake Kivu in Rwanda.jpg');">
  <div class="bg-black/40 bg-opacity-50 absolute inset-0"></div>
  <div class="relative text-center px-4">
    <h1 class="text-5xl font-bold mb-4">{{ labels.homeTitle }}</h1>
    <p class="text-xl mb-8 text-green-300">{{ labels.homeSubtitle }}</p>
  </div>
</section>

<section class="bg-white text-green-900 py-16">
  <div class="mx-auto max-w-6xl px-6 md:px-12">
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-green-900">{{ labels.discover }}</p>
        <h2 class="mt-4 text-2xl font-semibold text-green-900">{{ labels.nature }}</h2>
        <p class="mt-3 text-sm leading-6 text-green-700">Experience volcanoes, lakes, and wildlife in Rwanda’s scenic national parks.</p>
      </div>
      <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-green-900">{{ labels.travelTips }}</p>
        <h2 class="mt-4 text-2xl font-semibold text-green-900">Local guidance</h2>
        <p class="mt-3 text-sm leading-6 text-green-700">Get practical advice for safe, comfortable, and enjoyable travel in Rwanda.</p>
      </div>
      <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-green-900">{{ labels.planTrip }}</p>
        <h2 class="mt-4 text-2xl font-semibold text-green-900">Easy itineraries</h2>
        <p class="mt-3 text-sm leading-6 text-green-700">Choose from beginner-friendly routes that let you see the best of Rwanda in a few days.</p>
      </div>
    </div>
  </div>
</section>

</template>