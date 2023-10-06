<script setup lang="ts">
import { User, IdName } from './../../../types/users'

const user = ref<User>(
   {
    id: "uuid-1",
    email: "jules@example.fr",
    name: "jules",
    lastLogin: null,
    company: "Corp",
    authStatus: "VERIFIED",
    region: {
      id: "uuid-41",
      name: "APAC",
    },
    group: {
      id: "uuid-3",
      name: "Uncategorized",
    },
  },
)

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

const groups = ref<IdName[]>([
  {
    id: "uuid-3",
    name: "Uncategorized",
  },
  {
    id: "uuid-4",
    name: "Internal",
  },
]);

definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <h1>
    You edit member id {{ $route.params.id }}
  </h1>
  <div class="flex flex-col gap-1">
  <div>
    <label for="name">Name:</label>
    <input type="text" v-model="user.name">
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" v-model="user.email">
  </div>
  <div>
    <label for="company">Company:</label>
    <input type="text" v-model="user.company">
  </div>
  <div>
    <label for="region">Region:</label>
    <select v-model="user.region">
      <option v-for="region in regions" :key="region.id" :value="region">{{ region.name }}</option>
    </select>
  </div>
  <div>
    <label for="group">Group:</label>
    <select v-model="user.group">
      <option v-for="group in groups" :key="group.id" :value="group">{{ group.name }}</option>
    </select>
  </div>
  <div>
    <label for="authStatus">Auth Status:</label>
    <select v-model="user.authStatus">
      <option value="VERIFIED">Verified</option>
      <option value="UNVERIFIED">Unverified</option>
    </select>
  </div>
  </div>
</template>

<style scoped lang="scss"></style>
