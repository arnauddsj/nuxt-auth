<template>
  <div class="app-wrapper flex-col-center">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>

</script>

<style lang="scss">
:root {
  --body-bg: #f6f6f6;
  --accent-color: #2750a3;

  --min-desktop-width: 90%;
  --max-desktop-width: 148rem;
}

// RESET CSS

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  display: flex;
  flex-direction: column;
  line-height: 2.3em;
  font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
}

body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--body-bg);
  font-size: 1.8rem;
  font-weight: 400;

  * > li {
    list-style: none;
  }

  button {
    // border: none;
    font-family: unset;
    font-size: 1.8rem;
    background: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
}

a,
a:visited,
a:active {
  text-decoration: none;
}

// App classes
#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.app-wrapper {
  width: 100%;
  flex: 1 0 auto;
}
</style>
