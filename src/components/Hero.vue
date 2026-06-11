<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { whatsappLink, WHATSAPP_MSG_AGENDAR } from '../config/business'

const WHATSAPP_LINK = whatsappLink(WHATSAPP_MSG_AGENDAR)

const backgroundImages = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop'
]

const currentIndex = ref(0)
let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % backgroundImages.length
  }, 5000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    <!-- Background Slideshow -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(img, index) in backgroundImages"
        :key="img"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
      <!-- Capa de superposición para garantizar legibilidad y alto contraste del texto -->
      <div class="absolute inset-0 bg-black/65 sm:bg-black/60 z-1"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col items-center">
      <h1 class="font-heading text-5xl sm:text-6xl lg:text-7xl text-fuscia mb-6 leading-tight drop-shadow-lg">
        Resalta tu estilo con las mejores uñas en Puerto Ordaz
      </h1>
      <p class="font-times text-xl sm:text-2xl text-white mb-8 max-w-2xl leading-relaxed drop-shadow-md">
        Diseños únicos, bioseguridad y atención personalizada para consentir tus manos. ¡Luce un acabado impecable hoy mismo!
      </p>
      <a
        :href="WHATSAPP_LINK"
        target="_blank"
        rel="noopener noreferrer"
        class="font-times inline-flex items-center gap-3 bg-fuscia hover:bg-fuscia-light text-blanco font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,28,111,0.4)]"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Agendar Cita por WhatsApp
      </a>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
      <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
