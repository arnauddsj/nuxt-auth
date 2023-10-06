<script setup lang="ts">
const email = ref<string>('')

function submit() {
 success.value = !success.value
}

const success = ref<boolean>(false)

definePageMeta({
  layout: "auth",
})
</script>

<template>

  <div>
    <h1>Forgot password?</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Send a reset link</button>
    </form>
  </div>
  <div v-if="success">
    <h1>Success!</h1>
    <p>A reset link has been sent to your email.</p>
  </div>
  <NuxtLink to="/auth/login">I actually remember, login</NuxtLink>
</template>

<style scoped lang="scss"></style>
