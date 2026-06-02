<script setup>
import { ref } from 'vue'
import { labels } from '../stores/language.js'

const email = ref('')
const password = ref('')

const onSubmit = () => {
  console.log('Signing in with', email.value)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">{{ labels.login }}</h2>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="Please enter your email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Please enter your password"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold"
        >
          Sign In
        </button>
      </form>
      <p class="text-center text-sm text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-green-700 hover:underline">{{ labels.register }}</router-link>
      </p>
    </div>
  </div>
</template>