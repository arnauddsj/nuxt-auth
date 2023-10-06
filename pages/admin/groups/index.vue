<script setup lang="ts">
const router = useRouter()
import { Group } from "./../../../types/users";

definePageMeta({
  layout: "admin",
});
// TO DO: Fetch Groups from API
const groups = ref<Group[]>([
  {
    id: "uuid-3",
    name: "Uncategorized",
    members: [
      {
        id: "uuid-1",
        name: "jules",
      },
      {
        id: "uuid-2",
        name: "laure",
      },
    ],
  },
  {
    id: "uuid-4",
    name: "Internal",
    members: [
      {
        id: "uuid-1",
        name: "jules",
      },
    ],
  },
])

function edit(id: string) {
 router.push(`/admin/groups/${id}`)
}
</script>

<template>
  <div>
    <h1>Groups</h1>
    <button>Add</button>
    <div>
      Groups:
      <div v-for="(group, index) in groups" :key="index" class="flex flex-col">
        <div class="flex flex-row gap-2">
          <div>
            {{ group }}
          </div>
         <button @click="edit(group.id)">Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
