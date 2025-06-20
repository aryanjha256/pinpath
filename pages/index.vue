<!-- <script lang="ts" setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Pin Path
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple travel log app. Add locations, photos, and notes to create a digital journal of your journeys.
        </p>
        <AuthButton v-if="!authStore.user" />
        <NuxtLink
          v-else
          to="/dashboard"
          class="btn btn-primary"
        >
          Start Logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template> -->

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const features = [
  {
    icon: "📍",
    title: "Track Locations",
    description: "Pin your favorite destinations and create a visual map of your adventures",
  },
  {
    icon: "📸",
    title: "Capture Memories",
    description: "Upload photos and add rich descriptions to preserve every moment",
  },
  {
    icon: "📝",
    title: "Travel Journal",
    description: "Write detailed notes and stories about your experiences",
  },
  {
    icon: "🗺️",
    title: "Interactive Maps",
    description: "View all your travels on beautiful, interactive world maps",
  },
];

const testimonials = [
  {
    text: "Pin Path helped me organize years of travel memories in one beautiful place!",
    author: "Sarah K.",
    location: "Digital Nomad",
  },
  {
    text: "I love how easy it is to add new destinations and photos. Perfect for travel lovers!",
    author: "Mike R.",
    location: "Adventure Photographer",
  },
];
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
    <!-- Hero Section -->
    <div class="hero min-h-screen relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 text-6xl animate-bounce delay-100">
          🌍
        </div>
        <div class="absolute top-40 right-20 text-4xl animate-bounce delay-300">
          ✈️
        </div>
        <div class="absolute bottom-40 left-20 text-5xl animate-bounce delay-500">
          🏔️
        </div>
        <div class="absolute bottom-20 right-40 text-4xl animate-bounce delay-700">
          🏖️
        </div>
      </div>

      <div class="hero-content text-center z-10">
        <div class="max-w-4xl" :class="{ 'animate-fade-in-up opacity-100': isVisible, 'opacity-0': !isVisible }">
          <div class="mb-8">
            <h1 class="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Pin Path
            </h1>
            <div class="text-xl md:text-2xl text-base-content/80 mb-2">
              🌟 Your Journey, Beautifully Mapped 🌟
            </div>
          </div>

          <p class="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-base-content/70">
            Transform your travel experiences into a stunning digital journal.
            <span class="text-primary font-semibold">Pin locations</span>,
            <span class="text-secondary font-semibold">capture memories</span>, and
            <span class="text-accent font-semibold">share your adventures</span>
            with the world.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AuthButton v-if="!authStore.user" class="btn-lg px-8" />
            <NuxtLink
              v-else
              to="/dashboard"
              class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Start Your Journey
            </NuxtLink>
            <button class="btn btn-outline btn-lg px-8 hover:bg-base-200">
              📖 View Demo
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div class="stat-item">
              <div class="text-2xl font-bold text-primary">
                1K+
              </div>
              <div class="text-sm text-base-content/60">
                Destinations
              </div>
            </div>
            <div class="stat-item">
              <div class="text-2xl font-bold text-secondary">
                5K+
              </div>
              <div class="text-sm text-base-content/60">
                Photos
              </div>
            </div>
            <div class="stat-item">
              <div class="text-2xl font-bold text-accent">
                500+
              </div>
              <div class="text-sm text-base-content/60">
                Travelers
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-20 bg-base-200/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span class="text-primary">Document Your Journey</span>
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed specifically for modern travelers who want to preserve and share their adventures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body text-center">
              <div class="text-4xl mb-4">
                {{ feature.icon }}
              </div>
              <h3 class="card-title justify-center text-lg mb-2">
                {{ feature.title }}
              </h3>
              <p class="text-base-content/70 text-sm">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Start Mapping in
            <span class="text-secondary">3 Simple Steps</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 class="text-xl font-semibold mb-2">
              Sign Up & Start
            </h3>
            <p class="text-base-content/70">
              Create your account and set up your travel profile in seconds
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 class="text-xl font-semibold mb-2">
              Pin & Capture
            </h3>
            <p class="text-base-content/70">
              Add locations, upload photos, and write about your experiences
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 class="text-xl font-semibold mb-2">
              Share & Explore
            </h3>
            <p class="text-base-content/70">
              Share your journey with friends and discover new destinations
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-base-200/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span class="text-primary">Travelers Worldwide</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card bg-base-100 shadow-lg"
          >
            <div class="card-body">
              <div class="text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p class="text-base-content/80 italic mb-4">
                "{{ testimonial.text }}"
              </p>
              <div class="text-sm">
                <div class="font-semibold">
                  {{ testimonial.author }}
                </div>
                <div class="text-base-content/60">
                  {{ testimonial.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-2xl mx-auto text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Join thousands of travelers who are already documenting their adventures with Pin Path.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthButton v-if="!authStore.user" class="btn-lg bg-white text-primary hover:bg-base-100 border-0" />
            <NuxtLink
              v-else
              to="/dashboard"
              class="btn btn-lg bg-white text-primary hover:bg-base-100 border-0"
            >
              🌟 Begin Your Adventure
            </NuxtLink>
          </div>

          <p class="text-sm mt-4 opacity-75">
            Free to start • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: scale(1.1);
}
</style>
