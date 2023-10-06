<script setup lang="ts">
import { Region, IdName } from "./../../../types/users";

// TO DO: Fetch Regions, groups and users from API
const region = ref<Region>(
  {
    id: "uuid-41",
    name: "APAC",
    managers: [
      {
        id: "uuid-88",
        name: "paul",
      },
    ],
    defaultGroup: {
      id: "uuid-3",
      name: "Uncategorized",
      }
  }
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
     You edit Region id {{ $route.params.id }}
  </h1>
  <div>
    <label for="name">Name:</label>
    <input type="text" v-model="region.name">
  </div>
  <div>
    <div>
      <label for="managers">Managers:</label>
        <div class="dropdown-menu" aria-labelledby="managersDropdown">
          <a class="dropdown-item" href="#" v-for="manager in users" :key="manager.id">
            <input type="checkbox" :value="manager" v-model="region.managers" class="form-check-input"> {{ manager.name }}
          </a>
        </div>
    </div>
  </div>
  <div>
    <label for="defaultGroup">Default Group:</label>
    <select v-model="region.defaultGroup" class="form-select">
      <option v-for="group in groups" :key="group.id" :value="group">{{ group.name }}</option>
    </select>
  </div>
  <button class="btn btn-primary">Save</button>
</template>

<style scoped lang="scss">
</style>