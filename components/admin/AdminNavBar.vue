<script lang="ts" setup>
// TO DO: replace this with a proper auth check and logout
const status = 'ADMINISTRATOR'
</script>

<template>
  <nav class="flex flex-col gap-3">
    <ul class="flex flex-col gap-1">
      <li v-if="status === 'ADMINISTRATOR'">
          <NuxtLink to="/admin/auth-settings">
            Auth settings
          </NuxtLink>
      </li>
      <li v-if="status === 'ADMINISTRATOR'">
          <NuxtLink to="/admin/members">
            Members
          </NuxtLink>
      </li>
      <li v-if="status === 'ADMINISTRATOR'">
        <NuxtLink to="/admin/groups">
          Groups
        </NuxtLink>
      </li>
      <li v-if="status === 'ADMINISTRATOR'">
        <NuxtLink to="/admin/regions">
          Regions
        </NuxtLink>
      </li>
      <li class="red">
        <NuxtLink to="/">
          ← Back to front
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>

