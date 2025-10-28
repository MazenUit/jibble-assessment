<template>
  <v-row justify="center" align="center" class="mb-8" no-gutters>
    <v-col cols="12" md="6" lg="5">
      <v-text-field
        v-model="input"
        label="Search Movie"
        density="comfortable"
        variant="outlined"
        color="primary"
        class="w-100"
        rounded="lg"
        hide-details
        @keyup.enter="emitSearch"
      />
    </v-col>
    <v-col cols="auto" class="ml-md-3 mt-3 mt-md-0">
      <v-btn
        color="primary"
        variant="flat"
        rounded="lg"
        height="56"
        class="px-6 text-uppercase font-weight-medium elevation-2"
        @click="emitSearch"
      >
        Search
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const emit = defineEmits<{ (e: 'search', query: string): void }>()
const emitSearch = () => {
  if (!input.value.trim()) return
  emit('search', input.value.trim())
}
</script>
