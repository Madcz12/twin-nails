<script setup lang="ts">
import { onMounted } from 'vue'
import { whatsappLink, WHATSAPP_MSG_CONSULTAR_SERVICIO } from '../config/business'

// Importación de fotos del portafolio/galería real por categorías
import jelly1 from '../assets/jellytips/jellytips1.webp'
import jelly2 from '../assets/jellytips/jellytips2.webp'
import jelly3 from '../assets/jellytips/jellytips3.webp'
import jelly4 from '../assets/jellytips/jellytips4.webp'
import jelly5 from '../assets/jellytips/jellytips5.webp'

import semi1 from '../assets/semipermanent/semiperma1.webp'
import semi2 from '../assets/semipermanent/semiperma2.webp'
import semi3 from '../assets/semipermanent/semiperma3.webp'
import semi4 from '../assets/semipermanent/semiperma4.webp'
import semi5 from '../assets/semipermanent/semiperma5.webp'

const services = [
  {
    title: 'Acrílico',
    category: 'Sistemas de Uñas',
    description: 'Extensiones resistentes con acabado profesional y duradero.',
    icon: '💅',
  },
  {
    title: 'Polygel',
    category: 'Sistemas de Uñas',
    description: 'La mejor combinación de acrílico y gel. Ligero, flexible y natural.',
    icon: '✨',
  },
  {
    title: 'Jelly Tips',
    category: 'Sistemas de Uñas',
    description: 'Aplicación rápida con tips de gel semipermanente para un brillo inmediato.',
    icon: '🔮',
  },
  {
    title: 'Semipermanente',
    category: 'Esmaltado',
    description: 'Color vibrante que dura semanas sin desconcharse ni perder intensidad.',
    icon: '🎨',
  },
  {
    title: 'Tradicional',
    category: 'Esmaltado',
    description: 'Esmaltado clásico con secado rápido y acabado brillante o mate.',
    icon: '💎',
  },
  {
    title: 'Efectos en Tendencia',
    category: 'Esmaltado',
    description: 'Cat eye, chrome, aurora, holográficos y más efectos de moda.',
    icon: '🌈',
  },
  {
    title: 'Diseño a Mano Alzada',
    category: 'Nail Art',
    description: 'Arte único pintado a mano alzada por nuestras manicuristas expertas.',
    icon: '🖌️',
  },
  {
    title: 'Cristales y Encapsulados',
    category: 'Nail Art',
    description: 'Decoraciones con cristales strass, foils y encapsulados hermosos.',
    icon: '💫',
  },
  {
    title: 'Manicura SPA',
    category: 'Cuidado',
    description: 'Tratamiento completo con exfoliación, hidratación profunda y masaje.',
    icon: '🤲',
  },
  {
    title: 'Pedicura SPA',
    category: 'Cuidado',
    description: 'Cuidado integral para tus pies con exfoliación y sales relajantes.',
    icon: '🦶',
  },
]

const galleryCategories = [
  {
    name: 'Jelly Tips',
    description: 'Diseños modernos, ligeros y flexibles con tips de gel de cobertura completa.',
    images: [
      { src: jelly1, alt: 'Diseño Jelly Tips 1 - Twin Nails PZO' },
      { src: jelly2, alt: 'Diseño Jelly Tips 2 - Twin Nails PZO' },
      { src: jelly3, alt: 'Diseño Jelly Tips 3 - Twin Nails PZO' },
      { src: jelly4, alt: 'Diseño Jelly Tips 4 - Twin Nails PZO' },
      { src: jelly5, alt: 'Diseño Jelly Tips 5 - Twin Nails PZO' },
    ]
  },
  {
    name: 'Esmaltado Semipermanente',
    description: 'Color duradero y brillo impecable que mantiene tus uñas perfectas por semanas.',
    images: [
      { src: semi1, alt: 'Diseño Semipermanente 1 - Twin Nails PZO' },
      { src: semi2, alt: 'Diseño Semipermanente 2 - Twin Nails PZO' },
      { src: semi3, alt: 'Diseño Semipermanente 3 - Twin Nails PZO' },
      { src: semi4, alt: 'Diseño Semipermanente 4 - Twin Nails PZO' },
      { src: semi5, alt: 'Diseño Semipermanente 5 - Twin Nails PZO' },
    ]
  }
]

function getWhatsAppLink(service: string): string {
  return whatsappLink(WHATSAPP_MSG_CONSULTAR_SERVICIO(service))
}

