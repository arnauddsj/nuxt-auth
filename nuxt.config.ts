// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },
  sourcemap: {
    server: true,
    client: true
  },
  imports: {
    dirs: ['stores']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_global.scss" as *;'
        }
      }
    }
  },

})
