<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref('overview')

function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-72 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>
      <nav class="flex-1 p-4 space-y-2">
        <button
          @click="activeMenu = 'overview'"
          :class="activeMenu === 'overview' ? 'bg-green-700 w-full text-left px-4 py-3 rounded mb-2' : 'w-full text-left px-4 py-3 rounded mb-2'"
        >
          Overview
        </button>
        <button
          @click="activeMenu = 'booking'"
          :class="activeMenu === 'booking' ? 'bg-green-700 w-full text-left px-4 py-3 rounded mb-2' : 'w-full text-left px-4 py-3 rounded mb-2'"
        >
          Booking
        </button>
        <button
          @click="activeMenu = 'users'"
          :class="activeMenu === 'users' ? 'bg-green-700 w-full text-left px-4 py-3 rounded mb-2' : 'w-full text-left px-4 py-3 rounded mb-2'"
        >
          Users
        </button>
      </nav>
      <div class="p-4 border-t border-green-700">
        <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 px-4 py-3 rounded">
          Logout
        </button>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto p-8 bg-slate-50">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
      <div class="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
        <h2 class="text-2xl font-semibold mb-4">
          {{ activeMenu === 'overview' ? 'Overview' : activeMenu === 'booking' ? 'Booking' : 'Users' }}
        </h2>
        <p class="text-gray-700 leading-7 mb-6">
          {{ activeMenu === 'overview' ? 'Overview content goes here.' : activeMenu === 'booking' ? 'Booking content goes here.' : 'Users content goes here.' }}
        </p>
        <div v-if="activeMenu === 'overview'" class="space-y-4">
          <div class="rounded-2xl bg-slate-50 p-6 border border-gray-100">
            <h3 class="font-semibold text-lg">Summary</h3>
            <p class="text-gray-600">This overview shows key dashboard metrics and summary details in a clean white panel.</p>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl bg-green-50 p-5 border border-green-100">
              <p class="text-sm text-gray-500">Active Users</p>
              <p class="mt-2 text-2xl font-bold text-green-800">128</p>
            </div>
            <div class="rounded-2xl bg-blue-50 p-5 border border-blue-100">
              <p class="text-sm text-gray-500">New Bookings</p>
              <p class="mt-2 text-2xl font-bold text-blue-800">24</p>
            </div>
            <div class="rounded-2xl bg-yellow-50 p-5 border border-yellow-100">
              <p class="text-sm text-gray-500">Open Tickets</p>
              <p class="mt-2 text-2xl font-bold text-yellow-800">8</p>
            </div>
          </div>
        </div>
        <div v-else-if="activeMenu === 'booking'" class="text-gray-700">
          <p>Booking content goes here.</p>
        </div>
        <div v-else-if="activeMenu === 'users'" class="text-gray-700">
          <p>Users content goes here.</p>
        </div>
      </div>
    </main>
  </div>
</template>