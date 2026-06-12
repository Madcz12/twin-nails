<script setup lang="ts">
import postsData from '../data/instagram-posts.json'
import { INSTAGRAM_URL } from '../config/business'

const instagramHandle = INSTAGRAM_URL.split('/').pop() // 'twin_nails_pzo'

interface Post {
  url: string
  id: string
}

/**
 * Extrae el ID del post desde URLs de Instagram (post o reel).
 * Ej: https://www.instagram.com/p/CxYz123/ → CxYz123
 */
function extractPostId(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/)
  return match ? match[1] : null
}

const posts: Post[] = postsData.posts
  .map((url) => {
    const id = extractPostId(url)
    return id ? { url, id } : null
  })
  .filter((p): p is Post => p !== null)
</script>

<template>
  <section id="posts" class="py-20 bg-bg relative overflow-hidden">
    <!-- Fondo decorativo sutil -->
    <div
      class="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-[0.02] select-none flex justify-between items-center px-8 z-0"
    >
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
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl sm:text-5xl text-fuscia mb-4">Posts</h2>
        <p class="font-times text-gris-claro text-lg max-w-xl mx-auto">
          Nuestros últimos trabajos en Instagram
        </p>
      </div>

      <!--
        ═══════════════════════════════════════════════════
        CÓMO ACTUALIZAR LOS POSTS:
        Andá a tu perfil de Instagram, copiá el link de cada
        post nuevo y pegalo en src/data/instagram-posts.json
        ═══════════════════════════════════════════════════
      -->

      <!-- Grilla de posts -->
      <div
        v-if="posts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-gris-oscuro border border-gris-medio/70 hover:border-fuscia/40 transition-all duration-300 overflow-hidden"
        >
          <iframe
            :src="`https://www.instagram.com/p/${post.id}/embed/`"
            class="w-full block"
            style="min-height: 500px; border: none; background: #1a1a1a;"
            scrolling="no"
            allowtransparency="true"
            :title="`Post de Instagram @${instagramHandle}`"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Estado vacío -->
      <div
        v-else
        class="max-w-lg mx-auto text-center bg-gris-oscuro border border-gris-medio rounded-2xl p-10"
      >
        <svg class="w-12 h-12 text-fuscia mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        <p class="font-times text-gris-claro text-base mb-2">Todavía no hay posts cargados</p>
        <p class="font-times text-gris-claro/60 text-sm">
          Agregá los links en <code class="text-fuscia bg-gris-medio px-1.5 py-0.5 rounded text-xs">src/data/instagram-posts.json</code>
        </p>
      </div>

      <!-- CTA -->
      <div class="text-center mt-10">
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-fuscia hover:bg-fuscia-light text-blanco font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Seguinos en @{{ instagramHandle }}
        </a>
      </div>
    </div>
  </section>
</template>
