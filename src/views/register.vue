<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const age = ref('')
const gender = ref('')
const password = ref('')
const phone = ref('')

const onRegister = () => {
  console.log('Registering user', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    age: age.value,
    gender: gender.value,
    phone: phone.value,
  })
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100 px-4 py-10">
    <div class="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">
      <h1 class="text-3xl font-bold text-green-900 mb-6">Create your account</h1>
      <form class="grid gap-4" @submit.prevent="onRegister">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block text-sm font-medium text-gray-700">
            First Name
            <input
              v-model="firstName"
              type="text"
              placeholder="First name"
              required
              class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </label>
          <label class="block text-sm font-medium text-gray-700">
            Last Name
            <input
              v-model="lastName"
              type="text"
              placeholder="Last name"
              required
              class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </label>
        </div>

        <label class="block text-sm font-medium text-gray-700">
          Email Address
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </label>

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block text-sm font-medium text-gray-700">
            Age
            <input
              v-model="age"
              type="number"
              min="10"
              placeholder="Age"
              required
              class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </label>
          <label class="block text-sm font-medium text-gray-700">
            Gender
            <select
              v-model="gender"
              required
              class="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            >
              <option value="" disabled>Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <label class="block text-sm font-medium text-gray-700">
          Password
          <input
            v-model="password"
            type="password"
            placeholder="Create a password"
            required
            class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </label>

        <label class="block text-sm font-medium text-gray-700">
          Phone Number
          <input
            v-model="phone"
            type="tel"
            placeholder="+250 7XX XXX XXX"
            required
            class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </label>

        <button
          type="submit"
          class="mt-2 w-full rounded-full bg-green-800 px-6 py-3 text-white transition hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
