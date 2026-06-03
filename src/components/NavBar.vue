<script setup>
import { computed, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { currentLanguage, setLanguage, labels } from '../stores/language.js'

const isGalleryOpen = ref(false)
const isDestinationOpen = ref(false)
const isLanguageOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div class="flex items-center gap-3">
        <img src="/favicon.svg" class="h-8 w-8" alt="Logo" />
      </div>

      <ul class="flex gap-10 items-center justify-end font-medium">
        <li>
          <RouterLink to="/" class="nav-link">{{ labels.home }}</RouterLink>
        </li>

        <li>
          <RouterLink to="/about" class="nav-link">{{ labels.about }}</RouterLink>
        </li>

        <li>
          <RouterLink to="/services" class="nav-link">{{ labels.services }}</RouterLink>
        </li>

        <li
          class="relative cursor-pointer py-2"
          @mouseenter="isGalleryOpen = true"
          @mouseleave="isGalleryOpen = false"
        >
          <span class="nav-link">
            {{ labels.gallery }}
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
                <RouterLink to="/gallery/photos" class="dropdown-link">{{ labels.photos }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/gallery/videos" class="dropdown-link">{{ labels.videos }}</RouterLink>
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
            {{ labels.destination }}
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
                <RouterLink to="/dest/northern" class="dropdown-link">{{ labels.northern }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/southern" class="dropdown-link">{{ labels.southern }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/eastern" class="dropdown-link">{{ labels.eastern }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/western" class="dropdown-link">{{ labels.western }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/dest/kigali" class="dropdown-link">{{ labels.kigali }}</RouterLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <RouterLink to="/contact" class="nav-link">{{ labels.contact }}</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/login"
            class="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            {{ labels.login }}
          </RouterLink>
        </li>
      </ul>

      <div class="relative text-sm text-white" @mouseenter="isLanguageOpen = true" @mouseleave="isLanguageOpen = false">
        <span
          class="nav-link cursor-pointer"
          @click="isLanguageOpen = !isLanguageOpen"
          @keyup.enter="isLanguageOpen = !isLanguageOpen"
          @keyup.esc="isLanguageOpen = false"
          tabindex="0"
          role="button"
          :aria-expanded="isLanguageOpen"
        >
          {{ labels.language }}
          <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180 text-yellow-300': isLanguageOpen }">▼</span>
        </span>

        <div v-if="isLanguageOpen" class="absolute right-0 mt-2 w-28 z-50">
          <ul class="bg-white text-green-900 rounded shadow-lg py-2 border border-gray-100">
            <li>
              <button
                type="button"
                @click="setLanguage('EN')"
                class="dropdown-link w-full text-left"
              >
                EN
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="setLanguage('FR')"
                class="dropdown-link w-full text-left"
              >
                FR
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="setLanguage('RW')"
                class="dropdown-link w-full text-left"
              >
                RW
              </button>
            </li>
          </ul>
        </div>
      </div>
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

