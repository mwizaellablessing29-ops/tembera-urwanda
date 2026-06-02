<script setup>
import { labels } from '../stores/language.js'
</script>

<template>
  <section class="bg-white text-green-900">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div class="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-yellow-500">About Tembera Urwanda</p>
          <h1 class="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            {{ labels.aboutHeading }}
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-green-700">
            {{ labels.aboutLead }}
          </p>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <router-link to="/services" class="inline-flex rounded-full bg-green-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-green-900">
              {{ labels.services }}
            </router-link>
            <router-link to="/contact" class="inline-flex rounded-full border border-green-900 bg-white px-8 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-900 hover:text-white">
              {{ labels.contact }}
            </router-link>
          </div>
        </div>

        <div class="overflow-hidden rounded-[2rem] bg-green-100 shadow-2xl">
          <img src="../assets/Lake Kivu in Rwanda.jpg" alt="Rwanda travel landscape" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-semibold text-green-900">Easy planning</h2>
          <p class="mt-3 text-sm leading-6 text-green-700">Clear travel advice and a simple overview for your first Rwanda trip.</p>
        </div>
        <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-semibold text-green-900">Friendly guides</h2>
          <p class="mt-3 text-sm leading-6 text-green-700">Local knowledge that helps you explore parks, cities, and cultural sites comfortably.</p>
        </div>
        <div class="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-xl font-semibold text-green-900">Beginner support</h2>
          <p class="mt-3 text-sm leading-6 text-green-700">Helpful tips, recommended routes, and contact details to keep your travel stress-free.</p>
        </div>
      </div>
    </div>
  </section>
</template>