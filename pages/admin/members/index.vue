<script setup lang="ts">
const router = useRouter()
import { User } from "./../../../types/users";

// TO DO: Fetch members from API
const members = ref<User[]>([
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
  {
    id: "uuid-2",
    email: "laure@example.fr",
    name: "laure",
    lastLogin: null,
    authStatus: "VERIFIED",
    company: "Flo Ltd.",
    region: {
      id: "uuid-42",
      name: "EMEA",
    },
    group: {
      id: "uuid-3",
      name: "Uncategorized",
    },
  },
  {
    id: "uuid-88",
    email: "paul@example.fr",
    name: "paul",
    lastLogin: null,
    authStatus: "VERIFIED",
    company: "Flo Ltd.",
    region: {
      id: "uuid-42",
      name: "EMEA",
    },
    group: {
      id: "uuid-4",
      name: "internal",
    },
  },
]);

function edit(id: string) {
 router.push(`/admin/members/${id}`)
}

definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <h1>Members</h1>
    <button>Add</button>
    <div>
      Domains:
      <div v-for="(member, index) in members" :key="index" class="flex flex-col">
        <div class="flex flex-row gap-2">
          <div>
            {{ member }}
          </div>
          <button @click="edit(member.id)">Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
