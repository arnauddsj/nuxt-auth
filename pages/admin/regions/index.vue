<script setup lang="ts">
const router = useRouter()
import { Region } from "./../../../types/users";

// TO DO: Fetch Regions and groups from API
const regions = ref<Region[]>([
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
    },
  },
  {
    id: "uuid-42",
    name: "EMEA",
    managers: [
      {
        id: "uuid-88",
        name: "paul",
      },
    ],
    defaultGroup: {
      id: "uuid-3",
      name: "Uncategorized",
    },
  },
])

function edit(id: string) {
 router.push(`/admin/regions/${id}`)
}

definePageMeta({
  layout: "admin",
})
</script>

<template>
  <div>
    <h1>Regions</h1>
    <button>Add</button>
    <div>
      Regions:
      <div v-for="(region, index) in regions" :key="index" class="flex flex-col">
        <div class="flex flex-row gap-2">
          <div>
            {{ region }}
          </div>
          <button @click="edit(region.id)">Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
