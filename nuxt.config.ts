import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "maplibre-gl",
      ],
    },
    server: {
      watch: {
        ignored: ["./docker-data/*"],
      },
    },
  },
  app: {
    head: {
      title: "Pin Path",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "Pin Path - Your Journey, Beautifully Mapped" },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxtjs/color-mode", "@nuxt/icon", "@vee-validate/nuxt", "nuxt-maplibre", "nuxt-csurf", "@sentry/nuxt/module", "nuxt-easy-lightbox"],

  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    dataValue: "theme",
  },
  sourcemap: {
    client: "hidden",
  },
});
