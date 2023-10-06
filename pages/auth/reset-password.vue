<script setup lang="ts">
const password = ref<string>("");
const passwordConfirmation = ref<string>("");

function submit() {
  // User should be automatically logged in after password reset success
  success.value = !success.value
}

const success = ref<boolean>(false);

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>
    <h1>Reset your password</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="passwordConfirmation">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirmation"
          v-model="passwordConfirmation"
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  </div>
  <div v-if="success">
    <h1>Success!</h1>
    <p>Your password has been reset.</p>
    <NuxtLink to="/">Continue</NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
