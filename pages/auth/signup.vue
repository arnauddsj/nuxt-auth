<script setup lang="ts">
import { IdName } from "./../../types/users";

const name = ref<string>('')
const email = ref<string>('')
const company = ref<string>('')
const region = ref<string>('')

function signup() {
  console.log(name, email, company, region)
}

// TO DO: Fetch Regions and authDomains from API
const regions = ref<IdName[]>([
  {
    id: "uuid-41",
    name: "APAC",
  },
  {
    id: "uuid-42",
    name: "EMEA",
  },
])

// 
const authDomains = ref<string[]>([
  "example.fr",
  "example.com",
  "example.co.uk",
])

definePageMeta({
  layout: "auth",
})
</script>

<template>

  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="signup">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="company">Company:</label>
        <input type="text" id="company" v-model="company" required />
      </div>
      <div>
        <label for="region">Region:</label>
        <select id="region" v-model="region" required>
          <option value="" disabled>Select a region</option>
          <option v-for="region in regions" :key="region.id" :value="region.name">{{ region.name }}</option>
        </select>
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
  <NuxtLink to="/auth/login">Already have an account? Login</NuxtLink>
</template>

<style scoped lang="scss"></style>
