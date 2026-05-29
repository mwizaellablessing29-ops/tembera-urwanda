<template>
  <section class="bg-green-50 text-green-900">
    <div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div class="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] items-start">
        <div class="rounded-[2rem] bg-white p-8 shadow-2xl border border-green-100">
          <p class="text-sm uppercase tracking-[0.35em] text-yellow-500">Get in touch</p>
          <h1 class="mt-4 text-4xl font-extrabold leading-tight">Contact our travel team</h1>
          <p class="mt-5 text-base leading-8 text-green-700">
            Need travel help, itinerary advice, or local recommendations? Send us a message and our team will reply promptly.
          </p>
          <div class="mt-8 grid gap-4">
            <div class="rounded-3xl border border-green-100 bg-green-50 p-6">
              <p class="text-sm font-semibold text-green-900">Email</p>
              <p class="mt-2 text-sm text-green-700">info@visitrwanda.rw</p>
            </div>
            <div class="rounded-3xl border border-green-100 bg-green-50 p-6">
              <p class="text-sm font-semibold text-green-900">Phone</p>
              <p class="mt-2 text-sm text-green-700">+250 123 456 789</p>
            </div>
            <div class="rounded-3xl border border-green-100 bg-green-50 p-6">
              <p class="text-sm font-semibold text-green-900">Location</p>
              <p class="mt-2 text-sm text-green-700">Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] bg-white p-8 shadow-2xl border border-green-100">
          <p class="text-sm uppercase tracking-[0.35em] text-yellow-500">Send a message</p>
          <h2 class="mt-4 text-2xl font-semibold text-green-900">We’re happy to help.</h2>
          <form class="mt-6 space-y-5">
            <label class="block text-sm font-medium text-green-900">
              Name
              <input type="text" placeholder="Your name" class="mt-2 w-full rounded-3xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </label>
            <label class="block text-sm font-medium text-green-900">
              Email
              <input type="email" placeholder="you@example.com" class="mt-2 w-full rounded-3xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </label>
            <label class="block text-sm font-medium text-green-900">
              Message
              <textarea rows="5" placeholder="Tell us about your trip" class="mt-2 w-full rounded-3xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"></textarea>
            </label>
            <button type="button" class="inline-flex w-full justify-center rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-green-900">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>