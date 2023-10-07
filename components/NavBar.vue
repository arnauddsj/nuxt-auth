<script setup lang="ts">
const router = useRouter()
// TO DO: replace this with a proper auth check and logout
const status = 'ADMINISTRATOR'
const signOut = () => {
  router.push('/auth/login')
}
</script>

<template>
  <nav class="flex justify-between">
    <ul class="flex gap-1">
      <li class="red">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <div v-if="status === 'ADMINISTRATOR' || status === 'MEMBER' || status === 'MANAGER'">
          <NuxtLink to="/member/profile">
            Member profile
          </NuxtLink>
        </div>
      </li>
      <li>
        <div v-if="status === 'ADMINISTRATOR' || status === 'MANAGER'">
          <NuxtLink to="/member/regions">
            Region Manager
          </NuxtLink>
        </div>
      </li>
      <li>
        <div v-if="status === 'ADMINISTRATOR'">
          <NuxtLink to="/admin">
            Admin
          </NuxtLink>
        </div>
      </li>
    </ul>
    <div>
      <button @click="signOut()">
        <span>Logout</span>
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
