<script lang="ts" setup>
// const authStore = useAuthStore();
// await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <h1>Hello World</h1>
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>