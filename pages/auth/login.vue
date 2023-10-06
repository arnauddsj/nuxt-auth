<script setup lang="ts">
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')

function login() {
  router.push('/')
}

definePageMeta({
  layout: "auth",
})
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  <div class="flex flex-col">
  <NuxtLink to="/auth/signup">No account? Signup</NuxtLink>
  <NuxtLink to="/auth/forgot-password">Forgot password?</NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
