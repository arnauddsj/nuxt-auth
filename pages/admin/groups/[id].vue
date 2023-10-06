<script setup lang="ts">
import { Group, IdName } from "./../../../types/users";

// TO DO: Fetch the group and users from API
const group = ref<Group>(
 {
    id: "uuid-3",
    name: "Uncategorized",
    members: [
      {
        id: "uuid-2",
        name: "laure",
      },
    ],
  },
)

const users = ref<IdName[]>([
  {
     id: "uuid-1",
    name: "jules",
  },
  {
     id: "uuid-2",
    name: "laure",
  },
  {
     id: "uuid-88",
    name: "paul",
  }
])

definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <h1>
   You edit Group id {{ $route.params.id }}
  </h1>
  <div>
    <label for="name">Name:</label>
    <input type="text" v-model="group.name">
  </div>
    <div>
    <div>
      <label for="members">Group members:</label>
        <div class="dropdown-menu" aria-labelledby="membersDropdown">
          <a class="dropdown-item" href="#" v-for="user in users" :key="user.id">
            <input type="checkbox" :value="user" v-model="group.members" class="form-check-input"> {{ user.name }}
          </a>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
