<script setup>
</script>

<template>
  <div class="layout">
    <AdminNavBar class="navbar" />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

main {
  max-width: 100vw;
  overflow-x: auto;
}

.navbar {
  flex: 1;
  margin: 2em;
}

.content {
  flex: 4;
}
</style>
