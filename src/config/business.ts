/**
 * Configuración centralizada del negocio.
 * Cambiar valores acá se propaga a toda la landing.
 */

// ⚠️ PLACEHOLDER: este número es del desarrollador.
// Reemplazar por el número real de la dueña antes de producción.
// Formato: código de país + número, solo dígitos, sin "+".
export const WHATSAPP_NUMBER = '584140985433'

// Teléfono legible (para mostrar en UI y JSON-LD).
export const WHATSAPP_PHONE_DISPLAY = `+${WHATSAPP_NUMBER}`

// Construye un link wa.me con mensaje pre-llenado.
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Mensajes pre-armados por sección.
export const WHATSAPP_MSG_GENERAL = 'Hola Twin Nails, quiero información'
export const WHATSAPP_MSG_AGENDAR = 'Hola Twin Nails, quiero agendar una cita'
export const WHATSAPP_MSG_PROMO_JELLY =
  'Hola Twin Nails, quiero la promo de Jelly Tips'
export const WHATSAPP_MSG_CONSULTAR_SERVICIO = (service: string) =>
  `Hola Twin Nails, quiero consultar por ${service}`

// Redes sociales.
export const INSTAGRAM_URL = 'https://www.instagram.com/twin_nails_pzo'
export const TIKTOK_URL = 'https://www.tiktok.com/@twin_nails_pzo'

// Datos de contacto y ubicación.
export const ADDRESS_LINE =
  '76C9+XPR, Paseo Caroni VII, Av. P.º Caroni, Ciudad Guayana 8050, Bolívar'

export const SCHEDULE = [
  { day: 'Lunes a Viernes', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sábado', hours: '9:00 AM - 4:00 PM' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const
