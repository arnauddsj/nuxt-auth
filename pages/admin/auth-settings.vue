<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
// TO DO: Fetch domains from API
const domains = ref<string[]>(['example.com', 'example.fr'])
const selectedOption = ref<string>('option1')
</script>

<template>
  <div>
    <h1>Authentication method</h1>
    <div class="flex flex-col">
    <div> <input type="radio" id="option1" name="options" value="option1" v-model="selectedOption">
        <label for="option1">Email + Password combo</label></div>
        <div><input type="radio" id="option2" name="options" value="option2" v-model="selectedOption">
        <label for="option2">Email only (magic link)</label></div>
    </div>
    <h1>Self-Validation settings</h1>
    <button>
      Add
    </button>
    <div>
      Domains:
      <div v-for="(domain, index) in domains" :key="index" class="flex flex-col">
        <div class="flex flex-row gap-2">
          <div>
            {{ domain }}
          </div>
          <button>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
