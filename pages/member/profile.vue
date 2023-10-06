<script setup lang="ts">
const { userState } = storeToRefs(useUserStore())
</script>

<template>
  <div>
    <div>
      This is the member profile. WIP
    </div>
    <div>
      {{ userState }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
