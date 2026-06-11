<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { WHATSAPP_PHONE_DISPLAY, INSTAGRAM_URL, TIKTOK_URL } from './config/business'

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: 'Twin Nails PZO',
  description:
    'Estética de uñas en Puerto Ordaz. Acrílico, Polygel, Jelly Tips, Nail Art, Manicura y Pedicura SPA.',
  url: 'https://twinnailspzo.com',
  telephone: WHATSAPP_PHONE_DISPLAY,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '76C9+XPR, Paseo Caroni VII, Av. P.º Caroni',
    addressLocality: 'Ciudad Guayana',
    addressRegion: 'Bolívar',
    postalCode: '8050',
    addressCountry: 'VE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.37,
    longitude: -62.62,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [INSTAGRAM_URL, TIKTOK_URL],
}

let scriptEl: HTMLScriptElement | null = null

onMounted(() => {
  scriptEl = document.createElement('script')
  scriptEl.type = 'application/ld+json'
  scriptEl.textContent = JSON.stringify(ldJson)
  document.head.appendChild(scriptEl)
})

onUnmounted(() => {
  scriptEl?.remove()
})
</script>

<template>
  <div class="min-h-screen bg-bg">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