// Configuración de Intersection Observer para animar el fade-in de las fotos al hacer scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          observer.unobserve(entry.target) // Deja de observar una vez animado
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Se activa un poco antes de que entre totalmente en pantalla
    }
  )

  const targets = document.querySelectorAll('.reveal-on-scroll')
  targets.forEach((target) => observer.observe(target))
})
</script>

<template>
  <section id="servicios" class="py-24 bg-bg relative overflow-hidden">
    <!-- Hojas decorativas sutiles en el fondo que emulan arte lineal orgánico de Twin Nails -->
    <div class="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-[0.02] select-none flex justify-between items-center px-8 z-0">
      <svg class="w-72 h-72 text-blanco transform -translate-x-16" fill="currentColor" viewBox="0 0 100 100">
        <path d="M10,90 C40,90 70,60 80,10 C50,40 20,80 10,90 Z" />
        <path d="M40,70 Q60,50 80,10" stroke="currentColor" stroke-width="1" fill="none" />
      </svg>
      <svg class="w-72 h-72 text-blanco transform translate-x-16 rotate-90" fill="currentColor" viewBox="0 0 100 100">
        <path d="M10,90 C40,90 70,60 80,10 C50,40 20,80 10,90 Z" />
        <path d="M40,70 Q60,50 80,10" stroke="currentColor" stroke-width="1" fill="none" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Encabezado de la Sección -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-5xl sm:text-6xl text-fuscia mb-4">Nuestros Servicios</h2>
        <p class="font-times text-gris-claro text-lg max-w-xl mx-auto">
          Todo lo que necesitás para lucir unas manos y pies impecables y saludables.
        </p>
      </div>

      <!-- Cuadrícula de Tarjetas de Servicios con padding y gap -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mb-24">
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-gris-oscuro border border-gris-medio/70 rounded-2xl p-6 hover:border-fuscia/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,28,111,0.06)] flex flex-col justify-between"
        >
          <div>
            <div class="text-3xl mb-4 shrink-0 flex items-center justify-center bg-bg w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-300">
              {{ service.icon }}
            </div>
            <span class="font-serif-brand text-[11px] italic tracking-widest text-fuscia mb-2 block">
              {{ service.category }}
            </span>
            <h3 class="font-serif-brand text-xl text-blanco font-bold mb-2">
              {{ service.title }}
            </h3>
            <p class="font-serif-brand text-gris-claro text-xs sm:text-sm leading-relaxed mb-4">
              {{ service.description }}
            </p>
          </div>
          
          <div>
            <a
              :href="getWhatsAppLink(service.title)"
              target="_blank"
              rel="noopener noreferrer"
              class="font-serif-brand inline-flex items-center gap-1.5 text-fuscia hover:text-fuscia-light text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Consultar
              <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Sección del Portafolio Integrado por Categorías -->
      <div class="border-t border-gris-medio/30 pt-16">
        <div class="text-center mb-16">
          <h3 class="font-heading text-4xl sm:text-5xl text-blanco mb-2">Nuestro Trabajo</h3>
          <p class="font-times text-gris-claro text-sm">Galería de diseños reales por categoría realizados en nuestro local</p>
        </div>

        <!-- Contenedor de las Categorías -->
        <div class="space-y-16">
          <div v-for="category in galleryCategories" :key="category.name" class="space-y-6">
            <!-- Encabezado de la Categoría -->
            <div class="px-2 md:px-0">
              <h4 class="font-serif-brand text-2xl text-fuscia font-bold">{{ category.name }}</h4>
              <p class="font-times text-gris-claro text-sm leading-relaxed mt-1">{{ category.description }}</p>
            </div>

            <!-- Contenedor del Grid Lineal Horizontal (scroll en móvil, 5 columnas en desktop) -->
            <div class="flex overflow-x-auto gap-6 pb-6 px-2 scrollbar-none snap-x md:grid md:grid-cols-5 md:gap-4 md:px-0">
              <div
                v-for="(img, imgIdx) in category.images"
                :key="img.src"
                class="reveal-on-scroll shrink-0 w-80 snap-center overflow-hidden border border-gris-medio/50 aspect-2/3 bg-gris-oscuro relative group cursor-pointer md:w-auto"
                :style="{ transitionDelay: `${imgIdx * 100}ms` }"
              >
                <!-- Imagen con Zoom en Hover -->
                <img
                  :src="img.src"
                  :alt="img.alt"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <!-- Gradiente de fondo en hover con el logo y un tag de calidad -->
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span class="text-xs uppercase tracking-widest text-fuscia font-bold mb-1">
                    Twin Nails PZO
                  </span>
                  <p class="text-blanco text-sm font-medium">
                    {{ category.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
